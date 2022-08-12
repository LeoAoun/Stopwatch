
let hr = 0
let min = 0
let sec = 0
let ms = 0
let interval

function counter() {
    ms+=10

    if (ms == 1000) {
        sec++
        ms = 0
    }
    else if (sec == 60) {
        min++
        sec = 0
    }
    else if (min == 60) {
        hr++
        min = 0
    }
    document.getElementById("counter").textContent = twoDigits(hr) + ":" + twoDigits(min) + ":" + twoDigits(sec) + "." + threeDigits(ms)
}

function pause() {
    clearInterval(interval)
    document.getElementById('start').addEventListener('click', start)
}

function start() {
    interval = setInterval(counter, 10)
    document.getElementById('start').removeEventListener('click', start)
}

function stop() {
    clearInterval(interval)
    hr = 0
    min = 0
    sec = 0
    ms = 0
    document.getElementById("counter").textContent = twoDigits(hr) + ":" + twoDigits(min) + ":" + twoDigits(sec) + "." + threeDigits(ms)
    document.getElementById('start').addEventListener('click', start)
}

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}

function threeDigits(digit) {
    if (digit < 10) {
        return ('00' + digit)
    } 
    else if(digit >= 10 && digit < 100){
        return ('0' + digit)
    }
    else{
        return(digit)
    }
}

document.getElementById('pause').addEventListener('click', pause)
document.getElementById('start').addEventListener('click', start)
document.getElementById('stop').addEventListener('click', stop)







