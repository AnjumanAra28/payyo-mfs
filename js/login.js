document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('number-field').value;
    console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-field').value;
    console.log(pinNumber);
    if(phoneNumber === '5' && pinNumber === '1234'){
        window.location.href = './home.html'
    }
    else{
        alert('Invalid phoneNumber or pinNumber')
    }
})

