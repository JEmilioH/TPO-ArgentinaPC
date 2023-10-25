var form = document.getElementById('formulario');
form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    var mensajeError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Debe ingresar su nombre');
    }

    if(provincia.value === null || provincia.value === ''){
        mensajeError.push('Debe ingresar la provincia donde reside');
    }

    if(ciudad.value === null || ciudad.value === ''){
        mensajeError.push('Debe ingresar la ciudad donde reside');
    }

    if(mail.value === null || mail.value === ''){
        mensajeError.push('Debe ingresar correo electrónico');
    }

    if(telefono.value === null || telefono.value === ''){
        mensajeError.push('Debe ingresar su número de teléfono');
    }

    if(producto.value === null || producto.value === ''){
        mensajeError.push('Debe ingresar el producto por el cual realiza la consulta');
    }

    error.innerHTML = mensajeError.join(', ');

});


let clima = {
    apiKey:"b563830aa263b7c82daa6195d299435f",
    fetchClima:function(ciudad){
        fetch(
            
            "https://api.openweathermap.org/data/2.5/weather?q="
            + ciudad
            + "&units=metric&appid="
            + this.apiKey

        )
        .then((response) => {
            return response.json();
        })
        .then((data) => this.mostrarClima(data));
    },
    mostrarClima:function(data){
        const {temp} = data.main;
        document.querySelector("#temp").innerHTML = temp + "&#8451;"
    }
}

let ciudad = document.querySelector("#ciudad");
ciudad.addEventListener("change", function(){
    clima.fetchClima(ciudad.value)
})

clima.fetchClima("bsas");