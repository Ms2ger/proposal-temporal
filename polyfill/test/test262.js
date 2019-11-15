// Copyright (C) 2019 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [propertyHelper.js]
---*/

assert.sameValue(typeof Temporal, "object");
verifyNotEnumerable(this, "Temporal");
verifyWritable(this, "Temporal");
verifyConfigurable(this, "Temporal");
