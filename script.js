//------------------------------------------------ Banner-parallax------------------------------------------------
const banner = document.querySelector('.banner');
const bgLayer = document.querySelector('.banner-content');
const fgLayer = document.querySelector('.banner-animation-img'); 
const fgLayer2 = document.querySelector('.banner-bottom-img');

const isMobile = window.innerWidth <= 767 || 'ontouchstart' in window;

const MAX_MOVE_X = isMobile ? 16 : 60;  
const MAX_MOVE_Y = isMobile ? 20 : 100; 

let rafId = null;

const moveEvent = isMobile ? 'touchmove' : 'mousemove';
const leaveEvent = isMobile ? 'touchend' : 'mouseleave';

function getCursorPosition(e, rect) {
    if (isMobile) {
        const touch = e.touches[0];
        return {
            x: (touch.clientX - rect.left) / rect.width,
            y: (touch.clientY - rect.top) / rect.height
        };
    } else {
        return {
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
        };
    }
}

banner.addEventListener(moveEvent, (e) => {
    if (isMobile) e.preventDefault();
    
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
        const rect = banner.getBoundingClientRect();
        const { x: mouseX, y: mouseY } = getCursorPosition(e, rect);
        
        const bgXFactor = isMobile ? 0.5 : 0.3;
        const bgYFactor = isMobile ? 0.5 : 0.2;
        
        const moveX = (mouseX - 0.5) * MAX_MOVE_X * 2;
        const moveY = (mouseY - 0.5) * MAX_MOVE_Y * 2;
        
        bgLayer.style.transform = `translate(${moveX * bgXFactor}px, ${moveY * bgYFactor}px)`;
        fgLayer.style.transform = `translate(${moveX}px, ${moveY}px)`;
        fgLayer2.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

banner.addEventListener(leaveEvent, () => {
    if (rafId) cancelAnimationFrame(rafId);
    bgLayer.style.transform = 'translate(0, 0)';
    fgLayer.style.transform = 'translate(0, 0)';
    fgLayer2.style.transform = 'translate(0, 0)';
});

if (isMobile) {
    banner.addEventListener('touchcancel', () => {
        bgLayer.style.transform = 'translate(0, 0)';
        fgLayer.style.transform = 'translate(0, 0)';
        fgLayer2.style.transform = 'translate(0, 0)';
    });
}

window.addEventListener('resize', () => {
    location.reload(); 
});

// ------------------------------------------------ About-swiper------------------------------------------------
    const aboutSwiper = new Swiper('.about-swiper .swiper', {
      slidesPerView: 'auto',
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      speed: 1000,
    });

// --------------------------------------------Production-swiper------------------------------------------------
 const productionSwiper = new Swiper('.production .swiper', {
      slidesPerView: '1',
      loop: false,
      speed: 400,
      navigation: {
        nextEl: '.production .swiper-next',
        prevEl: '.production .swiper-prev',
      },
});