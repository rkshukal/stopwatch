let [h, m, s] = [0, 0, 0];
let timer = null;
var para = document.getElementById('displayWatch');



function start2() {
    s++;
    if (s == 60) {
        s = 0;
        m++;
        if (m == 60) {
            m = 0;
            h++;
        }
    }

    // code for making 60sec as 1 min and 60 min  as 1 hour            
    let hours = h < 10 ? '0' + h : h;
    let minutes = m < 10 ? '0' + m : m;
    let seconds = s < 10 ? '0' + s : s;
    para.innerHTML = `<h1 class=" heading"><b>${hours} : ${minutes} : ${seconds}</b></h1>`
}

//function for start the timer
function watchStart() {
    //we have to start it from zero
    if (timer != null) {
        clearInterval(timer);
    }

    // calling set interval function for updating timer in every sec
    timer = setInterval(start2, 1000)
};


//function for stop button        
function watchStop() {
    clearInterval(timer);
}
// fnction for reset button
function watchReset() {
    clearInterval(timer);
    [h, m, s] = [0, 0, 0];

    // puuting the timer at zero when reset             
    para.innerHTML = `<h1 class=" heading"><b>00 : 00 : 00</b></h1>`;
}