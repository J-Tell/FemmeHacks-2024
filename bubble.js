const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

var timer;

// var stop = false;

function hideButton(x) {
    x.style.display = 'none';
}

function breatheAnimation() {
    
    timer = setInterval(breatheAnimation, totalTime)
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
    

    // }
}

// function stopAnimation() {
//     clearInterval(timer)
//     // clearInterval(breatheAnimation, totalTime)

//     // cancelAnimationFrame(timer)
// //     // stop = true;
//     // totalTime = 7500
//     // breatheTime = 100
//     // holdTime = 100
//     text.innerHTML = ''
//     container.className = 'container stop'
//     setTimeout(() => {
//         clearInterval(timer)
//         text.innerText = ''
//         container.className = 'container stop'

//         setTimeout(() => {
//             clearInterval(timer)
//             text.innerText = ''
//             container.className = 'container stop'
//         }, holdTime)
//     }, breatheTime)
//     // setTimeout(() => {
//     //     text.innerText = ''
//     //     container.className = 'container stop'
//     // }, totalTime)
//     //timer = setInterval(stopAnimation, totalTime)
// }