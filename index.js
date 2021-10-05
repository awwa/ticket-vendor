const calculator = require('./src/calculator');

function main(price) {
    console.log(`price: ${price}`);
    const result = calculator.calcChangeFrom1000(price);
    console.log(result);
    return result;
}
main(1000);
main(360);
main(-500);
