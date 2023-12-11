console.log("Starting")

wrapper = document.querySelector(".wrapper")

sliders = wrapper.querySelectorAll(".slider")
// sliders_2 = sliders[0].cloneNode( true );
// wrapper.appendChild(sliders_2)

sliders_new = sliders[sliders.length-1].cloneNode( true );
wrapper.insertBefore(sliders_new, wrapper.firstChild);
sliders = wrapper.querySelectorAll(".slider")

sliders = wrapper.querySelectorAll(".slider")
btn_left = document.querySelector(".btn_left")
btn_right = document.querySelector(".btn_right")

bullets = document.querySelectorAll(".bullets")

bullet_one = document.querySelector(".bullet-one")
bullet_two = document.querySelector(".bullet-two")
bullet_three = document.querySelector(".bullet-three")

traslateX_value = -100
for(var i=0; i<sliders.length; i++){
    sliders[i].style.transform =  `translateX(${traslateX_value}%)`
}
function  slider_move(direction){
    if(direction == "left"){
        console.log("Нажата левая")
    
        if(sliders[1].dataset.number == 1){
            bullet_one.classList.toggle("bullet-active")
            bullet_three.classList.toggle("bullet-active")
        }
        if(sliders[1].dataset.number == 2){
            bullet_two.classList.toggle("bullet-active")
            bullet_one.classList.toggle("bullet-active")
        }
        if(sliders[1].dataset.number == 3){
            bullet_two.classList.toggle("bullet-active")
            bullet_three.classList.toggle("bullet-active")
        }
    
        if(traslateX_value >= -100){
            traslateX_value -= 100
            sliders[sliders.length-1].remove()
            sliders = wrapper.querySelectorAll(".slider")
            sliders_new = sliders[sliders.length-1].cloneNode( true );
            wrapper.insertBefore(sliders_new, wrapper.firstChild);
            sliders = wrapper.querySelectorAll(".slider")
            // return
        }
    
        
        // traslateX_value = traslateX_value - 100
        for(var i=0; i< sliders.length; i++){
            sliders[i].style.transform = `translateX(${traslateX_value}%)`
            const newspaperSpinning = [
                { transform: `translateX(${traslateX_value}%)` },
                { transform: `translateX(${traslateX_value+100}%)` },
              ];
              
              const newspaperTiming = {
                duration: 1000,
                iterations: 1,
              };
              
            sliders[i].animate(newspaperSpinning, newspaperTiming);
            sliders[i].style.transform = `translateX(${traslateX_value+100}%)`  
        }
        traslateX_value = traslateX_value + 100
    
        
    }
    if(direction == "right"){
        console.log("Нажата right")
    console.log(traslateX_value)
    if(sliders[1].dataset.number == 1){
        bullet_one.classList.toggle("bullet-active")
        bullet_two.classList.toggle("bullet-active")
    }
    if(sliders[1].dataset.number == 2){
        bullet_two.classList.toggle("bullet-active")
        bullet_three.classList.toggle("bullet-active")
    }
    if(sliders[1].dataset.number == 3){
        bullet_one.classList.toggle("bullet-active")
        bullet_three.classList.toggle("bullet-active")
    }
    console.log(sliders[1].dataset.number)
    if(traslateX_value <= -100){
        traslateX_value += 100
        sliders[0].remove()
        sliders = wrapper.querySelectorAll(".slider")
        sliders_new = sliders[0].cloneNode( true );
        wrapper.appendChild(sliders_new)
        sliders = wrapper.querySelectorAll(".slider")
        // return
    }
    // bullet_three.classList   .toggle("bullet-active")
    
    for(var i=0; i< sliders.length; i++){
        sliders[i].style.transform = `translateX(${traslateX_value}%)`
        const newspaperSpinning = [
            { transform: `translateX(${traslateX_value}%)` },
            { transform: `translateX(${traslateX_value-100}%)` },
          ];
          
          const newspaperTiming = {
            duration: 1000,
            iterations: 1,
          };
          
        sliders[i].animate(newspaperSpinning, newspaperTiming);
        sliders[i].style.transform = `translateX(${traslateX_value-100}%)`  
    }
    traslateX_value = traslateX_value - 100
    
    }
}
btn_left.addEventListener("click", ()=>{
    slider_move("left");
})
btn_right.addEventListener("click", ()=>{
    slider_move("right");
})


dragg = document.querySelector('.dragg')
// dragg.addEventListener('drag',function drag_fun(event){
//     console.log("Dragging")
// })
// dragg.addEventListener('dragend',function drop_fun(event){
//     console.log("Leaved")
//     console.log(event.pageX)
//     if (event.pageX  < 375){
//         console.log("turned right")
//         slider_move("right");
//     }else {
//         console.log("turned left")
//         slider_move("left");
//     }

// })
document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        event = event || window.event; // IE-ism
        // console.log(event.pageX ,  event.pageY)
        
        // console.log(event.target.offsetTop)
        // console.log(event.target.offsetLeft)
    }
el = dragg
let dragging
let pos
let state = {
  get dragging() { return dragging },
  set dragging(d) { dragging = d; el.style.cursor = d? "grabbing" : "grab"; },
  get pos() { return pos },
  set pos(p) { 
    pos = {x: clamp(p.x, -50, +50), y: clamp(p.y, -20, +20)}; 
    el.style.transform = `translate(${pos.x}px,${pos.y}px)`
  },
	eventToCoordinates(event) { return {x: event.clientX, y: event.clientY}; },
}
state.pos = {x: el.offsetLeft, y: el.offsetTop}
state.dragging = false

makeDraggable(state, dragg)
function clamp(x, lo, hi) { return x < lo ? lo : x > hi ? hi : x; }
function makeDraggable(state, el) {
    // from https://www.redblobgames.com/making-of/draggable/
    function start(event) {
        if (event.button !== 0) return; // left button only
        let {x, y} = state.eventToCoordinates(event);
        state.dragging = {dx: state.pos.x , dy: state.pos.y };
        el.setPointerCapture(event.pointerId);
    }

    function end(_event) {
        state.dragging = null;
        console.log(_event.pageX)
            if (_event.pageX  < 375){
                console.log("turned right")
                slider_move("right");
            }else {
                console.log("turned left")
                slider_move("left");
            }
    }

    function move(event) {
        if (!state.dragging) return;
        let {x, y} = state.eventToCoordinates(event);
        state.pos = {x: x + state.dragging.dx, y: y};
    }

    el.addEventListener('pointerdown', start);
    el.addEventListener('pointerup', end); 
    el.addEventListener('pointercancel', end);
    el.addEventListener('pointermove', move)
    // el.addEventListener('touchstart', (e) => e.preventDefault());
}

