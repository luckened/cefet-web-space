// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const expandButtons = document.querySelectorAll(".botao-expandir-retrair");

expandButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
        expandButtons.forEach((_, index) => {
            const parent =
                e.currentTarget === expandButtons[index] &&
                expandButtons[index].parentElement;

            parent && parent.classList.toggle("expandido");
        });
    })
);
