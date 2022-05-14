console.log('JavaScrpt Carregado');

function validaCarac(cpf) {

}

function validacao() {
    let cpf = document.getElementById('cpfDigitado').value;

    if (cpf != 0) {
        let CPFsuccess = document.getElementById('success');
        CPFsuccess.classList.toggle('success');
    } else {
        let CPFerror = document.getElementById('error');
        CPFerror.classList.toggle('error');
    }

}