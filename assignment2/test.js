QUnit.module('Assignment 2 QUnit Tests');

QUnit.test('TC1: calculateVAT returns 1200 for price 1000', function(assert) {
    assert.equal(calculateVAT(1000), 1200, 'VAT calculation should return 1200');
});

QUnit.test('TC2: setGroupPrice returns 3000 for 1000 and 3 passengers', function(assert) {
    assert.equal(setGroupPrice(1000, 3), 3000, 'Group price for 3 passengers should be 3000');
});

QUnit.test('TC3: setGroupPrice returns 8000 for 1000 and 10 passengers', function(assert) {
    assert.equal(setGroupPrice(1000, 10), 8000, 'Group price for 10 passengers should be 8000');
});

QUnit.test('TC4: setGroupPrice returns 42000 for 1000 and 60 passengers', function(assert) {
    assert.equal(setGroupPrice(1000, 60), 42000, 'Group price for 60 passengers should be 42000');
});

QUnit.test('TC5: calculateDiscountedPrice returns 700 for Hello30 and 1000', function(assert) {
    assert.equal(calculateDiscountedPrice('Hello30', 1000), 700, 'Hello30 coupon should return 700');
});

QUnit.test('TC6: calculateDiscountedPrice returns 600 for Hello40 and 1000', function(assert) {
    assert.equal(calculateDiscountedPrice('Hello40', 1000), 600, 'Hello40 coupon should return 600');
});

QUnit.test('TC7: calculateDiscountedPrice returns 1000 for empty coupon code and 1000', function(assert) {
    assert.equal(calculateDiscountedPrice('', 1000), 1000, 'Empty coupon should return the original price');
});

QUnit.test('TC8: calculateDiscountedPrice returns -1 for invalid coupon TEST and 1000', function(assert) {
    assert.equal(calculateDiscountedPrice('TEST', 1000), -1, 'Invalid coupon should return -1');
});

QUnit.test('TC9: calculateDiscountedPrice returns 500 for Hello50 and 1000', function(assert) {
    assert.equal(calculateDiscountedPrice('Hello50', 1000), 500, 'Hello50 coupon should return 500');
});

QUnit.test('TC10: setInternationalCode returns 33 for FRANCE', function(assert) {
    assert.equal(setInternationalCode('FRANCE'), 33, 'FRANCE should return code 33');
});

QUnit.test('TC11: setInternationalCode returns 353 for IRELAND', function(assert) {
    assert.equal(setInternationalCode('IRELAND'), 353, 'IRELAND should return code 353');
});

QUnit.test('TC12: calculateVAT returns a value greater than 1000 for price 1000', function(assert) {
    assert.ok(calculateVAT(1000) > 1000, 'VAT result should be greater than 1000');
});

QUnit.test('TC13: isValidCountry and isValidCoupon return true for valid inputs', function(assert) {
    assert.ok(isValidCountry('IRELAND'), 'IRELAND should be a valid country');
    assert.ok(isValidCoupon('HELLO30'), 'HELLO30 should be a valid coupon');
});

QUnit.test('TC14: createFullName returns concatenated full name for valid names', function(assert) {
    assert.equal(createFullName('John', 'Doe'), 'John Doe', 'Valid first and last name should return full name');
});

QUnit.test('TC15: createFullName returns -1 when last name is empty', function(assert) {
    assert.equal(createFullName('John', ''), -1, 'Empty last name should return -1');
});

QUnit.test('TC16: createFullName returns -1 when first name is empty', function(assert) {
    assert.equal(createFullName('', 'Doe'), -1, 'Empty first name should return -1');
});

QUnit.test('TC17: valid country names are accepted by isValidCountry', function(assert) {
    const countries = ['FRANCE', 'IRELAND', 'ENGLAND'];
    countries.forEach(function(country) {
        assert.ok(isValidCountry(country), `${country} should be valid`);
    });
});

QUnit.test('TC18: setInternationalCode returns correct codes for valid countries', function(assert) {
    const countryCodes = {
        FRANCE: 33,
        IRELAND: 353,
        ENGLAND: 44
    };
    Object.keys(countryCodes).forEach(function(country) {
        assert.equal(setInternationalCode(country), countryCodes[country], `${country} should return ${countryCodes[country]}`);
    });
});
