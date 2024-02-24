const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

element.style.animationPlayState = 'paused';

// var stop = false;

function breatheAnimation() {
    // stop = false;
    // if (stop) {
    //     setInterval(stopAnimation, totalTime)
    // }
    // if (!stop) {

    text.innerHTML = 'Breath In'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)

    setInterval(breatheAnimation, totalTime)
    // }
}

function stopAnimation() {
    // stop = true;
    // totalTime = 0
    // breatheTime = 0
    // holdTime = 0
    // text.innerHTML = ''
    // container.className = 'container stop'
    // setTimeout(() => {
    //     text.innerText = ''
    //     container.className = 'container stop'

    //     setTimeout(() => {
    //         text.innerText = ''
    //         container.className = 'container stop'
    //     }, holdTime)
    // }, breatheTime)
    // setInterval(stopAnimation, totalTime)
    // breatheAnimation.pause()
}