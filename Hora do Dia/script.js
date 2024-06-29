function carregar() {
    var hora = new Date().getHours()
    var msg = document.querySelector('div#msg')
    msg.innerHTML = `Agora são ${hora} horas.`
    var img = document.querySelector('img#imagem')
    if (hora >= 0 && hora < 12) {
        img.src="fotos/dia.jpg"
        document.body.style.background = '#C9C8B3';
    } else if (hora <= 18) {
        img.src="fotos/tarde.jpg"
        document.body.style.background = '#D9954A';
    } else {
        img.src="fotos/noite.jpg"
        document.body.style.background = '#15477C';
    }
}