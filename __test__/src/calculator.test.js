const calculator = require('../../src/calculator.js');
describe('calculator', () => {
    describe('calcChangeFrom1000()', () => {
        test('return successful result for input 10', () => {
            const result = calculator.calcChangeFrom1000(10);
            expect(result).toEqual({change: 990, coins: {'500': 1, '100': 4, '50': 1, '10': 4}});
        });
        test('return successful result for input 20', () => {
            const result = calculator.calcChangeFrom1000(20);
            expect(result).toEqual({change: 980, coins: {'500': 1, '100': 4, '50': 1, '10': 3}});
        });
        test('return successful result for input 130', () => {
            const result = calculator.calcChangeFrom1000(130);
            expect(result).toEqual({change: 870, coins: {'500': 1, '100': 3, '50': 1, '10': 2}});
        });
        test('return successful result for input 200', () => {
            const result = calculator.calcChangeFrom1000(200);
            expect(result).toEqual({change: 800, coins: {'500': 1, '100': 3, '50': 0, '10': 0}});
        });
        test('return successful result for input 640', () => {
            const result = calculator.calcChangeFrom1000(640);
            expect(result).toEqual({change: 360, coins: {'500': 0, '100': 3, '50': 1, '10': 1}});
        });
        test('return successful result for input 990', () => {
            const result = calculator.calcChangeFrom1000(990);
            expect(result).toEqual({change: 10, coins: {'500': 0, '100': 0, '50': 0, '10': 1}});
        });
        test('return successful result for input 1000', () => {
            const result = calculator.calcChangeFrom1000(1000);
            expect(result).toEqual({change: 0, coins: {'500': 0, '100': 0, '50': 0, '10': 0}});
        });
        test('throw RangeError for input 0', () => {
            expect(() => {calculator.calcChangeFrom1000(0)}).toThrow(new RangeError('エラー:入力値が範囲外(10以上1000以下)'));
        });
        test('throw RangeError for input 1010', () => {
            expect(() => {calculator.calcChangeFrom1000(1010)}).toThrow(new RangeError('エラー:入力値が範囲外(10以上1000以下)'));
        });
        test('throw RangeError for input -500', () => {
            expect(() => {calculator.calcChangeFrom1000(-500)}).toThrow(new RangeError('エラー:入力値が範囲外(10以上1000以下)'));
        });
        test('throw RangeError for input 999', () => {
            expect(() => {calculator.calcChangeFrom1000(999)}).toThrow(new RangeError('エラー:入力値が10で割り切れない'));
        });
        test('throw TypeError for input 999.99', () => {
            expect(() => {calculator.calcChangeFrom1000(999.99)}).toThrow(new TypeError('エラー:入力値が整数でない'));
        });
        test('throw TypeError for input null', () => {
            expect(() => {calculator.calcChangeFrom1000(null)}).toThrow(new TypeError('エラー:入力値が整数でない'));
        });
        test('throw TypeError for input String', () => {
            expect(() => {calculator.calcChangeFrom1000('Hello')}).toThrow(new TypeError('エラー:入力値が整数でない'));
        });
        test('throw TypeError for input Boolean', () => {
            expect(() => {calculator.calcChangeFrom1000(true)}).toThrow(new TypeError('エラー:入力値が整数でない'));
        });
    });
});