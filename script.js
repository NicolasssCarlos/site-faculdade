const dicas = [
    "1. Aprenda as linguagens de programação populares, como Python, JavaScript e Java.",
    "2. Compreenda as estruturas de dados e algoritmos, pois são fundamentais para resolver problemas de programação.",
    "3. Estude práticas de desenvolvimento ágil, como Scrum e Kanban.",
    "4. Contribua para projetos de código aberto para ganhar experiência prática.",
    "5. Familiarize-se com o desenvolvimento de software em nuvem (AWS, Azure, Google Cloud).",
    "6. Aprofunde-se em frameworks como React, Angular ou Vue.js para desenvolvimento front-end.",
    "7. Aprenda sobre DevOps e automação de processos de desenvolvimento e operações.",
    "8. Certifique-se de entender conceitos de segurança cibernética e práticas de desenvolvimento seguro.",
    "9. Não tenha medo de cometer erros. Eles são uma parte essencial do processo de aprendizagem."
];

let dicaIndex = 0;

function mostrarDicas() {
    const dicasContainer = document.getElementById("dicas");

    if (dicaIndex < dicas.length) {
        let dicasParaMostrar = "";

        for (let i = 0; i < 3 && dicaIndex < dicas.length; i++, dicaIndex++) {
            dicasParaMostrar += `<p>${dicas[dicaIndex]}</p>`;
        }

        dicasContainer.innerHTML += dicasParaMostrar;
    }

    if (dicaIndex >= dicas.length) {
        const botao = document.querySelector(".showTips");
        botao.disabled = true;
        botao.innerText = "Todas as dicas foram mostradas";
    }
}