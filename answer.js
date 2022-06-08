"use strict";
exports.__esModule = true;
var coins = [
    { currency: "Yen", coin: 500, pieces: 10 },
    { currency: "Yen", coin: 100, pieces: 5 },
    { currency: "Yen", coin: 50, pieces: 20 },
];
coins.map(function (coin, index) {
    return console.log("".concat(coin.coin, " ").concat(coin.currency, " coin - ").concat(coin.pieces, " pieces"));
});
var total = 0;
coins.map(function (coin, index) {
    total += coin.coin * coin.pieces;
    return console.log("".concat(coin.coin, " x ").concat(coin.pieces, " = ").concat(coin.coin * coin.pieces, " ").concat(coin.currency));
});
console.log("".concat(total, " Yens"));
