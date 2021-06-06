#!/usr/bin/env bash

set -Eeuo pipefail
trap cleanup SIGINT SIGTERM ERR EXIT

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd -P)

usage() {
	cat <<EOF
Usage: $(basename "${BASH_SOURCE[0]}") [-h] [-v] [-o] [-s] [-e] file1 [file22...]

Convert images to correct formats.

Available options:

-h, --help      Print this help and exit
-v, --verbose   Print script debug info
-o, --out-dir   Output directory for converted image files, defaults to tmp/images
-e, --encoding  Select the image format, defaults to webp,jpg.
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
	out_dir=tmp/images
	scale=1400
	encoding=webp

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

	[[ ${#args[@]} -eq 0 ]] && die "Provide at least one source image file"
	IFS=',' read -ra scales <<<"$scale"
	IFS=',' read -ra encodings <<<"$encoding"

	for encoding in "${encodings[@]}"; do
		case "$encoding" in
		webp | jpg) ;;

		*)
			die "$encoding is not a valid file format. Use webp or jpg."
			;;
		esac
	done

	return 0
}

slugify() {
	echo -n "$1" |
		iconv -f utf8 -t ascii//TRANSLIT |
		sed -e 's/[^[:alnum:]]/-/g' |
		tr -s '-' |
		tr A-Z a-z
}

parse_params "$@"
setup_colors

encode_webp() {
	local input_file=$1
	local output_file=$2
	local scale=$3

	convert "$input_file" -quality 50 -resize "${scale}x>" "$output_file"
}

encode_jpg() {
	local input_file=$1
	local output_file=$2
	local scale=$3

	convert "$input_file" -resize "${scale}x>" "$output_file"
}

for file in "${args[@]}"; do
	filename=$(basename -- "$file")
	filename="${filename%.*}"
	slug="$(slugify $filename)"

	mkdir -p "$out_dir"

	for scale in "${scales[@]}"; do
		for encoding in "${encodings[@]}"; do
			output="$out_dir/${slug}.$encoding"

			if [ "$encoding" = "webp" ]; then
				encode_webp "$file" "$output" "$scale"
			elif [ "$encoding" = "jpg" ]; then
				encode_jpg "$file" "$output" "$scale"
			else
				die "no useable file format found: $encoding"
			fi
		done
	done
done
