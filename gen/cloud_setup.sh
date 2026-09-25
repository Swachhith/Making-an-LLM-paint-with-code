#!/usr/bin/env bash
# Prepare a Claude cloud sandbox (Ubuntu 24.04, x86_64) to render sketches.
#
# Paste this into the cloud environment's "Setup script" box so it runs once
# and is cached in the environment snapshot. If it was not configured there, the
# agent runs it itself: `bash gen/cloud_setup.sh` (about 1-2 minutes).
#
# Why it is shaped like this: the default "Trusted" network allows PyPI, apt and
# storage.googleapis.com, but NOT Playwright's browser CDN and NOT
# googlechromelabs.github.io (where "latest stable" is normally resolved). So a
# pinned Chrome for Testing build is fetched straight from storage.googleapis.com
# and handed to Playwright through WC_CHROME.
set -euo pipefail

CFT_VERSION="154.0.8037.57"
DEST="/opt/chrome-${CFT_VERSION}"
SUDO=""; [ "$(id -u)" -ne 0 ] && command -v sudo >/dev/null && SUDO="sudo"

python3 -m pip install --quiet --disable-pip-version-check playwright pillow numpy

if [ ! -x "${DEST}/chrome-linux64/chrome" ]; then
  tmp="$(mktemp -d)"
  curl -fsSL -o "${tmp}/chrome.zip" \
    "https://storage.googleapis.com/chrome-for-testing-public/${CFT_VERSION}/linux64/chrome-linux64.zip"
  $SUDO mkdir -p "${DEST}"
  $SUDO python3 -m zipfile -e "${tmp}/chrome.zip" "${DEST}"
  $SUDO chmod +x "${DEST}/chrome-linux64/chrome" "${DEST}/chrome-linux64/chrome_crashpad_handler" || true
  rm -rf "${tmp}"
fi

# Chrome's shared libraries (libnss3, libgbm1, fonts, ...) through apt.
$SUDO python3 -m playwright install-deps chromium >/dev/null

CHROME="${DEST}/chrome-linux64/chrome"
echo "export WC_CHROME=${CHROME}" | $SUDO tee /etc/profile.d/wc_chrome.sh >/dev/null
echo "WC_CHROME=${CHROME}"
"${CHROME}" --version
