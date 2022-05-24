let knopBewerkenNaam = document.querySelector('.bewerken_naam');
let submitKnopNaam = document.querySelector('.submit_naam');
let naam = document.querySelector('.naam');
let naamInput = document.getElementById('input_naam');

knopBewerkenNaam.addEventListener('click', function (){
    {
        knopBewerkenNaam.style.display = 'none';
        submitKnopNaam.style.display = 'block';
        naam.style.display = 'none';
        naamInput.style.display = 'block';
        naamInput.value = naam.innerHTML;
    }

});

function annuleren(){
    knopBewerkenNaam.style.display = 'block';
    submitKnopNaam.style.display = 'none';
    naam.style.display = 'block';
    naamInput.style.display = 'none';
}

let knopBewerkenEmail = document.querySelector('.bewerken_email');
let submitKnopEmail = document.querySelector('.submit_email');
let email = document.querySelector('.email');
let emailInput = document.getElementById('input_email');

knopBewerkenEmail.addEventListener('click', function (){
    {
        knopBewerkenEmail.style.display = 'none';
        submitKnopEmail.style.display = 'block';
        email.style.display = 'none';
        emailInput.style.display = 'block';
        emailInput.value = email.innerHTML;
    }

});

function annulerenEmail(){
    knopBewerkenEmail.style.display = 'block';
    submitKnopEmail.style.display = 'none';
    email.style.display = 'block';
    emailInput.style.display = 'none';
}



