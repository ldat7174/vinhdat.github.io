const emojis = ['🍎', '🍌', '🍒', '🍇', '🥝', '🍍', '🍑', '🍉']
let board = document.getElementById('board')
let status = document.getElementById('status')
let restartBtn = document.getElementById('restart')

let cards = []
let flipped = []
let moves = 0

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
}

function resetGame() {
    board.innerHTML = ''
    status.textContent = 'Moves: 0'
    flipped = []
    moves = 0

const deck = shuffle([...emojis, ...emojis])
deck.forEach(icon => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.icon = icon
    card.textContent = ''
    card.addEventListener('click', () => flipCard(card))
    board.appendChild(card)
})
}

function flipCard(card) {
    if (flipped.includes(card) || card.classList.contains('flipped')) return
    card.textContent = card.dataset.icon
    flipped.push(card)

    if (flipped.length === 2) {
    moves++
    status.textContent = `Moves: ${moves}`
    const [a, b] = flipped
    if (a.dataset.icon === b.dataset.icon) {
        a.classList.add('flipped')
        b.classList.add('flipped')
        flipped = []
    } else {
            setTimeout(() => {
                a.textContent = ''
                b.textContent = ''
                flipped = []
            }, 700)
        }
    }
}

restartBtn.addEventListener('click', resetGame)

resetGame()
