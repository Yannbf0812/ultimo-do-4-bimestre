@@ -1,3 +1,19 @@
function criaCartao(categoria, pergunta, resposta) {
    console.log(categoria, pergunta, resposta)
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `
    container.appendChild(cartao)
}
‎index.html
+2
-2
Original file line number	Diff line number	Diff line change
@@ -9,7 +9,7 @@
<body>
    <main>
        <section id="container">
            <article class="cartao">
            <!-- <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
@@ -19,7 +19,7 @@ <h3>Programação</h3>
                        <p>O JavaScript é uma linguagem de programação</p>
                    </div>
                </div>
            </article>
            </article> -->
        </section>
    </main>
    <footer>
‎perguntas.js
+6
Original file line number	Diff line number	Diff line change
@@ -14,4 +14,10 @@ criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa'
)
criaCartao(
    'Lingua inglesa',
    'Como se diz oi em Inglês?',
    'Oi em ingles é HI (RAI)'