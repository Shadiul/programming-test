# Programming Test

Language used: Typescript



Used Coin as a type and possible types of coins are 50, 100 and 500.

Used Yen as an interface to describe the coin and the number of pieces.

```ts
type Coin = 50 | 100 | 500;

interface Yen {
  currency: "Yen";
  coin: Coin;
  pieces: number;
}
```

We can have a List/Array of Yens named as coins.

```ts
const coins: Yen[] = [
  { currency: "Yen", coin: 500, pieces: 10 },
  { currency: "Yen", coin: 100, pieces: 5 },
  { currency: "Yen", coin: 50, pieces: 20 },
];
```



Now for statistical output of the coins list we can just map through the list.

```ts
coins.map((coin, index) =>
  console.log(`${coin.coin} ${coin.currency} coin - ${coin.pieces} pieces`)
);
```



Lets take a look at the output:

```bash
PS C:\dev\programming-test> tsc .\answer_1.ts 
PS C:\dev\programming-test> node .\answer_1.js

500 yen coin - 10 pieces
100 yen coin - 5 pieces
50 yen coin - 20 pieces
```



#### Usecase of the process

We just created a simple interface to describe a Typed Coin. We can use this abstraction to create multiple coins. For example we can create our own coin BDT:

```ts
interface Bdt {
  currency: "BDT";
  coin: Coin;
  pieces: number;
}
```

We can use our Coin for various purposes like creating typed list of data, calculate total amount, manage an inventory of coins.

As an example we can calculate total amount of money we have from the coins array.

```ts
let total = 0;

coins.map((coin, index) => {
  total += coin.coin * coin.pieces;
  return console.log(
    `${coin.coin} x ${coin.pieces} = ${coin.coin * coin.pieces} ${
      coin.currency
    }`
  );
});

console.log(`${total} Yens`);
```

Output:

```bash
PS C:\dev\programming-test> tsc .\answer_1.ts 
PS C:\dev\programming-test> node .\answer_1.js

500 x 10 = 5000 Yen
100 x 5 = 500 Yen
50 x 20 = 1000 Yen
6500 Yens
```
