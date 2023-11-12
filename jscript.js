let isTransitionActive = false;

function startTransition() {
    let overlay = document.getElementById('overlay');
    overlay.classList.add("active");
    let body = document.body;
   
    if (!isTransitionActive) {
        
        let maxWidth = window.innerWidth;
        overlay.style.width = maxWidth + 'px';
        body.classList.add('no-scroll');
        isTransitionActive = true;

    
    }
}

function reverseTransition() {
    let overlay = document.getElementById('overlay');
    let body = document.body;
    

    if (isTransitionActive) {
        
        overlay.style.width = '0';
        body.classList.remove('no-scroll');
        isTransitionActive = false;
    }
    setTimeout(function(){
        overlay.classList.remove("active");
    },900);

    
}

