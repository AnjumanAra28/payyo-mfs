document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addAmount = document.getElementById('add-amount-field').value;
    const pinNumber = document.getElementById('pin-number-field').value;
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const addAmountNumber = parseFloat(addAmount);
        const balanceAmountNumber = parseFloat(balance);
        const totalBalance = addAmountNumber + balanceAmountNumber;
        document.getElementById('account-balance').innerText = totalBalance;
    }
    else{
        alert('can not add money , try again later')
    }

    

})