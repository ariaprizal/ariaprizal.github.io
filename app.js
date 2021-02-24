const navSlide = () => {
    const tog = document.querySelector('.tog');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-links li');

    tog.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index/7 + 1.6}s`;
            }
        });

        tog.classList.toggle('toggle');

    });
}

navSlide();

// intri javscript

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: '0%', duration: 1, stagger: 0.25 });
tl.to(".text", { y: '100%', duration: 1, delay: 0.4 });
tl.to(".slider", { y: '-50%', duration: 1 });
tl.to(".intro", { y: '50%', duration: 1}, "-=1" );
tl.to(".slider", { y: '-100%', duration: 1 });
tl.to(".intro", { y: '100%', duration: 1 }, "-=1");


tl.to(".card3", { y: '0%', duration: 1 });

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.5 });
tl.fromTo(".headline", { opacity: 0 }, { opacity: 1, duration: 1.5 }, '-=1.5');


// move image javascript
function moveImage() {
    var pic1 = document.querySelector('.image-move');
    var pic1Position = pic1.getBoundingClientRect().top;
    var screenPos = window.innerHeight /1;
    
    if (pic1Position < screenPos) {
        pic1.classList.add('move-image');
    } else {
        pic1.classList.add('image-move');
    }
}

window.addEventListener('scroll', moveImage);


// animation card javascript
function showCard() {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    var bo = document.querySelector('.content-card');
    var contentCard = document.querySelector('.content-card');
    var contentCardPosition = contentCard.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/2;

    if (contentCardPosition < screenPosition) {
        bo.classList.add('change-bg');
        tl.to(".card1", { y: '0%', duration: 1 });
        tl.to(".card2", { y: '0%', duration: 1 }, '-=0.8');
        tl.to(".card3", { y: '0%', duration: 1 }, '-=0.9');
    } 
}

window.addEventListener('scroll', showCard);


