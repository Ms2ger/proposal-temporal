#!/bin/bash

export NODE_PATH=$PWD/node_modules
npm install test262-harness esm
git clone --depth 1 https://github.com/tc39/test262.git

#cd test/

test262-harness -r json --test262Dir ./test262 --prelude ./test/prelude.js --hostArgs="-r esm" "test/*/**/*.js" > exec.out
./test/parseResults.py exec.out
rm exec.out
