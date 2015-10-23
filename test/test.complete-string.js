'use strict';

jest.dontMock('../complete-string');

var CompleteString = require('../complete-string');

describe('CompleteString', function () {
    it('is ready', function () {
        expect(CompleteString).toMatch(jasmine.any(Object));
    });
});

describe('withChar', function () {
    it('should works', function () {
        expect(CompleteString.withChar).toMatch(jasmine.any(Function));
        expect(CompleteString.withChar('1', 2, 'x')).toEqual('x1');
        expect(CompleteString.withChar('11', 2, 'x')).toEqual('11');
    });

    it('should not work with bad params', function () {
        expect(function () {
            CompleteString.withChar('1', 2, 'xx');
        }).toThrow();

        expect(function () {
            CompleteString.withChar('111', 2, 'x')
        }).not.toThrow();
    });
});

describe('withZero', function () {
    it('withZero', function () {
        expect(CompleteString.withZero).toMatch(jasmine.any(Function));
        expect(CompleteString.withZero('1', 2)).toEqual('01');
    });
});
