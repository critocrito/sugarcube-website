#!/usr/bin/env bash

set -Eeuo pipefail
trap cleanup SIGINT SIGTERM ERR EXIT

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd -P)

usage() {
	cat <<EOF
Usage: $(basename "${BASH_SOURCE[0]}") [-h] [-v] [-p]

Deploy the website. Defaults to deploying to the staging area.

Available options:

-h, --help       Print this help and exit
-v, --verbose    Print script debug info
-p, --production Deploy to production instead of staging
EOF
	exit
}

cleanup() {
	trap - SIGINT SIGTERM ERR EXIT
	### script cleanup here
	[[ -d out ]] && rm -rf out
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
	msg_error "$msg"
	exit "$code"
}

parse_params() {
	# default values of variables set from params
	prod=0
	base_path="sugarcubetools-stg"
	target_path="public_html_stg"

	while :; do
		case "${1-}" in
		-h | --help) usage ;;
		-v | --verbose) set -x ;;
		--no-color) NO_COLOR=1 ;;
		-p | --production) prod=1 ;;
		-?*) die "Unknown option: $1" ;;
		*) break ;;
		esac
		shift
	done

	args=("$@")

	### check required params and arguments
	[[ "${prod}" -eq "1" ]] && base_path="sugarcubetools"
	[[ "${prod}" -eq "1" ]] && target_path="public_html"

	return 0
}

parse_params "$@"
setup_colors

### script logic here

# The deploy path is the target directory on the remote host.
now="$(date +'%Y-%m-%d_%H-%M-%S')"
deploy_path="~/deploys/${base_path}-${now}"

msg_info "clearing stale builds"

yarn -s compile

msg_info "deploying to remote host"

# FIXME: Change this to sugarcube@sugarcubetools.net once the production site is migrated.
rsync -qaz out/ "sugarcube@dev.sugarcubetools.net:${deploy_path}" || die "failed to sync to the remote host"
ssh -q sugarcube@dev.sugarcubetools.net "ln -sfn ${deploy_path} ${target_path}"
