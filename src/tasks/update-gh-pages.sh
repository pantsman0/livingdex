#!/usr/bin/env zsh

if [[ ! -d "gh-pages" ]]; then
  git clone git@github.com:itsjavi/livingdex.git gh-pages
  cd gh-pages
  git checkout gh-pages
  git pull --rebase
  cd -
fi

mv gh-pages/.git gh-pages-git
rm -rf gh-pages/*

./src/tasks/build.sh
cp -R public/ gh-pages
mv gh-pages-git gh-pages/.git

cd gh-pages
git add -A
git commit -m "update gh-pages"
git push

cd -