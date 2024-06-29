function verificar() {
    var ano = new Date().getFullYear()
    var nas = document.querySelector('input#ano').value
    if (nas.length == 0 || nas > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - nas
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            sexo = 'um homem'
            if (idade < 12) {
                img.setAttribute('src', 'fotos/menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'fotos/jovemm.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'fotos/adulto.jpg')
            } else {
                img.setAttribute('src', 'fotos/idoso.jpg')
            }
        } else {
            sexo = 'uma mulher'
            if (idade < 12) {
                img.setAttribute('src', 'fotos/menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'fotos/jovemf.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'fotos/adulta.jpg')
            } else {
                img.setAttribute('src', 'fotos/idosa.jpg')
            }
        }
        var res = document.querySelector('div#res')
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} de ${idade} anos.`
        res.appendChild(img)
    }
}