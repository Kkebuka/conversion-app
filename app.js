const ones = document.querySelectorAll('.left');
// console.log(one)


let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('one');
            observer.unobserve(entry.target);
            console.log('working')
        }
    })
})

ones.forEach((one) => {
    observer.observe(one);
})

const rights = document.querySelectorAll('.right');
// console.log(one)


observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('three');
            observer.unobserve(entry.target);
            console.log('working')
        }
    })
})

rights.forEach((right) => {
    observer.observe(right);
})
// 
const two = document.querySelector('.middle');


 observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            two.classList.add('two');
            observer.unobserve(entry.target);
            console.log('working')
        }
    })
})

    observer.observe(two);


    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-con");
    
    hamburger.addEventListener("click", mobileMenu);
    
    function mobileMenu() {
    
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    
    const navLink = document.querySelectorAll("a");
    
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }



let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}