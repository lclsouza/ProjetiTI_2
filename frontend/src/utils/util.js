const Mensagem = (texto) => {
    document.getElementById('mensagemView').innerHTML = 
        texto ? `<p class="alert alert-info">${texto}</p>` : '<p></p>'
}

export { Mensagem }