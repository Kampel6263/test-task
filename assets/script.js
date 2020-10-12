let buttonUomo = document.getElementById('button__uomo');
let buttonDonna = document.getElementById('button__donna');

const uomoActive = () => {
    buttonUomo.className = 'active';
    buttonDonna.className = '';
}

const donnaActive = () => {
    buttonDonna.className = 'active';
    buttonUomo.className = '';
}

//--------------

let nameInput = document.getElementById('name');
let cognomeInput = document.getElementById('cognome');
let emailInput = document.getElementById('email')

let validatorForEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

let nameType = 'nome';
let cognomeType = 'cognome';
let emailType = 'email';

let nameSpan = 'name__span';
let cognomeSpan = 'cognome__span';
let emailSpan = 'email__span';

let nameLabel = 'name__label';
let cognomeLabel = 'cognome__label';
let emailLabel = 'email__label';

const focusLabel = (id) => {
    document.getElementById(id).style.transform = 'translate(0px, -12px)';
    document.getElementById(id).style.fontSize = '12px';
}

const blurLabel = (id) => {
    document.getElementById(id).style.fontSize = '16px';
    document.getElementById(id).style.transform = 'translate(0px, 0px)';
}

const validator = (id1, id2, type) => {
    document.getElementById(id1).innerHTML = 'completa correttamente il campo: ' + type;
    document.getElementById(id2).style.borderBottom = '2px #c71414 solid';
}

const clearValidator = (id1, id2, type) => {
    document.getElementById(id1).innerHTML = '';
    document.getElementById(id2).style.borderBottom = '1px #111 solid';
}

nameInput.onfocus = () => focusLabel(nameLabel);
cognomeInput.onfocus = () => focusLabel(cognomeLabel)
emailInput.onfocus = () => focusLabel(emailLabel)

const validControl = (id) => {
    let input = document.getElementById(id).value;
    if (input === '') {
        document.getElementById(id).style.borderBottom = '2px #c71414 solid'
    } else {
        switch (id) {
            case 'name':
                clearValidator(nameSpan, id, nameType);
                break;
            case 'cognome':
                clearValidator(cognomeSpan, id, cognomeType);
                break;
            case  'email':
                if (validatorForEmail.test(input)) {
                    clearValidator(emailSpan, id, emailType);
                }
                break;
        }
    }
}

const onBlur = (id) => {
    let input = document.getElementById(id).value;
    if (id === 'email') {
        if (validatorForEmail.test(input) === false || input === '') {
            validator(emailSpan, id, emailType);
            if (input === '') {
                blurLabel(emailLabel)
            }
        }
    }
    if (input === '') {
        switch (id) {
            case 'name':
                validator(nameSpan, id, nameType);
                blurLabel(nameLabel)
                break;
            case 'cognome':
                validator(cognomeSpan, id, cognomeType);
                blurLabel(cognomeLabel)
                break;
        }
    }
}

//----------------------

let select1 = 'select1';
let select2 = 'select2';
let select3 = 'select3'
const selector = (range, id, type) =>{
    for (let i = 0; i <= range; i++) {
        let select = document.getElementById(id);
        if (i === 0) {
            let a = document.createElement('option');
            a.innerHTML = type;
            select.append(a);
            continue;
        }
        if (i < 10) {
            i = '0' + i;
        }
        let a = document.createElement('option');
        a.innerHTML = i;
        select.append(a);
    }
}

selector(12, select2, 'Mese');
selector(31, select1, 'Giorno');


for (let i = 2011; i >= 1920; i--) {
    let select = document.getElementById(select3);
    if (i === 2011) {
        let a = document.createElement('option');
        a.innerHTML = 'Anno';
        select.append(a);
        continue;
    }

    let a = document.createElement('option');
    a.innerHTML = i;
    select.append(a);

}

//------------------------------

setInterval(() => {
    let button = document.getElementById('button__submit');
    button.style.color = 'rgba(255, 255, 255, 0)';
    setTimeout(() => {
        button.style.color = 'rgba(255, 255, 255, 1)';
    }, 500)
}, 1000)


//-------------------------

let container = document.getElementById('container');
let modal = document.getElementById('modal');

let text1 = 'text1'
let text2 = 'text2'
let text3 = 'text3'

const showText = (none1, none2, block1) =>{
    document.getElementById(none1).style.display = 'none';
    document.getElementById(none2).style.display = 'none';
    document.getElementById(block1).style.display = 'block';
    openModal()
}



document.getElementById('a1').onclick = () => {
showText(text2, text3, text1)
}

document.getElementById('a2').onclick = () => {
    showText(text1, text3, text2)
}

document.getElementById('a3').onclick = () => {
    showText(text1, text2, text3)
}

const openModal = () => {
    container.style.display = 'none';
    modal.style.display = 'block';
}

const closeModal = () => {
    container.style.display = 'block';
    modal.style.display = 'none';
}

//-------------------------------------------------

// history.pushState(null, null, 'https://www.google.com');
window.addEventListener('popstate', function () {
    history.pushState(null, null, 'https://www.google.com');
});
