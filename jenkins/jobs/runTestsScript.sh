#!/bin/bash

ipUrl=${1}

set -x

echo "Runing on the docker:"
hostname
cd ../../
npm ci
IP=${ipUrl} npx playwright test --project=chromium
ls -al
