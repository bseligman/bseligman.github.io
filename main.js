var r = document.querySelector(':root');
curState = 0;

/* Site Color Change Effect */

function colorChange() {
    if(curState > 0) {
        /* changes vars to new colors, cool beans */
        r.style.setProperty('--crust', '#DB3A34');
        r.style.setProperty('--crustshadow', '#ff0800');
        r.style.setProperty('--uhh', '#493B2A');
        r.style.setProperty('--uhhshadow', '#fbab0b');
        r.style.setProperty('--cheese', '#347329');
        r.style.setProperty('--sauce', '#4630f0');
        r.style.setProperty('--sauceshadow', '#347329');
        curState=1;
    }
    if(curState < 1) {
        r.style.setProperty('--crust', '#493B2A');
        r.style.setProperty('--crustshadow', '#fbab0b');
        r.style.setProperty('--uhh', '#6153CC');
        r.style.setProperty('--uhhshadow', '#4630f0');
        r.style.setProperty('--cheese', '#FFC857');
        r.style.setProperty('--sauce', '#DB3A34');
        r.style.setProperty('--sauceshadow', '#ff0800');
        curState=0;
    }
}
/*  Star Background Effect */
document.addEventListener("DOMContentLoaded", () => {
    const bubblesContainer = document.querySelector(".bubbles");
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.opacity = Math.random(); 
        bubble.style.left = Math.random() * 100 + "vw"; 
        bubble.style.animationDuration = Math.random() * 6 + 2 + "s"; 

        bubble.addEventListener("click", colorChange);

        bubblesContainer.appendChild(bubble);
    }
    setTimeout(()=>{
        bubble.remove();
        },3000)
    }
);

/* Mouse Star Effect */
document.addEventListener('mousemove', (event) => {
    let x = event.pageX;
    let y = event.pageY;
    const bubblesContainer = document.querySelector(".bubbles");

    const bubble = document.createElement("div");
    bubble.classList.add("star");
    bubble.style.left = x + 'px'
    bubble.style.top = y + 'px'
    bubble.style.animationDuration = Math.random() * 3 + 2 + "s"; 
    bubblesContainer.appendChild(bubble);

    setTimeout(()=>{
        bubble.remove();
        },3000)
    }
);

