
var hr = 0
var min = 0
var sec = 0
var interval

function counter(){
    sec++
    if(sec==60){
        min++
        sec=0
    }
    if(min==60){
        hr++
        min=0 
    }
    document.getElementById("counter").innerHTML=  twoDigits(hr) +":" + twoDigits(min) + ":" + twoDigits(sec)
}
function pause(){
    clearInterval(interval)
}

function start(){
    counter()
    interval = setInterval(counter, 1000)
}

function stop(){
    clearInterval(interval)
    hr = 0
    min = 0
    sec = 0
    document.getElementById("counter").innerHTML=  twoDigits(hr) +":" + twoDigits(min) + ":" + twoDigits(sec)
}

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}







