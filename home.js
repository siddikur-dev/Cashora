document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();
  //get input field value
  const bankAccountNumber = parseInt(
    document.getElementById("accountNumber").value
  );
  const addAmount = parseInt(document.getElementById("addAmount").value);
  const pinNumber = parseInt(document.getElementById("pinNumber").value);
  const availableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );
  //accountNumber and pin number validate
  if (addAmount <= 10000) {
    if (bankAccountNumber < 11) {
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
