const tema = localStorage.getItem('valor')
const ajuda = document.getElementById('ajuda')
const letras = document.getElementById('letras')
const button = document.querySelectorAll('#button button')
const reiniciar = document.getElementById('reiniciar')
const resultado = document.querySelector('#result p')
const result = document.querySelector('#result')
const mudar = document.getElementById('mudar')
const valores = []
let erros = 0
let i = 0
let an = ''


const animais = ['cachorro', 'peixe', 'rato', 'porco', 'galinha', 'leao', 'pinguin', 'zebra', 'tartaruga', 'cobra',]  
const frutas = ['maça', 'banana', 'uva', 'tomate', 'jaca', 'goiaba', 'melancia', 'coco', 'abacate', 'abacaxi']

const dicasA = {
    cachorro: ['amigo dos humanos', 'tem varias raças', 'brincalhão'],
    peixe: ['vive na agua', 'varios tipos e tamanhos', 'facil de cuidar'],
    rato: ['e um roedor', 'muitas pessoas tem nojo', 'e pequeno'],
    porco: ['gosta de lama', 'os humanos comem sua carne' , 'tem haver com um desenho'],
    galinha: ['carne proteica', 'tem asa mas nn voa', 'bota ovos'],
    leao: ['dentes grandes', 'um juba enorme', 'rei da selva'],
    pinguin: ['vive no gelo', 'nao tem joelho', 'desliza de barriga'],
    zebra: ['vive na africa', 'se parece com um cavalo', 'tem listras'],
    tartaruga: ['lenta na terra', 'animal aguatico', 'tem um casco'],
    cobra: ['aparece na biblia', 'se rasteja', 'animal peçonhento']
}

const num = Math.random()
const numMaior = num * animais.length
const redondo = Math.trunc(numMaior)
    if(tema === 'animal') {

    ajuda.innerText = 'animal'
    an = animais[redondo]
    const arry = [...an]
    arry.forEach(item => {
        const div = document.createElement('div')
        div.id = 'divCriada'
        div.value = item
        letras.appendChild(div)
    })
    tudo(arry)
}

function tudo(palavra) {
    button.forEach(btn => {
        btn.addEventListener('click', ev => {
            ev.preventDefault()
            const valor = btn.dataset.letra
            if(palavra.includes(valor)) {
                const div = document.querySelectorAll('#divCriada')
                div.forEach(item => {
                    if(item.value === valor) {
                        valores.push(valor)
                        item.innerText = valor
                        item.style.backgroundColor = '#ffffff00'
                        btn.style.backgroundColor = '#04ff00'
                    }
                })
            }
            else {
                btn.style.backgroundColor = 'red'
                btn.setAttribute('disabled', 'true')
                erros++
                const div = document.querySelectorAll('#boneco div')
                if(erros === 1) {
                    div[0].setAttribute('class', 'cabeca')
                }
            if(erros === 2) {
                div[1].setAttribute('class', 'corpo')
            }
            if(erros === 3) {
                div[2].setAttribute('class', 'bracoE')
            }
            if(erros === 4) {
                div[3].setAttribute('class', 'bracoD')
            }
            if(erros === 5) {
                div[4].setAttribute('class', 'peE')
            }
            if(erros === 6) {
                div[5].setAttribute('class', 'peD')
                estado('perdeu')
                button.forEach(item => item.setAttribute('disabled', 'true'))
            }
            }
            
            function estado(voce) {
                resultado.innerText = 'voce ' + voce + '!'
                result.style.display = 'block'
            }

            reiniciar.addEventListener('click', () => {
                location.href = 'index.html';
            })
        })
    })
    mudar.addEventListener('click', () => {
        if(i <= 2) {
            const dica = dicasA[an]
            ajuda.innerText = dica[i]
            i++
        }
    })

}


