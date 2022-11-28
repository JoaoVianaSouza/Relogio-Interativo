function carregar(){
    var picture = document.getElementById('picture') //definindo a variavel "picture" a partir do elemento 'picture' que está no html
    var txt = window.document.getElementById('txt') //definindo a variavel "txt" a partir do elemento 'txt' que está no html
    var data = new Date() //definindo a data atual
    var hora = data.getHours() //definindo o horário atual
    var img = document.createElement('img') //criando o elemento "img"
    img.setAttribute ('id', 'foto') //setanado atributos id para o img
    if(hora >= 5 && hora < 12){  //bom dia
        img.src = "images/manhã.png" //adicionando imagem
        document.body.style.background = '#FF621B' //mudando background
        window.alert('Bom dia!! Vamos tomar um bom café?') //definindo um alerta interativo
    } else if (hora >= 12 && hora < 18){ //boa tarde
        img.src = "images/tarde.png"
        document.body.style.background = '#FCA122'
        window.alert('Um ótimo horário para descansar após o almoço ou até ir a praia')
    } else {
        img.src = "images/noite.png" //boa noite
        document.body.style.background = '#6A4D71'
        window.alert('Está na hora de se preparar para dormir, não acha?')
    }
    txt.innerHTML = `Agora são ${hora} horas` //escrevendo o horário a partir da variável "hora"
    picture.appendChild(img) //adicionando o arquivo "img" criado no javascript após o elemento "picture" no HTML.
}

