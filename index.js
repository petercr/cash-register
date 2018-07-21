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
       
      const return_draw = [];


        if (change >= 100){
          change-=100;
          return_draw.push([cid[0], 100]);
          console.log(change, return_draw);
        }
         if (change / 20 >= 1) {
          const times = Math.floor(change / 20);
          const amount = times * 20 > cid[1][1] ? cid[1][1] : times * 20;
          change -= amount;
          return_draw.push([cid[1][0], amount]);
        }
         if (change / 10 >= 1) {
          const times = Math.floor(change / 10);
          const amount = times * 10 > cid[2][1] ? cid[2][1] : times * 10;
          change -= amount;
          return_draw.push([cid[2][0], amount]);
        }
         if (change / 5 >= 1) {
          const times = Math.floor(change / 5);
          const amount = (times * 5) > cid[3][1] ? cid[3][1] : times * 5;
          change -= amount;
          return_draw.push([cid[3][0], amount]);
        }
         if (change / 1 >= 1) {
          const times = Math.floor(change / 1);
          const amount = times > cid[4][1] ? cid[4][1] : times;
          change -= amount;
          return_draw.push([cid[4][0], amount]);
        }
         if (change / .25 >= 1 ) {
          const times = Math.floor(change / .25);
          const coin =  Number((times * .25).toFixed(2));
          const amount = coin > cid[5][1] ? cid[5][1] : coin;
          change -= amount;
          return_draw.push([cid[5][0], amount]);
        }
        if (change / .1 >= 1 ) {
          const times = Math.floor(change / .1);
          const coin =  Number((times * .1).toFixed(2));
          const amount = coin > cid[6][1] ? cid[6][1] : coin;
          change -= amount;
          return_draw.push([cid[6][0], amount]);
        }
        if (change / .05 >= 1 ) {
          const times = Math.floor(change / .05);
          const coin =  Number((times * .05).toFixed(2));
          const amount = coin > cid[7][1] ? cid[7][1] : coin;
          change -= amount;
          return_draw.push([cid[7][0], amount]);
        }
        if (change / .01 >= .01 ) {
          const times = Number(round(change / .01, 2));
          const coin =  Number(round(times * .01, 2));
          const amount = coin > cid[8][1] ? cid[8][1] : coin;
          change -= amount;
          return_draw.push([cid[8][0], amount]);
        }
       console.table(return_draw);
        return giveBackChange(return_draw);
    }
  }


  function giveBackChange(moneyBack) {
         // return open and pass back return_draw as .change
         return {status: "OPEN", change: moneyBack};
  }

  function NoDeal(cid) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  function round(value, decimals) {
    return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
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
  
  let answer = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  console.log(answer);