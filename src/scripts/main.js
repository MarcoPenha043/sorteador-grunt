document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo)

        let numeroAleatorio = Math.random() * numeroMaximo;
        let numeroAleatorioArredondado = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorioArredondado;
        document.querySelector('.resultado').style.display = 'block';
    })
})