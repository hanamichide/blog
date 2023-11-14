let isTransitionActive = false;

function startTransition() {
    let overlay = document.getElementById('overlay');
    let hiddenElements = document.querySelectorAll('.hidden');
    overlay.classList.add("active");
    let body = document.body;
   
    if (!isTransitionActive) {
        
        let maxWidth = window.innerWidth;
        overlay.style.width = maxWidth + 'px';
        body.classList.add('no-scroll');
        isTransitionActive = true;
        hiddenElements.forEach(element => {
            element.classList.add('active');
        });
    
    }
}

function reverseTransition() {
    let overlay = document.getElementById('overlay');
    let hiddenElements = document.querySelectorAll('.hidden');
        let body = document.body;
    

    if (isTransitionActive) {
        
        overlay.style.width = '0';
        ;
        isTransitionActive = false;
    }
    setTimeout(function(){
        overlay.classList.remove("active");
        body.classList.remove('no-scroll')
    },900);

    hiddenElements.forEach(element => {
        element.classList.remove('active');
    });
    900;
    
}

