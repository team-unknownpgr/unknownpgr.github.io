#!/bin/sh
cd "$(dirname "$0")"

./blog-build.sh

git add .
git commit -m "[post] Post update post at $(date) $(time)."
git push origin master
echo Publish finished.
read -p "Press any key to resume ..."
