#!/bin/bash

export NODE_PATH=$PWD/node_modules
npm install test262-harness esm
if [ ! -d "test262" ]; then
  git clone --depth 1 https://github.com/tc39/test262.git
fi

cd test/

test262-harness -r json --test262Dir ../test262 --prelude ./prelude.js --hostArgs="-r esm" "./*/**/*.js" > ../exec.out
./parseResults.py ../exec.out
rm ../exec.out
