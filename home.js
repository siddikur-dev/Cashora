document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();
  //get input field value
  const bankAccountNumber = document.getElementById("accountNumber").value;
  const addAmount = parseInt(document.getElementById("addAmount").value);
  const pinNumber = document.getElementById("pinNumber").value;
  const availableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );
  const newBalance = addAmount + availableBalance;
  document.getElementById("availableBalance").innerText = newBalance;
});
