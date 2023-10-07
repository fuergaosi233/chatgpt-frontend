#!/bin/bash
set -ex
file_path="./chat.openai.com/index.html"   

perl -i -pe 's/"user":\{.*?\}/"user":{}/' "$file_path"
npx prettier --ignore-errors --write "**/*.js" "**/*.html"