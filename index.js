// based on the code from Free Code Camp

let cid2;

function checkCashRegister(price, cash, cid) {
    const change = cash - price;
    // Here is your change, ma'am.
    cid2 = cid;
    let drawValue = new Map(cid.reverse());
    let totalCash = 0;
    for (let val of drawValue.values()){
      totalCash += Math.floor(val);
    }
    console.log(totalCash, change);
    if (totalCash < change) {
      return NoDeal(cid);
    }
    else {
      // new variable to subtract values from
      const return_draw = cid;
      // copy of change to subtract from
      let change2 = change;

      // loop through array until change = 0 
      for (let x = 0; x < cid.length; x++) {
        console.log(x);

        if (change2 <= 0) {
         return giveBackChange(return_draw);
        }

        let value = return_draw[x][1];

        if (change2 > 0 && change2 / value > 1) {
          let amount = Math.floor(change2 / value) * value;
          change2 -= amount;
          return_draw[x][1] -= amount;

        }
    }
 
  }
}

  function giveBackChange(moneyBack) {
         // return open and pass back return_draw as .change
         return {status: "OPEN", change: moneyBack};
  }

  function NoDeal(cid) {
    return {status: "INSUFFICIENT_FUNDS", change: cid};
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  let answer = checkCashRegister(100, 200, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  console.log(answer);