window.onload = function () {
    let formulario = document.getElementById("formulario");
    let submit = document.getElementById("enviar");
    submit.addEventListener("click", function (event) {
        event.preventDefault();


        valTamano(tam);
        valIngredient(ingr);
        precioPizza(errorCount);
    });

    let errorCount = 0;


    let tam = {
        peq: document.getElementById("small"),
        med: document.getElementById("medium"),
        gran: document.getElementById("familiar"),
        errorID: document.getElementById("error-size")
    }

    let ingr = {
        pepe: document.getElementById("peperonni"),
        bac: document.getElementById("bacon"),
        oli: document.getElementById("olivas"),
        errorID: document.getElementById("error-checkbox")
    }




    let valTamano = function (tam) {
        let errorDiv = tam.errorID;
        errorDiv.style.display = "none";
        errorCount = 0;
        switch (true) {
            case tam.peq.checked:
                //console.log("Elegiste género masculino");
                break;
            case tam.med.checked:
                //console.log("Elegiste género femenino");
                break;
            case tam.gran.checked:
                //console.log("Elegiste otro género");
                break;
            default:
                errorCount++;
                errorDiv.style.display = "block";
            //console.log("No elegiste género");
        }
    }

    let valIngredient = function (checkbox) {
        let errorDiv = checkbox.errorID;
        errorDiv.style.display = "none";
        errorCount = 0;
        if (checkbox.oli.checked || checkbox.bac.checked || checkbox.pepe.checked) {
            //console.log("Uy pero que adulto eres :D");
        }
        else {
            //console.log("anoperokepony");
            errorCount++;
            errorDiv.style.display = "block";

        }
    }

    let precioPizza = function (errorCount) {
        if (errorCount == 0) {
            console.log("Función precio pizza");
        }
    }


}