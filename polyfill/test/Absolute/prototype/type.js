// Copyright (C) 2019 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

const {Absolute} = Temporal;

assert.sameValue(typeof Absolute.prototype, "object");
assert.notSameValue(Absolute.prototype, null);
