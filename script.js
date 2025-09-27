
        // FAQ Toggle functionality
        document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            });
            
            // Testimonial Carousel
            const testimonials = document.querySelectorAll('.testimonial');
            let currentTestimonial = 0;
            
            function showTestimonial(index) {
                testimonials.forEach(testimonial => {
                    testimonial.classList.remove('active', 'prev', 'next');
                    
                });
                
                testimonials[index].classList.add('active');
                
                // Set next testimonial
                let nextIndex = (index + 1) % testimonials.length;
                testimonials[nextIndex].classList.add('next');
                
                // Set previous testimonial
                let prevIndex = (index - 1 + testimonials.length) % testimonials.length;
                testimonials[prevIndex].classList.add('prev');
            }
            
            function nextTestimonial() {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            }
            
            // Initialize testimonial carousel
            showTestimonial(currentTestimonial);
            setInterval(nextTestimonial, 5000);
            
            // Chatbot functionality
            const chatbotButton = document.querySelector('.chatbot-button');
            const chatbotWindow = document.querySelector('.chatbot-window');
            const chatClose = document.querySelector('.chat-close');
            
            chatbotButton.addEventListener('click', () => {
                chatbotWindow.classList.toggle('active');
            });
            
            chatClose.addEventListener('click', () => {
                chatbotWindow.classList.remove('active');
            });
            
            // Video fallback
            const video = document.getElementById('bg-video');
            if (video) {
                video.addEventListener('error', function() {
                    document.querySelector('.video-fallback').style.display = 'block';
                });
            }
            
            // Why Choose Us animation
            const features = document.querySelectorAll('.feature');
            let currentFeature = 0;
            
            function activateNextFeature() {
                features.forEach(feature => feature.classList.remove('active'));
                features[currentFeature].classList.add('active');
                currentFeature = (currentFeature + 1) % features.length;
            }
            
            // Initialize features animation
            activateNextFeature();
            setInterval(activateNextFeature, 1500);
            
            // Phone number input initialization
            const phoneInput = document.getElementById('phone');
            if (phoneInput) {
                window.intlTelInput(phoneInput, {
                    initialCountry: "us",
                    separateDialCode: true,
                    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
                });
            }
            
            // Form validation
            const consultationForm = document.getElementById('consultationForm');
            if (consultationForm) {
                consultationForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your consultation request. We will contact you shortly.');
                    consultationForm.reset();
                });
            }
        });

        function renderCost(value) {
            const costCard = document.querySelector('.cost-comparison');
            costCard.innerHTML ="";

            const key = Object.keys(treatmentCost).find(k=>
                k.toLowerCase().includes(value.toLowerCase())
            )

            if(!key){
                costCard.innerHTML = `<p> No result </p>`;
                return;
            }

            treatmentCost[key].forEach(item=>{

                const card = document.createElement('div');
                card.className = 'cost-card'

                const button = item.country === "Through Gods Life" 
                ? `<a href="#" class="btn btn-outline">Get Quotes</a>` 
                : '';

                card.innerHTML = `
                
                <h3>${item.country}</h3>

                <div class="price"> ${item.price}</div>

                <ul>
                    ${item.items.map(i => `<li>${i}</li>`).join("")}
                </ul>
                    ${button}
                `;
                costCard.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', ()=>{

    const input = document.querySelector('.input-treatment');
    renderCost('kneeReplacement');

    input.addEventListener('input', e => renderCost(e.target.value));

})


const header = document.querySelector('header');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const heroHeight = hero.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY < heroHeight/2) {

        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }
    else if(scrollY < heroHeight) {

        header.style.opacity = '0.7';
        header.style.transform = 'translateY(0)';
    } else {
        
        header.style.opacity = '0';
        header.style.transform = 'translateY(-70px)'; 
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hospitalTitle = document.querySelector(".hospital-partner");
    const originalText = hospitalTitle.textContent;

    hospitalTitle.addEventListener("mouseenter", () => {

        hospitalTitle.style.opacity = '0';
        setTimeout(() => {
            hospitalTitle.textContent = "Explore More Hospitals ➔"; 
            hospitalTitle.style.opacity = '1';
        }, 200); 
    });

    hospitalTitle.addEventListener("mouseleave", () => {
        hospitalTitle.style.opacity = '0';
        setTimeout(() => {
            hospitalTitle.textContent = originalText; 
            hospitalTitle.style.opacity = '1';        
        }, 200);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const doctor = document.querySelector(".partner-doctor");
    const originalText = doctor.textContent;

    doctor.addEventListener("mouseenter", () => {

        doctor.style.opacity = '0';
        setTimeout(() => {
            doctor.textContent = "Explore More Doctors ➔"; 
            doctor.style.opacity = '1';
        }, 200); 
    });

    doctor.addEventListener("mouseleave", () => {
        doctor.style.opacity = '0';
        setTimeout(() => {
            doctor.textContent = originalText; 
            doctor.style.opacity = '1';        
        }, 200);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const specialityTreatment = document.querySelector(".spec-treatment");
    const originalText = specialityTreatment.textContent;

    specialityTreatment.addEventListener("mouseenter", () => {

        specialityTreatment.style.opacity = '0';
        setTimeout(() => {
            specialityTreatment.textContent = "Explore More Doctors ➔"; 
            specialityTreatment.style.opacity = '1';
        }, 200); 
    });

    specialityTreatment.addEventListener("mouseleave", () => {
        specialityTreatment.style.opacity = '0';
        setTimeout(() => {
            specialityTreatment.textContent = originalText; 
            specialityTreatment.style.opacity = '1';        
        }, 200);
    });
});


const hamIcon = document.querySelector('.ham-icon');
const navBar = document.querySelector('.nav-menu')
hamIcon.addEventListener('click', ()=>{
    navBar.classList.toggle("active");

});











