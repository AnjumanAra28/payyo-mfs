document.getElementById('withdraw-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const withdrawAmount = document.getElementById('withdraw-amount-field').value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    const pinNumber = document.getElementById('withdraw-pin-number-field').value;
    if (pinNumber === '1234'){
       const balance = document.getElementById('account-balance').innerText;
       const balanceAmountNumber = parseFloat(balance);
       const remainingBalance = balanceAmountNumber - withdrawAmountNumber;
       document.getElementById('account-balance').innerText = remainingBalance;

    }
    else{
        alert('Invalid amount or pin.Try again later')
    }
})