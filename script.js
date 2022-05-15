

function validaCpf(cpf) {
    if (cpf.length == 11) {
        let numeros = cpf.substring(0, 9);
        let digitos = cpf.substring(9);
        let soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        if (11 - (soma % 11) == digitos.charAt(0)) {
            let numeros2 = cpf.substring(0, 10);
            let soma2 = 0;
            for (var i = 11; i > 1; i--) {
                soma2 += numeros2.charAt(11 - i) * i;
            }
            if (11 - (soma2 % 11) == digitos.charAt(0)){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
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