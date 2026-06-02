//------------------------------------------------ Banner-parallax------------------------------------------------
const banner = document.querySelector('.banner');
const bgLayer = document.querySelector('.banner-content');
const fgLayer = document.querySelector('.banner-animation-img'); 
const fgLayer2 = document.querySelector('.banner-bottom-img');

// Максимальное смещение при крайних положениях мыши
const MAX_MOVE_X = 60;   // по горизонтали ±60px
const MAX_MOVE_Y = 100;  // по вертикали ±100px

let rafId = null;

banner.addEventListener('mousemove', (e) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
        const rect = banner.getBoundingClientRect();
        // Нормализованные координаты мыши от 0 до 1
        const mouseX = (e.clientX - rect.left) / rect.width;
        const mouseY = (e.clientY - rect.top) / rect.height;

        // Смещение: от -MAX до +MAX
        const moveX = (mouseX - 0.5) * MAX_MOVE_X * 2; // (0-0.5)*120 = -60..+60
        const moveY = (mouseY - 0.5) * MAX_MOVE_Y * 2; // (0-0.5)*200 = -100..+100

        // Применяем трансформации с разными коэффициентами для слоёв
        // Для текста (bgLayer) оставляем небольшое движение для акцента
        bgLayer.style.transform = `translate(${moveX * 0.3}px, ${moveY * 0.2}px)`;
        // Для изображения - полная амплитуда
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