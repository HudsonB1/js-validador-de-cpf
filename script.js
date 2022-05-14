console.log('JavaScrpt Carregado');

function validaCarac(cpf) {

}

function reset() {
    let CPFerror = document.getElementById('error');
    let CPFsuccess = document.getElementById('success');
    CPFsuccess.classList.remove('success');
    CPFerror.classList.remove('error');
}

function validacao() {
    let cpf = document.getElementById('cpfDigitado').value;

    if (cpf != 0) {
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