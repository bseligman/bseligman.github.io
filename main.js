/*  Star Backgroudn Effect */
document.addEventListener("DOMContentLoaded", () => {
    const bubblesContainer = document.querySelector(".bubbles");
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.opacity = Math.random(); 
        bubble.style.left = Math.random() * 100 + "vw"; 
        bubble.style.animationDuration = Math.random() * 6 + 2 + "s"; 
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