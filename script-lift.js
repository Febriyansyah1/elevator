// script-lift.js (Ini adalah contoh, Anda perlu menyertakannya di file JS terpisah)
document.addEventListener('DOMContentLoaded', function() {

    // --- FUNGSI SLIDER TESTIMONI ---
    const testimonialContainer = document.querySelector('.testimonial-slider-container');
    if (testimonialContainer) {
        const testimonialSlider = testimonialContainer.querySelector('.testimonial-slider');
        const testimonials = testimonialContainer.querySelectorAll('.testimonial-card');
        const testimonialPrevBtn = testimonialContainer.querySelector('.testimonial-prev-btn');
        const testimonialNextBtn = testimonialContainer.querySelector('.testimonial-next-btn');
        const dotsContainer = testimonialContainer.querySelector('.testimonial-dots');

        if (testimonials.length > 0) {
            let testimonialCurrentIndex = 0;
            const testimonialCount = testimonials.length;
            let testimonialAutoSlide;

            // Buat dots
            for (let i = 0; i < testimonialCount; i++) {
                const dot = document.createElement('span');
                dot.classList.add('testimonial-dot');
                dot.addEventListener('click', () => {
                    goToTestimonial(i);
                    resetTestimonialAutoSlide();
                });
                dotsContainer.appendChild(dot);
            }
            const dots = dotsContainer.querySelectorAll('.testimonial-dot');

            function updateTestimonialPosition() {
                // Pastikan sliderClientWidth dihitung ulang jika ukuran jendela berubah
                const sliderClientWidth = testimonialContainer.clientWidth - 100; // Dikurangi padding tombol
                testimonialSlider.style.transform = 'translateX(' + (-sliderClientWidth * testimonialCurrentIndex) + 'px)';
                
                dots.forEach(dot => dot.classList.remove('active'));
                if (dots[testimonialCurrentIndex]) {
                    dots[testimonialCurrentIndex].classList.add('active');
                }
            }// Add this to your script.js file (ensure it's inside DOMContentLoaded listener)

// BAGIAN FUNGSI SLIDER GAMBAR
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
    const slider = sliderContainer.querySelector('.slider');
    const slides = sliderContainer.querySelectorAll('.slide');
    const prevBtn = sliderContainer.querySelector('.prev-btn');
    const nextBtn = sliderContainer.querySelector('.next-btn');

    if (slides.length > 0) {
        let currentIndex = 0;
        const slideCount = slides.length;
        let autoSlideInterval;

        function updateSlidePosition() {
            // Calculates the width of the slider and applies a transform to shift it
            slider.style.transform = 'translateX(' + (-sliderContainer.clientWidth * currentIndex) + 'px)';
        }

        function goToNextSlide() {
            currentIndex = (currentIndex + 1) % slideCount; // Loop back to start
            updateSlidePosition();
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval); // Stop current auto-slide
            startAutoSlide(); // Restart auto-slide
        }

        // Event listeners for navigation buttons
        nextBtn.addEventListener('click', () => {
            goToNextSlide();
            resetAutoSlide(); // Reset auto-slide on manual interaction
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount; // Loop back to end
            updateSlidePosition();
            resetAutoSlide(); // Reset auto-slide on manual interaction
        });

        // Handle window resize to adjust slide position without jumpiness
        window.addEventListener('resize', () => {
            slider.style.transition = 'none'; // Temporarily disable transition during resize
            updateSlidePosition();
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
            });
        });

        // Initial setup
        updateSlidePosition();
        startAutoSlide(); // Start auto-sliding when page loads
    }
}
            
            function goToTestimonial(index) {
                testimonialCurrentIndex = index;
                updateTestimonialPosition();
            }

            function goToNextTestimonial() {
                testimonialCurrentIndex = (testimonialCurrentIndex + 1) % testimonialCount;
                updateTestimonialPosition();
            }

            function startTestimonialAutoSlide() {
                testimonialAutoSlide = setInterval(goToNextTestimonial, 5000); // Ganti 5000 (5 detik) jika perlu
            }

            function resetTestimonialAutoSlide() {
                clearInterval(testimonialAutoSlide);
                startTestimonialAutoSlide();
            }

            testimonialNextBtn.addEventListener('click', () => {
                goToNextTestimonial();
                resetTestimonialAutoSlide();
            });

            testimonialPrevBtn.addEventListener('click', () => {
                testimonialCurrentIndex = (testimonialCurrentIndex - 1 + testimonialCount) % testimonialCount;
                updateTestimonialPosition();
                resetTestimonialAutoSlide();
            });

            // Handle resize untuk slider testimoni
            window.addEventListener('resize', () => {
                testimonialSlider.style.transition = 'none'; // Matikan transisi saat resize
                updateTestimonialPosition();
                setTimeout(() => {
                    testimonialSlider.style.transition = 'transform 0.5s ease-in-out'; // Aktifkan kembali transisi
                });
            });

            // Inisialisasi
            updateTestimonialPosition();
            startTestimonialAutoSlide();
        }
    }

    // --- FUNGSI COUNTDOWN TIMER (Jika ingin diaktifkan) ---
    /*
    const countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 jam dari sekarang
    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const timerElement = document.getElementById("countdown-timer");
        
        if (timerElement) {
            timerElement.innerHTML = hours + " Jam " + minutes + " Menit " + seconds + " Detik ";
            if (distance < 0) {
                clearInterval(countdownFunction);
                timerElement.innerHTML = "PENAWARAN BERAKHIR";
            }
        }
    }, 1000);
    */
});