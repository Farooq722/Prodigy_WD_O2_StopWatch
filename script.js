window.onload = function(){
    let tens = 0; // min
    let min = 0;  // sec
    let sec = 0;  //tens

    let appendMin = document.querySelector(".min");
    let appendSec = document.querySelector(".sec");
    let appendTens = document.querySelector(".tens");

    let start_btn = document.querySelector(".start");
    let stop_btn = document.querySelector(".stop");
    let reset_btn = document.querySelector(".reset");

    let interval;
    
    const startTimer = () => {
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = '0' + tens;
        }
        
        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens > 99){
            sec++;
            appendSec.innerHTML = '0' + sec;
            tens = 0;
            appendTens.innerHTML='0' + 0;
        }

        if(sec > 9){
            appendSec.innerHTML= sec;
        }

        if(sec > 59){
            min++;
            appendMin.innerHTML='0' + min;
            sec=0;
            appendSec.innerHTML= '0' + 0;
        }
    };


    start_btn.onclick = () => {
        clearInterval(interval);
        interval = setInterval(startTimer,10);
    };

    stop_btn.onclick = () => {
        clearInterval(interval);
    };

    reset_btn.onclick = () =>{
        clearInterval(interval);
        tens = 0; // min
        min = 0;  // sec
        sec = 0;
        appendTens.innerHTML = tens + '0';
        appendMin.innerHTML = min + '0';
        appendSec.innerHTML = sec + '0';
    };
};