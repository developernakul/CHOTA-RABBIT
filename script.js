// Interactive elements and additional animations
document.addEventListener('DOMContentLoaded', function() {
    // Add click interaction to the rabbit
    const rabbit = document.querySelector('.rabbit');
    rabbit.addEventListener('click', function() {
        this.style.animation = 'rabbitBreathe 0.5s ease-in-out, rabbitJump 0.8s ease-out';
        setTimeout(() => {
            this.style.animation = 'rabbitBreathe 3s ease-in-out infinite';
        }, 800);
    });

    // Add click interaction to flowers
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        flower.addEventListener('click', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
            this.style.transition = 'transform 0.3s ease';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    });

    // Add special interaction to the animated flower
    const specialFlower = document.querySelector('.special-flower');
    specialFlower.addEventListener('click', function() {
        const petals = this.querySelector('.special-flower-petals');
        const center = this.querySelector('.special-center');
        
        // Create burst effect
        petals.style.animation = 'petalRotate 1s linear, specialFlowerBurst 1s ease-out';
        center.style.animation = 'centerPulse 0.5s ease-in-out, centerBurst 1s ease-out';
        
        // Create sparkle particles
        for (let i = 0; i < 12; i++) {
            createSparkle(this);
        }
        
        setTimeout(() => {
            petals.style.animation = 'petalRotate 8s linear infinite';
            center.style.animation = 'centerPulse 2s ease-in-out infinite';
        }, 1000);
    });

    // Add hover effect to butterflies
    const butterflies = document.querySelectorAll('.butterfly');
    butterflies.forEach(butterfly => {
        butterfly.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.3)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        butterfly.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = 'scale(1)';
        });
    });

    // Create floating particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            left: ${Math.random() * 100}%;
            top: 100%;
            animation: floatUp 8s linear infinite;
        `;
        
        document.querySelector('.container').appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }


    // Add enhanced animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes rabbitJump {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
        }
        
        @keyframes specialFlowerBurst {
            0% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.5) rotate(180deg); }
            100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes centerBurst {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(2); }
            100% { transform: translate(-50%, -50%) scale(1); }
        }
        
        @keyframes sparkleExplode {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Create particles periodically
    setInterval(createParticle, 2000);

    // Add moon click interaction
    const moon = document.querySelector('.moon');
    moon.addEventListener('click', function() {
        // Create a shooting star effect
        const shootingStar = document.createElement('div');
        shootingStar.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            top: 20%;
            right: 20%;
            box-shadow: 0 0 10px white;
            animation: shootingStar 2s ease-out forwards;
        `;
        
        const shootingStarStyle = document.createElement('style');
        shootingStarStyle.textContent = `
            @keyframes shootingStar {
                0% {
                    transform: translate(0, 0);
                    opacity: 1;
                }
                100% {
                    transform: translate(-200px, 100px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(shootingStarStyle);
        
        document.querySelector('.night-sky').appendChild(shootingStar);
        
        setTimeout(() => {
            shootingStar.remove();
            shootingStarStyle.remove();
        }, 2000);
    });

    // Add gentle background music simulation (visual feedback)
    let musicPlaying = false;
    document.addEventListener('click', function() {
        if (!musicPlaying) {
            musicPlaying = true;
            document.body.style.animation = 'gentlePulse 4s ease-in-out infinite';
            
            const pulseStyle = document.createElement('style');
            pulseStyle.textContent = `
                @keyframes gentlePulse {
                    0%, 100% { filter: brightness(1); }
                    50% { filter: brightness(1.05); }
                }
            `;
            document.head.appendChild(pulseStyle);
        }
    });

    // Add message typing effect
    const messageText = document.querySelector('.message p');
    const originalText = messageText.textContent;
    messageText.textContent = '';
    
    let i = 0;
    function typeMessage() {
        if (i < originalText.length) {
            messageText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeMessage, 50);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeMessage, 2000);
});