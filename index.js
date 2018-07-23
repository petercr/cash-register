// based on the code from Free Code Camp

let cid2;

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  const original_change = change;
  // Here is your change, ma'am.
  cid2 = cid;
  let totalCash = 0;
  for (let x = 0; x < cid.length; x++) {
    totalCash += cid[x][1];
  }
  totalCash = Number(totalCash.toFixed(2));
  console.log(totalCash, change);
  if (totalCash < change) {
    return NoDeal(cid);
  } else {
    // new variable to subtract values from &&

    const return_draw = [];

    if (change >= 100) {
      change -= 100;
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
      const amount = times * 5 > cid[3][1] ? cid[3][1] : times * 5;
      change -= amount;
      return_draw.push([cid[3][0], amount]);
    }
    if (change / 1 >= 1) {
      const times = Math.floor(change / 1);
      const amount = times > cid[4][1] ? cid[4][1] : times;
      change -= amount;
      return_draw.push([cid[4][0], amount]);
    }
    if (change / 0.25 >= 1) {
      const times = Math.floor(change / 0.25);
      const coin = Number((times * 0.25).toFixed(2));
      const amount = coin > cid[5][1] ? cid[5][1] : coin;
      change -= amount;
      return_draw.push([cid[5][0], amount]);
    }
    if (change / 0.1 >= 1) {
      const times = Math.floor(change / 0.1);
      const coin = Number((times * 0.1).toFixed(2));
      const amount = coin > cid[6][1] ? cid[6][1] : coin;
      change -= amount;
      return_draw.push([cid[6][0], amount]);
    }
    if (change / 0.05 >= 1) {
      const times = Math.floor(change / 0.05);
      const coin = Number((times * 0.05).toFixed(2));
      const amount = coin > cid[7][1] ? cid[7][1] : coin;
      change -= amount;
      return_draw.push([cid[7][0], amount]);
    }
    if (change / 0.01 >= 0.01) {
      const times = Number(round(change / 0.01, 2));
      const coin = Number(round(times * 0.01, 2));
      const amount = coin > cid[8][1] ? cid[8][1] : coin;
      change -= amount;
      return_draw.push([cid[8][0], amount]);
    }

    console.table(return_draw);
    // console.log(change);
    return giveBackChange(return_draw, change, totalCash);
  }
}

function giveBackChange(moneyBack, change, original_change) {
  // get the total amount of cash back
  let drawValue = 0;
  for (let x = 0; x < moneyBack.length; x++) {
    drawValue += moneyBack[x][1];
  }
  drawValue = Number(drawValue.toFixed(2));
  console.log(drawValue, original_change);

  // if there's still change left, then return INSUFFICIENT_FUNDS and money
  if (change > 0.00) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } 
  else if (drawValue === original_change) {
    return {status: "CLOSED", change: moneyBack};
  }
  else {
    // return open and pass back moneyBack
    return { status: "OPEN", change: moneyBack };
  }
}

function NoDeal(cid) {
  return { status: "INSUFFICIENT_FUNDS", change: [] };
}

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals).toFixed(
    decimals
  );
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

let answer = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(answer);
