const process = require("process");
const import_ = require("esm")(globalThis)
const {setup} = import_(`${process.cwd()}/lib/index.mjs`);
setup(globalThis);
