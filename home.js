// Add Money Feature
document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();
  //get input field value
  const bankAccountNumber = document.getElementById("accountNumber").value;
  const addAmount = parseInt(document.getElementById("addAmount").value);
  const pinNumber = parseInt(document.getElementById("pinNumber").value);
  const availableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );
  //accountNumber and pin number validate
  if (addAmount <= 10000) {
    if (bankAccountNumber.length < 11) {
      alert("Please Input 11 Digit Phone Number");
      return;
    } else if (pinNumber !== 1234) {
      alert("Please give me correct pin");
      return;
    }
    const newBalance = addAmount + availableBalance;
    document.getElementById("availableBalance").innerText = newBalance;
  } else {
    alert("Add amount maximum: 10k");
  }
});

// Cash Out Feature
document.getElementById("cashOutBtn").addEventListener("click", function (e) {
  e.preventDefault();
  //get value from input field

  const cashOutNumber = parseInt(
    document.getElementById("cashOutNumber").value
  );
  const cashOutNumberPin = parseInt(
    document.getElementById("cashOutPinNumber").value
  );
  const cashOutAmount = parseInt(
    document.getElementById("cashOutAmount").value
  );
  const availableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );
  const remainingBalance = availableBalance - cashOutAmount;

  if (cashOutNumber < 11) {
    alert("Invalid Mobile Number");
    return;
  } else if (cashOutNumberPin !== 1234) {
    alert("Invalid Pin Number");
    return;
  }
  document.getElementById("availableBalance").innerText = remainingBalance;
});


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
    document.getElementById(
      "addMoneyParent",
      "cashOutParent",
      "getBonusParent"
    ).style.display = "none";
    document.getElementById("payBillButton").style.display = "none";
    document.getElementById("transferMoneyParent").style.display = "block";
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
