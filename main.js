const circle = document.querySelector('.circle')
const dice = document.querySelector('.dice')
const h1 = document.querySelector('h1')
const p = document.querySelector('small')
const mid = document.querySelector('.mid')

circle.addEventListener('click', () => {
    dice.classList.add('spin')

    randomAdvice();
})

async function randomAdvice(){
    h1.textContent = ''

    const gif = document.createElement('img')
    gif.src = 'https://i.stack.imgur.com/h6viz.gif'
    gif.classList.add('loadingi')

    mid.appendChild(gif)

    

 
    circle.setAttribute('disabled', true)

    let res = await fetch('https://api.adviceslip.com/advice');
    let data = await res.json();

    circle.removeAttribute('disabled')

    p.textContent = `#` + data.slip.id
    h1.innerHTML = `"${data.slip.advice}"`
    mid.removeChild(gif)
    dice.classList.remove('spin')
}
