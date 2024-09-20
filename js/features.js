document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawMoneyForm = document.getElementById('withdraw-money-form');
    withdrawMoneyForm.classList.remove('hidden')
    const addMoneyForm =document.getElementById('add-money-form');
    addMoneyForm.classList.add('hidden')
})
document.getElementById('add-btn').addEventListener('click',function(){
    const addMoneyForm =document.getElementById('add-money-form');
    addMoneyForm.classList.remove('hidden')
    const withdrawMoneyForm = document.getElementById('withdraw-money-form');
    withdrawMoneyForm.classList.add('hidden')
})