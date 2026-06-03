//------------------------------------------------ Banner-parallax------------------------------------------------
const banner = document.querySelector('.banner');
const bgLayer = document.querySelector('.banner-content');
const fgLayer = document.querySelector('.banner-animation-img'); 
const fgLayer2 = document.querySelector('.banner-bottom-img');

const isMobile = window.innerWidth <= 767 || 'ontouchstart' in window;

if (isMobile) {
    const animX = {
        min: -16,    
        max: 16,     
        duration: 4000,
        easing: 'ease-in-out'
    };
    
    const animY = {
        min: -12,
        max: 12,
        duration: 5000,
        easing: 'ease-in-out'
    };
    
    fgLayer.style.animation = `windFloatY ${animX.duration}ms ${animX.easing} infinite alternate`;
    fgLayer2.style.animation = `windFloatY ${animY.duration}ms ${animY.easing} infinite alternate`;
    bgLayer.style.animation = `windFloatY ${6000}ms ease-in-out infinite alternate`;
    
    fgLayer2.style.animationDelay = '0.5s';
    
    fgLayer.style.transform = '';
    fgLayer2.style.transform = '';
    bgLayer.style.transform = '';
    
} else {
    const MAX_MOVE_X = 60;   
    const MAX_MOVE_Y = 100; 
    let rafId = null;

    banner.addEventListener('mousemove', (e) => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
            const rect = banner.getBoundingClientRect();
            const mouseX = (e.clientX - rect.left) / rect.width;
            const mouseY = (e.clientY - rect.top) / rect.height;
            const moveX = (mouseX - 0.5) * MAX_MOVE_X * 2;
            const moveY = (mouseY - 0.5) * MAX_MOVE_Y * 2; 
  
            bgLayer.style.transform = `translate(${moveX * 0.3}px, ${moveY * 0.2}px)`;
            fgLayer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            fgLayer2.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    banner.addEventListener('mouseleave', () => {
        if (rafId) cancelAnimationFrame(rafId);
        bgLayer.style.transform = 'translate(0, 0)';
        fgLayer.style.transform = 'translate(0, 0)';
        fgLayer2.style.transform = 'translate(0, 0)';
    });
}

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