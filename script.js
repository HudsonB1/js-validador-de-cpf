

function validaCpf(cpf) {
    if (cpf.length == 11) {
        if (validaDigito1(cpf) == cpf[cpf.length - 2] &&
            validaDigito2(cpf) == cpf[cpf.length - 1]) {
            return true;
        } else {
            return false
        }
    } else {
        return false;
    }
}

function validaDigito1(cpf) {
    let numeros = cpf.substring(0, 9);
    let digitos = cpf.substring(9);
    let soma = 0;

    for (var i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;
    }

    return (11 - (soma % 11)) < 10 ? (11 - (soma % 11)) : 0;
}

function validaDigito2(cpf) {
    let numeros = cpf.substring(0, 10);
    let digitos = cpf.substring(9);
    let soma = 0;

    for (var i = 11; i > 1; i--) {
        soma += numeros.charAt(11 - i) * i;
    }

    return (11 - (soma % 11)) < 10 ? (11 - (soma % 11)) : 0;
}


function reset() {
    let CPFerror = document.getElementById('error');
    let CPFsuccess = document.getElementById('success');
    CPFsuccess.classList.remove('success');
    CPFerror.classList.remove('error');
}

function validacao() {
    let cpf = document.getElementById('cpfDigitado').value;

    if (validaCpf(cpf)) {
        let CPFerror = document.getElementById('error');
        let CPFsuccess = document.getElementById('success');
        CPFsuccess.classList.add('success');
        CPFerror.classList.remove('error');
    } else {
        let CPFerror = document.getElementById('error');
        let CPFsuccess = document.getElementById('success');
        CPFerror.classList.add('error');
        CPFsuccess.classList.remove('success');
    }

}