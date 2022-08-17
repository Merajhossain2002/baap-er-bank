document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmountElement = document.getElementById("withdraw-input");
  const withdrawAmountString = withdrawAmountElement.value;
  const newWithdrawAmount = parseFloat(withdrawAmountString);

  withdrawAmountElement.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }

  const previousWithdrawalTotal = document.getElementById("withdraw-amount");
  const previousWithdrawTotalString = previousWithdrawalTotal.innerText;
  const previousWithdrawals = parseFloat(previousWithdrawTotalString);

  const totalBalanceElement = document.getElementById("total-balance");
  const previousBalanceString = totalBalanceElement.innerText;
  const previousBalance = parseFloat(previousBalanceString);

  if (newWithdrawAmount > previousBalance) {
    alert("Baap er bank a ato taka nai.");
    return;
  }

  const withdraw = previousWithdrawals + newWithdrawAmount;
  previousWithdrawalTotal.innerText = withdraw;

  const withdrawBalance = previousBalance - newWithdrawAmount;
  totalBalanceElement.innerText = withdrawBalance;
});
