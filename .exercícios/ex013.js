var diaSem = new Date().getDay()
switch (diaSem){
    case 0:
        diaSem = 'domingo'
        break
    case 1:
        diaSem = 'segunda-feira'
        break
    case 2:
        diaSem = 'terça-feira'
        break
    case 3:
        diaSem = 'quarta-feira'
        break
    case 4:
        diaSem = 'quinta-feira'
        break
    case 5:
        diaSem = 'sexta-feira'
        break
    case 6:
        diaSem = 'sábado'
        break
    default:
        console.log('[ERRO!] Dia inválido.')
        diaSem = -1
        break
}
if (diaSem != -1) {
    console.log(`Hoje é ${diaSem}.`)
}