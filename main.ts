
let remainPlot = false
let ptrH = 0;
let ptrW = 0;
let height = 0;
let width = 0;
width = 4;
height = 4;
basic.forever(function () {
    led.plot(ptrW, ptrH);
})
// Set LED State to 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!remainPlot) { led.unplot(ptrW, ptrH); }
    remainPlot = false;
    ptrW += -1;
    if (ptrW < 0) {
        ptrW = width;
        ptrH += -1;
        if (ptrH < height) {
            ptrH = 4;
        }
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    remainPlot = true;
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (!remainPlot) { led.unplot(ptrW, ptrH); }
    remainPlot = false;
    ptrW += 1;
    if (ptrW > width) {
        ptrW = 0;
        ptrH += 1;
        if (ptrH > height) {
            ptrH = 0;
        }
    }
})
