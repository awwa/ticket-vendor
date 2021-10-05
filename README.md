# ticket-vender
1000円でチケット購入時のお釣りと硬貨の枚数を計算する関数

## 実装方針

- 計算とログ出力は分離する
  - Unit testするため
  - プログラムの再利用性を高めるため
- 入力エラーを例外で表現
  - これもプログラムの再利用性を高めるため
  - 例外メッセージに関して要求事項がないのでわかりやすさ優先
- 第三者が見て理解できるコメントをつける
  - 誰でもメンテナンスができるようにするため
  - 一応、JSDocのフォーマットに従う
- 販売する切符の最高価格(1000円)は変わらないものとしてハードコーディング
  - 実装簡易化を優先
  - 実際には使い回しが効かないのでダメ

## 実行環境

Node.js `v16.9.1` にて動作確認

## 準備

```
$ git clone git@github.com:awwa/ticket-vendor.git
$ npm install
```

## テスト

```
$ npm test

> ticket-vendor@1.0.0 test
> jest

 PASS  __test__/src/calculator.test.js
  calculator
    calcChangeFrom1000()
      ✓ return successful result for input 10 (3 ms)
      ✓ return successful result for input 20 (1 ms)
      ✓ return successful result for input 130
      ✓ return successful result for input 200
      ✓ return successful result for input 640 (1 ms)
      ✓ return successful result for input 990
      ✓ return successful result for input 1000 (1 ms)
      ✓ throw RangeError for input 0 (11 ms)
      ✓ throw RangeError for input 1010 (1 ms)
      ✓ throw RangeError for input -500
      ✓ throw RangeError for input 999 (1 ms)
      ✓ throw TypeError for input 999.99 (1 ms)
      ✓ throw TypeError for input null (1 ms)
      ✓ throw TypeError for input String (1 ms)
      ✓ throw TypeError for input Boolean

Test Suites: 1 passed, 1 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        0.568 s, estimated 1 s
Ran all test suites.
```

## 実行

```
$ node index.js
price: 1000
{ change: 0, coins: { '10': 0, '50': 0, '100': 0, '500': 0 } }
price: 360
{ change: 640, coins: { '10': 4, '50': 0, '100': 1, '500': 1 } }
price: -500
/Users/wataru/github/ticket-vendor/src/calculator.js:16
        throw new RangeError('エラー:入力値が範囲外(10以上1000以下)');
        ^

RangeError: エラー:入力値が範囲外(10以上1000以下)
    at Object.calcChangeFrom1000 (/Users/wataru/github/ticket-vendor/src/calculator.js:16:15)
    at main (/Users/wataru/github/ticket-vendor/index.js:5:31)
    at Object.<anonymous> (/Users/wataru/github/ticket-vendor/index.js:11:1)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
    at node:internal/main/run_main_module:17:47
```