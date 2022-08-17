document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-input");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  const totalDepositElement = document.getElementById("total-deposit");
  const previousDepositAmountString = totalDepositElement.innerText;
  const previousDepositAmount = parseFloat(previousDepositAmountString);

  const currentDepositTotal = previousDepositAmount + newDepositAmount;

  totalDepositElement.innerText = currentDepositTotal;

  const totalBalanceElement = document.getElementById("total-balance");
  const previousBalanceString = totalBalanceElement.innerText;
  const previousBalance = parseFloat(previousBalanceString);

  const newBalance = previousBalance + newDepositAmount;

  totalBalanceElement.innerText = newBalance;

  depositField.value = "";
});
