export class TimerBar {
    constructor(root_el, text_el, slider_el, time_in_millisec, precision){
        this.time = time_in_millisec;
        this.precision = precision;
        this.value = 0;
        this.root = root_el;
        this.text = text_el;
        this.slider = slider_el;
    }

    start(callback){
        this.value = this.time;

        this.timerInterval = setInterval(() => this.countDown(callback), this.precision);
    }

    countDown(callback){
        this.value -= this.precision;
        this.update();
        if(this.value <= 0){
            clearInterval(this.timerInterval);
            if(callback) callback();
        }
    }

    update(){
        this.text.innerText = this.value;
        this.slider.style.width = `${this.value / this.time * 100}%`
    }
}
