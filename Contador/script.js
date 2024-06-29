function contar() {
    let inicio = document.querySelector('input#ini').value
    let fim = document.querySelector('input#fim').value
    let passo = document.querySelector('input#pas').value
    let res = document.querySelector('div#res')
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        if (passo <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            passo = 1
        }
        res.innerHTML = 'Contando: <br>'
        if (Number(inicio) < Number(fim)) {
            for (let c = Number(inicio); c <= Number(fim); c += Number(passo)) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = Number(inicio); c >= Number(fim); c -= Number(passo)) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}