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

//6 button feature impleament start

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

//

//Feature  display none func
function displayNone(id) {
  document.getElementById(id).style.display = "none";
}
function displayBlock(id) {
  document.getElementById(id).style.display = "block";
}

//featured toggle
// addMoney
document
  .getElementById("addMoneyButton")
  .addEventListener("click", function () {
    document.getElementById("cashOutParent").style.display = "none";
    document.getElementById("addMoneyParent").style.display = "block";
  });
//   cashOut
document.getElementById("cashOutButton").addEventListener("click", function () {
  document.getElementById(
    "addMoneyParent",
    "transferMoneyParent",
    "getBonusParent",
    "payBillButton"
  ).style.display = "none";
  document.getElementById("cashOutParent").style.display = "block";
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
document
  .getElementById("getBonusButton")
  .addEventListener("click", function () {
    document.getElementById(
      "addMoneyParent",
      "cashOutParent",
      "getBonusParent",
      "payBillButton",
      "transferMoneyParent"
    ).style.display = "none";
    document.getElementById("getBonusParent").style.display = "block";
  });
document.getElementById("payBillButton").addEventListener("click", function () {
  document.getElementById(
    "addMoneyParent",
    "cashOutParent",
    "transferMoneyParent",
    "getBonusParent"
  ).style.display = "none";
  document.getElementById("payBIll").style.display = "block";
});
