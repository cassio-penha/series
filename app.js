// Crie a função pesquisar()
function pesquisar() {
    // console.log(dados); // Linha comentada para fins de debug
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = `<p class="mensagem-erro">Nada foi encontrado! </br> Você precisa digitar o nome de um artista ou gênero</p>`
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada item (dado) na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Constrói o HTML para cada resultado, formatando os dados do objeto
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a><br>
                <a href="${dado.streaming}">Streaming</a>
            </div>
        `
        }
    }

    if (!resultados) {
        resultados = `<p class="mensagem-erro">Nada foi encontrado!</p>`
    }


    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados
}