//get value from input field

function getInputValue(id) {
  const getId = document.getElementById(id);
  const getValue = getId.value;
  const strToNb = parseInt(getValue);
  return strToNb;
}
//get normal value of innerText
function getInnerTextValue(id) {
  const innerText = document.getElementById(id).innerText;
  return parseInt(innerText);
}

//6 button feature implement start

// Add Money Feature
document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();
  //get input field value
  const bankAccountNumber = getInputValue("accountNumber");

  const addAmount = getInputValue("addAmount");
  const pinNumber = getInputValue("pinNumber");
  const availableBalance = getInnerTextValue("availableBalance");
  //accountNumber and pin number validate
  if (addAmount <= 10000) {
    if (bankAccountNumber.length < 11) {
      alert("Please Input 11 Digit Phone Number");
      return;
    } else if (pinNumber !== 1234) {
      alert("Please give me correct pin");
      return;
    }
    const newBalance = addAmount + parseInt(availableBalance);
    document.getElementById("availableBalance").innerText = newBalance;
  } else {
    alert("Add amount maximum: 10k");
  }
});

// Cash Out Feature
document.getElementById("cashOutBtn").addEventListener("click", function (e) {
  e.preventDefault();
  //get value from input field

  const cashOutNumber = getInputValue("cashOutNumber");

  const cashOutNumberPin = getInputValue("cashOutPinNumber");
  const cashOutAmount = getInputValue("cashOutAmount");
  const availableBalance = getInnerTextValue("availableBalance");
  const remainingBalance = availableBalance - cashOutAmount;

  if (availableBalance < cashOutAmount) {
    alert("Please Add Money Your Account");
    return;
  } else if (cashOutNumber < 11) {
    alert("Invalid Mobile Number");
    return;
  } else if (cashOutNumberPin !== 1234) {
    alert("Invalid Pin Number");
    return;
  }
  document.getElementById("availableBalance").innerText = remainingBalance;
});

//transfer money feature
document
  .getElementById("transferMoneyBtn")
  .addEventListener("click", function () {
    const transferAccount = getInputValue("transferMoneyAccountNumber");
    const transferAmount = getInputValue("transferAmount");
    const transferPin = getInputValue("transferPinNumber");
    const availableBalance = getInnerTextValue("availableBalance");

    const remainingBalance = availableBalance - transferAmount;

    //transfer balance less then available balance then alert
    const alertBalance = transferAmount - availableBalance;
    if (availableBalance < transferAmount) {
      alert(`Minimum Add To Balance: ${alertBalance} `);
      return;
    } else if (transferAccount < 11) {
      alert("Invalid Mobile Number");
      return;
    } else if (transferPin !== 1234) {
      alert("Invalid Pin Number");
      return;
    }

    document.getElementById("availableBalance").innerText = remainingBalance;
  });

//getBonus Button  feature
document.getElementById("getBonus").addEventListener("click", function () {
  const applyCouponCode = document.getElementById("applyCouponCode").value;
  const bonusPinNumber = getInputValue("getBonusPinNumber");
  const availableBalance = getInnerTextValue("availableBalance");
  const newBonusNumber = availableBalance + 2000;
  if (applyCouponCode === "siddikur-dev") {
    document.getElementById("availableBalance").innerText = newBonusNumber;
  } else {
    alert("your coupon code is wrong!'");
    return;
  }
  if (bonusPinNumber !== 1234) {
    alert("Invalid Pin Number");
    return;
  }
});
//payBillBtn  feature
document.getElementById("payBillBtn").addEventListener("click", function () {
  const billerAccountNumber = getInputValue("billerAccountNumber");
  const amountToPay = getInputValue("amountToPay");
  const payPinNumber = getInputValue("payPinNumber");
  const availableBalance = getInnerTextValue("availableBalance");

  const remainingBalance = availableBalance - amountToPay;

 

  document.getElementById("availableBalance").innerText = remainingBalance;
});

//Feature  display none func
function displayNone(id) {
  document.getElementById(id).style.display = "none";
}
function displayBlock(id) {
  document.getElementById(id).style.display = "block";
}

//featured toggle

// addMoney feature
document
  .getElementById("addMoneyButton")
  .addEventListener("click", function () {
    displayNone("cashOutParent");
    displayNone("transferMoneyParent");
    displayBlock("addMoneyParent");
  });
//   cashOut
document.getElementById("cashOutButton").addEventListener("click", function () {
  displayNone("addMoneyParent");
  displayNone("transferMoneyParent");
  displayNone("getBonusParent");
  displayNone("payBillButtonParent");
  displayBlock("cashOutParent");
});
// transfer money
document
  .getElementById("transferMoneyButton")
  .addEventListener("click", function () {
    displayNone("addMoneyParent");
    displayNone("cashOutParent");
    displayNone("getBonusParent");
    displayNone("payBillButtonParent");
    displayNone("transactionParent");
    displayBlock("transferMoneyParent");
  });

// getBonus Button
document
  .getElementById("getBonusButton")
  .addEventListener("click", function () {
    displayNone("addMoneyParent");
    displayNone("cashOutParent");
    displayNone("getBonusParent");
    displayNone("payBillButtonParent");
    displayNone("transactionParent");
    displayNone("transferMoneyParent");
    displayBlock("getBonusButton");
    displayBlock("getBonusParent");
  });
// payBill  Button
document.getElementById("payBillButton").addEventListener("click", function () {
  displayNone("addMoneyParent");
  displayNone("cashOutParent");
  displayNone("getBonusParent");
  displayNone("transactionParent");
  displayNone("transferMoneyParent");
  displayBlock("payBillButtonParent");
  displayBlock("payBillButton");
});

// transaction button
document
  .getElementById("transactionButton")
  .addEventListener("click", function () {
    displayNone("addMoneyParent");
    displayNone("cashOutParent");
    displayNone("getBonusParent");
    displayNone("transactionParent");
    displayNone("transferMoneyParent");
    displayNone("payBillButtonParent");
    displayBlock("transactionParent");
    // displayBlock("payBillButton");
  });
