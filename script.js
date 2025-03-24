document.addEventListener('DOMContentLoaded', function () {

    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    })
  
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.2;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.2;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

}
)
