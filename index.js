// based on the code from Free Code Camp

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    // Here is your change, ma'am.
    let drawCopy = new Map(cid.reverse());
    let totalCash = 0;
    for (let val of drawCopy.values()){
      totalCash += Math.floor(val);
    }
    console.log(totalCash, change);
    if (totalCash < change) {
      return NoDeal(cid);
    }
    else {
      // 
      let moneyBack = cid;
      console.dir(moneyBack);
      return {status: "OPEN", change: cid};
    }
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
  
  let answer = checkCashRegister(19.50, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  console.log(answer);