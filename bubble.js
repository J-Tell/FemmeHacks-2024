const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

var timer;

const button = document.querySelector('#button');

const disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);


function breatheAnimation() {

    text.innerHTML = 'Breathe In'
    container.className = 'container grow'
    
    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)

    setInterval(breatheAnimation, totalTime)

}