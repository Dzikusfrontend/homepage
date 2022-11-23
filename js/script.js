{
    const welcome = () => {
        console.log("Witaj! na mojej stronie.")
    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("white");
        themeName.innerText = body.classList.contains("white") ? "ciemny" : "jasny";
    };

    const init = () => {
        const button = document.querySelector(".js-section__button");
        button.addEventListener("click", onChangeBackgroundClick);

        welcome();
    }
    init();
}