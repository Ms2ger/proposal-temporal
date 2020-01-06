#!/bin/bash

export NODE_PATH=$PWD/node_modules
npm install test262-harness esm
git clone --depth 1 https://github.com/tc39/test262.git

test262-harness --test262Dir ./test262 --prelude prelude.js --hostArgs="-r esm" $@ | tee exec.out
if grep -q '^[1-9][0-9]* failed$' exec.out; then
  rm exec.out
  exit 1
fi

rm exec.out
