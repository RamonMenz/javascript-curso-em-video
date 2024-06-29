function tabuada() {
    let num = document.querySelector('input#txtn').value
    let tab = document.querySelector('select#seltab')
    if (num.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        for (let c=1; c<=10; c++) {
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
}