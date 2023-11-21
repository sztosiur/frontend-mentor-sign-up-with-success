const formError = document.querySelector(".form__error")
const form = document.querySelector('.newsletter__form');
const email = document.querySelector('[name="email"]');
const submit_Btn = form.querySelector('[type="submit"]');
const thankYou = document.querySelector("#thank__you");
const newsletter = document.querySelector('.newsletter');
const confirmedEmail = document.querySelector("#newsletter__email--sent-to");
const dismiss_Btn = document.querySelector('#dismiss__btn');

// Cheking for spaces and "@" and dots

function validation(email) {
    const regex_Spaces =  /\s/;
    const regex_Email = /@/;
    const regex_Dots = /^[^@]+@[^@.]+\.[^@.]+$/;
    
    if ((regex_Spaces.test(email.value) == true)||(regex_Email.test(email.value) == false)||(email.value.length==0)||(regex_Dots.test(email.value) == false)){

        return false;

    }else {
        
        return true;
    }
    
}

submit_Btn.addEventListener('click', (e)=>{
    const flag = validation(email);

    if (flag === false){
        e.preventDefault();
        formError.innerText ="Valid email required";
        email.classList.add("invalid");
        email.addEventListener('focus', ()=>{
            email.classList.remove("invalid");
            formError.innerText ="";
        })
    }else{
        e.preventDefault();
        const emailAdress = email.value;
        newsletter.classList.remove('grid__container')
        newsletter.classList.add('inactive');
        thankYou.classList.remove('inactive');
        thankYou.classList.add('grid__container');
        confirmedEmail.innerText = emailAdress;
        
    }

    
});

dismiss_Btn.addEventListener('click', (e)=>{
    e.preventDefault();
    thankYou.classList.remove('grid__container')
    thankYou.classList.add('inactive');
    newsletter.classList.remove('inactive');
    newsletter.classList.add('grid__container');
    confirmedEmail.innerText == emailAdress;
});