const form = document.getElementById('form');

form.addEventListener('submit', e => { 
    e.preventDefault();

    const firstName = form['f-name'].value;
    const lastName = form['l-name'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(firstName === ''){
        addErrorTo('f-name', 'First Name cannot be empty')
    }else{
        removeErrorFrom('f-name')
    }

    if(lastName === ''){
        addErrorTo('l-name', 'Last Name cannot be empty')
    }else{
        removeErrorFrom('l-name')
    }
    
    if(email  === ''){
        addErrorTo('email', 'Email cannot be empty')
    }else if(!isValid(email)){
        addErrorTo('email', 'Looks like this is not an emai')
    }else{
        removeErrorFrom('email')
    }

    if(password  === ''){
        addErrorTo('password', 'Password cannot be empty')
    }else{
        removeErrorFrom('password')
    }
});

function addErrorTo(field, message){
    const error = form[field].parentNode;
    error.classList.add('error')
    const small = form[field].parentNode.querySelector('small');
    small.innerText = message;
    small.opacity = '1';
};

function removeErrorFrom(field){
    const error = form[field].parentNode;
    error.classList.remove('error')
    const small = form[field].parentNode.querySelector('small');
    small.innerText = ""
    small.opacity = '0';
};

function isValid(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};