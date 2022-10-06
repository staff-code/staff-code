#!/usr/bin/env bash

set -e

if [[ $OSTYPE == darwin* ]] ; then
  if hash wget 2>/dev/null; then
    printf "wget found.\n"
  else
    brew install wget
  fi
fi

npm i
