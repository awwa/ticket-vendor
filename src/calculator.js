/**
 * 被減数
 * @const {number}
 */
const MINUEND = 1000;
/**
 * コイン一覧
 * @const {array}
 */
 const COINS = [500, 100, 50, 10];
/**
 * 1000円でチケット購入時のお釣りと硬貨の枚数を計算する関数
 * @param {int} price - 購入するチケット価格 [10 ~ 1000]の10で割り切れる値
 * @return {Object} - 計算結果 {change: 990, coins: {'500': 1, '100': 4, '50': 1, '10': 4}}
 * @example
 *  calcChangeFrom1000(10);
 */
function calcChangeFrom1000(price) {
    // 入力値チェック
    if (!Number.isInteger(price)) {
        throw new TypeError('エラー:入力値が整数でない');
    }
    if (price < 10 || price > 1000) {
        throw new RangeError('エラー:入力値が範囲外(10以上1000以下)');
    }
    if (price % 10 != 0) {
        throw new RangeError('エラー:入力値が10で割り切れない');
    }
    // お釣りの計算
    const change = MINUEND - price;
    // コイン枚数の計算
    let remain = change;
    const coinNumber = {};
    for (coinUnit of COINS) {
        coinNumber[coinUnit] = Math.trunc(remain / coinUnit);
        remain -= coinNumber[coinUnit] * coinUnit;
    }
    return {change: change, coins: coinNumber};
}
const calculator = {};
calculator.calcChangeFrom1000 = calcChangeFrom1000;
module.exports = calculator;
