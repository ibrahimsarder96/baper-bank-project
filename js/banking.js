//input function-----------------------------------*
function getInputValue(inputId){
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  //input field clear
  inputField.value = '';
  return amountValue;
}
//update totalField----------------------------------*
function updateTotalField(totalFieldId, amount){
  const totalElement = document.getElementById(totalFieldId);
  const previousBalanceText = totalElement.innerText;
  const previousTotal = parseFloat(previousBalanceText);
  totalElement.innerText = previousTotal + amount;
}
// current balance--------------------------------------*
function getCurrentBalance(){
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceText = balanceTotal.innerText;
  const previousBalance = parseFloat(previousBalanceText);
  return previousBalance;
}
//update balance-----------------------------------------*
function updateBalance(amount, isAdd){
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceText = balanceTotal.innerText;
  const previousBalance = parseFloat(previousBalanceText);
  if(isAdd == true){
    balanceTotal.innerText = previousBalance + amount;
  }
  else{
    balanceTotal.innerText = previousBalance - amount;
  }
}


//deposit event handler deposit button-----------------------*
document.getElementById('deposit-button').addEventListener('click', function(){
const depositAmount = getInputValue('deposit-input');
if(depositAmount > 0){
updateTotalField('deposit-total', depositAmount);
updateBalance(depositAmount, true);
}
});


//deposit event handler deposit button------------------------*
document.getElementById('withdraw-button').addEventListener('click', function(){
  const withdrawAmount = getInputValue('withdraw-input');
  const currentBalance = getCurrentBalance();
  if((withdrawAmount > 0) && (withdrawAmount < currentBalance)){
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
  }
  if(currentBalance < withdrawAmount){
    alert('please, check your balance');
  }
});