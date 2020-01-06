// Copyright (C) 2019 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [propertyHelper.js]
---*/

const {Absolute} = Temporal;

assert.sameValue(typeof Absolute.prototype, "object");
assert.notSameValue(Absolute.prototype, null);

verifyProperty(Absolute, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
/*
describe('Absolute.prototype', () => {
  it('Absolute.prototype has getEpochSeconds', () => {
    assert('getEpochSeconds' in Absolute.prototype);
  });
  it('Absolute.prototype has getEpochMilliseconds', () => {
    assert('getEpochMilliseconds' in Absolute.prototype);
  });
  it('Absolute.prototype has getEpochMicroseconds', () => {
    assert('getEpochMicroseconds' in Absolute.prototype);
  });
  it('Absolute.prototype has getEpochNanoseconds', () => {
    assert('getEpochNanoseconds' in Absolute.prototype);
  });
  it('Absolute.prototype.inTimeZone is a Function', () => {
    equal(typeof Absolute.prototype.inTimeZone, 'function');
  });
  it('Absolute.prototype.toString is a Function', () => {
    equal(typeof Absolute.prototype.toString, 'function');
  });
  it('Absolute.prototype.toJSON is a Function', () => {
    equal(typeof Absolute.prototype.toJSON, 'function');
  });
});

*/
