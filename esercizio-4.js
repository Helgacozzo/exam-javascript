window.addEventListener('load', () => {

    const button = document.getElementById("button");
    const input = document.getElementById("input");
    const error = document.getElementById("errorMessage");
    const ul = document.getElementById("tasks");

    button.addEventListener("click", () => {
        const inputValue = input.value;

        if (inputValue === '') {

            error.innerHTML = "Per favore, inserisci del testo.";

        } else {

            error.innerHTML = '';

            const li = document.createElement("li");
            li.innerHTML = inputValue;

            ul.appendChild(li);

            input.value = ''; // Non era richiesto lo svuotamento dell'input all'invio, ma ho pensato diventasse più 'ordinato' il tutto
            
        }

    });

});
