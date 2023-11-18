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
    
    
};


import {posts} from './card.js';

function printPosts() {

    const sectionPost = document.getElementById("second-section");

    if (sectionPost === null) {
        return
    }

    for (let i = 0; i < posts.length; i++) {
        
        const post = printPost(posts[i]);

        sectionPost.appendChild(post);

    }

};
//generare post//
document.addEventListener("DOMContentLoaded", function() {
    printPosts();
 });
 
 function printPost (data) {
    const post = document.createElement("div");
    
   
       post.innerHTML =
       `
       <div class="post">
        <h6  class="title-post">
           ${data.title}
        </h6>
        <span class="post-date">${data.publishedAt}</span>
        <p>
           ${data.preview}
        </p>
        <div class="category">
           <div class="first-cat">${data.categories[0]}</div>
           <div class="second-cat">${data.categories[1]}</div>
        </div>
        <div class="comments">
        <div class="mph"><i class="fa-regular fa-message mp"></i>3</div>
           <div class="view-more"><a class="ex1" href="viewmore.html?id=${data.id}" id="viewmore">View More</a></div>
        </div>

       </div>
       `
       return post;
    }
        

  //tasto indietro Logo//
    const logoElement = document.getElementById('logo');

if (logoElement) {
    logoElement.addEventListener('click', function() {
        window.history.back();
    });
} else {
    
};






