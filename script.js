function gerarTabuada() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(numero)) {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Por favor, Digite um número!!!',
        });
        return;
    }

    let resultadoHTML = `<h2>Tabuada do ${numero}</h2>`;
    resultadoHTML += '<ul class="list-group">';
    for (let i = 1; i <= 10; i++) {
        resultadoHTML += `<li class="list-group-item">${numero} x ${i} = ${numero * i}</li>`;
    }
    resultadoHTML += '</ul>';

    resultadoDiv.innerHTML = resultadoHTML;
}
