#!/usr/bin/env bash

set -Eeuo pipefail
trap cleanup SIGINT SIGTERM ERR EXIT

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd -P)

usage() {
	cat <<EOF
Usage: $(basename "${BASH_SOURCE[0]}") [-h] [-v] [-o] [-s] [-e] file1 [file2...]

Convert animated GIF into videos.

Available options:

-h, --help      Print this help and exit
-v, --verbose   Print script debug info
-o, --out-dir   Output sirectory for converted video files, defaults to videos
-e, --encoding  Select the encoding format, defaults to av1,hevc,h264
EOF
	exit
}

cleanup() {
	trap - SIGINT SIGTERM ERR EXIT
	# script cleanup here
}

setup_colors() {
	if [[ -t 2 ]] && [[ -z "${NO_COLOR-}" ]] && [[ "${TERM-}" != "dumb" ]]; then
		NOFORMAT='\033[0m' RED='\033[0;31m' GREEN='\033[0;32m' ORANGE='\033[0;33m' BLUE='\033[0;34m' PURPLE='\033[0;35m' CYAN='\033[0;36m' YELLOW='\033[1;33m'
	else
		NOFORMAT='' RED='' GREEN='' ORANGE='' BLUE='' PURPLE='' CYAN='' YELLOW=''
	fi
}

msg() {
	echo >&2 -e "${1-}"
}

msg_error() {
	msg "${RED}error${NOFORMAT} - ${1}"
}

msg_info() {
	msg "${CYAN}info${NOFORMAT}  - ${1}"
}

die() {
	local msg=$1
	local code=${2-1} # default exit status 1
	msg "$msg"
	exit "$code"
}

parse_params() {
	# default values of variables set from params
	out_dir=tmp/gif
	encoding=av1,hevc,h264

	while :; do
		case "${1-}" in
		-h | --help) usage ;;
		-v | --verbose) set -x ;;
		--no-color) NO_COLOR=1 ;;
		-o | --out-dir)
			out_dir="${2-}"
			shift
			;;
		-e | --encoding)
			encoding="${2-}"
			shift
			;;
		-?*) die "Unknown option: $1" ;;
		*) break ;;
		esac
		shift
	done

	args=("$@")

	[[ ${#args[@]} -eq 0 ]] && die "Provide at least one source video file"
	IFS=',' read -ra encodings <<<"$encoding"

	for encoding in "${encodings[@]}"; do
		case "$encoding" in
		av1 | hevc | h264) ;;

		*)
			die "$encoding is not a valid encoding. Use av1, hvec or h264."
			;;
		esac
	done

	return 0
}

slugify() {
	echo -n "$1" |
		iconv -f utf8 -t ascii//TRANSLIT |
		sed -e 's/[^[:alnum:]]//g' |
		tr -s '-' |
		tr A-Z a-z
}

encode_h264() {
	local input_file=$1
	local output_file=$2

	ffmpeg -i "$input_file" \
		-map_metadata -1 \
		-an \
		-c:v libx264 \
		-crf 24 \
		-preset veryslow \
		-profile:v main \
		-pix_fmt yuv420p \
		-movflags +faststart \
		-vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
		"$output_file"
}

# For Safari and Edge (19% of users): MP4 with HEVC and AAC.
encode_hevc() {
	local input_file=$1
	local output_file=$2

	ffmpeg -i "$input_file" \
		-map_metadata -1 \
		-an \
		-c:v libx265 \
		-crf 24 \
		-preset veryslow \
		-pix_fmt yuv420p \
		-movflags +faststart \
		-tag:v hvc1 \
		-vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
		"$output_file"
}

# For desktop Chrome and Firefox (34% of users as of April 2020): MP4 container
# with AV1 video codec and Opus audio codec.
encode_av1() {
	local input_file=$1
	local output_file=$2

	ffmpeg -i "$input_file" \
		-map_metadata -1 \
		-an \
		-c:v librav1e \
		-qp 80 \
		-tile-columns 4 \
		-tile-rows 4 \
		-pix_fmt yuv420p \
		-movflags +faststart \
		-vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
		"$output_file"
}

parse_params "$@"
setup_colors

for file in "${args[@]}"; do
	filename=$(basename -- "$file")
	filename="${filename%.*}"
	slug="$(slugify $filename)"

	mkdir -p "$out_dir"

	# Generate poster image
	msg_info "Generate poster image $out_dir/$slug.jpg"
	ffmpeg -i "$file" \
		-ss 00:00:05 \
		-vframes 1 \
		-vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
		-q:v 1 \
		-y \
		"$out_dir/$slug.jpg"

	for encoding in "${encodings[@]}"; do
		output="$out_dir/$filename.$encoding.mp4"

		msg_info "Converting $file -> $output: $encoding"

		if [ "$encoding" = "av1" ]; then
			encode_av1 "$file" "$output"
		elif [ "$encoding" = "hevc" ]; then
			encode_hevc "$file" "$output"
		elif [ "$encoding" = "h264" ]; then
			encode_h264 "$file" "$output"
		else
			die "no useable encoding found: $encoding"
		fi
	done
done
