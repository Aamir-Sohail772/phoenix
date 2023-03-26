// Get All value
let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');

// form Refresh State
form.addEventListener('submit',(e)=>{
    e.preventDefault();
});

// Now Working For Reset Btn
resetBtn.addEventListener('click',(e)=>{
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');
    
    
    // Set Value
    fname.value = '';
    lname.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
});

// Now start SendBtn

sendBtn.addEventListener('click',(e)=>{
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');
    
    
    // Set value and LocalStorage
    
    fname = fname.value;
    localStorage.setItem('fname',fname);
    
    lname = lname.value;
    localStorage.setItem('lname',lname);
    
    email = email.value;
    localStorage.setItem('email',email);
    
    phone = phone.value;
    localStorage.setItem('phone',phone);
    
    message = message.value;
    localStorage.setItem('message',message);
    
});

