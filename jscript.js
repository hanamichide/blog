function initSlide() {

    const elemSlideIn = document.getElementById("slide-in");
    const elemSlideOut = document.getElementById("slide-out");

    if (elemSlideIn === null || elemSlideOut === null) {
        return;
    }
    elemSlideIn.addEventListener("click", moveIn);

    elemSlideOut.addEventListener("click", moveOut);

    const slide = document.getElementById("slide");
    const body = document.getElementById("body");

    function moveIn() {
        slide.classList.add("left");
        body.classList.add("no-scroll");
    };

    function moveOut() {
        slide.classList.remove("left");
        setTimeout(function () { body.classList.remove("no-scroll"); }, 2000);
    };

}



document.addEventListener("DOMContentLoaded", function () {
    initSlide();  
});


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
    post.classList.add("post")
   
       post.innerHTML =
       `
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
        `
       return post;
    }




