type Coin = 50 | 100 | 500;

interface Yen {
  currency: "Yen";
  coin: Coin;
  pieces: number;
}

const coins: Yen[] = [
  { currency: "Yen", coin: 500, pieces: 10 },
  { currency: "Yen", coin: 100, pieces: 5 },
  { currency: "Yen", coin: 50, pieces: 20 },
];

coins.map((coin, index) =>
  console.log(`${coin.coin} ${coin.currency} coin - ${coin.pieces} pieces`)
);

// let total = 0;

// coins.map((coin, index) => {
//   total += coin.coin * coin.pieces;
//   return console.log(
//     `${coin.coin} x ${coin.pieces} = ${coin.coin * coin.pieces} ${
//       coin.currency
//     }`
//   );
// });

// console.log(`${total} Yens`);

export {};
