const circle = document.querySelector('.circle')
const dice = document.querySelector('.dice')
const h1 = document.querySelector('h1')
const p = document.querySelector('small')
const mid = document.querySelector('.mid')

circle.addEventListener('click', () => {
    dice.classList.toggle('spin')

    randomAdvice();
})

async function randomAdvice(){
    console.log('baro')
    h1.textContent = ''

    const gif = document.createElement('img')
    gif.src = 'https://i.stack.imgur.com/h6viz.gif'


    if (window.matchMedia("(width >= 375px)").matches){
        gif.style.position = 'absolute'
        gif.style.width = '230px'
        gif.style.height = '250px'
        gif.style.top = '155px'
        gif.style.left = '73px'
    }else if (window.matchMedia("(width >= 1440px)").matches){
        gif.style.position = 'absolute'
        gif.style.width = '130px'
        gif.style.height = '150px'
        gif.style.left = '2512px'
    } 
    mid.appendChild(gif)

    

 
    circle.setAttribute('disabled', true)

    let res = await fetch('https://api.adviceslip.com/advice');
    let data = await res.json();

    circle.removeAttribute('disabled')

    p.textContent = `#` + data.slip.id
    h1.innerHTML = `"${data.slip.advice}"`
    mid.removeChild(gif)
}