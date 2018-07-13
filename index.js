// based on the code from Free Code Camp

let cid2;

function checkCashRegister(price, cash, cid) {
    let change = cash - price;
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
      // new variable to subtract values from &&
       
      const return_draw = cid;


        if (change >= 100){
          change-=100;
          return_draw[0][1]-= 100;
          console.log(change, return_draw);
        }
         if (change / 20 >= 1) {
          const times = Math.floor(change / 20);
          change -= times * 20;
          return_draw[1][1] -= times * 20;
        }
         if (change / 10 >= 1) {
          const times = Math.floor(change / 10);
          change -= times * 10;
          return_draw[2][1] -= times * 10;
        }
         if (change / 5 >= 1) {
          const times = Math.floor(change / 5);
          change -= times * 5;
          return_draw[3][1] -= times * 5;
        }
         if (change / 1 >= 1) {
          const times = Math.floor(change / 1);
          change -= times;
          return_draw[4][1] -= times;
        }
         if (change >= .25 ) {
          const times = Math.floor(change / .25);
          change -= (times * .25);
          return_draw[5][1] -= (times * .25);
        }
       
        return giveBackChange(return_draw);
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
  
  let answer = checkCashRegister(5.25, 10, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  console.log(answer);