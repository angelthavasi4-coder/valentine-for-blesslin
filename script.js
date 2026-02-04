// Floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('bgHearts');
    const hearts = ['💕', '💖', '💗', '💝', '💘', '❤️'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 17000);
    }, 3000);
}

createFloatingHearts();

// Music control function
function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    const musicControl = document.getElementById('musicControl');
    
    if (music.paused) {
        music.play();
        musicControl.textContent = '🎵';
    } else {
        music.pause();
        musicControl.textContent = '🔇';
    }
}

// NO button runs away and YES button grows
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
let noBtnAttempts = 0;

noBtn.addEventListener('mouseenter', () => {
    noBtnAttempts++;
    
    // First time: make it absolute positioned
    if (noBtnAttempts === 1) {
        const rect = noBtn.getBoundingClientRect();
        const containerRect = noBtn.parentElement.getBoundingClientRect();
        noBtn.classList.add('running');
        noBtn.style.left = (rect.left - containerRect.left) + 'px';
        noBtn.style.top = (rect.top - containerRect.top) + 'px';
    }
    
    const container = document.getElementById('buttonContainer');
    const containerRect = container.getBoundingClientRect();
    
    // Make NO button progressively smaller and faster
    const newSize = Math.max(0.3, 1 - (noBtnAttempts * 0.15));
    noBtn.style.transform = `scale(${newSize})`;
    noBtn.style.transition = `all ${Math.max(0.1, 0.3 - noBtnAttempts * 0.02)}s ease`;
    
    // Random position
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // Make YES button GROW BIGGER with each attempt
    const yesSize = 1 + (noBtnAttempts * 0.2);
    const yesPadding = 20 + (noBtnAttempts * 5);
    yesBtn.classList.add('growing');
    yesBtn.style.transform = `scale(${yesSize})`;
    yesBtn.style.padding = `${yesPadding}px ${yesPadding * 2.5}px`;
    
    // If YES button gets really big, cover most of screen
    if (noBtnAttempts >= 8) {
        yesBtn.style.transform = `scale(${Math.min(yesSize, 3)})`;
        yesBtn.style.fontSize = '2rem';
        noBtn.style.opacity = '0';
        noBtn.style.pointerEvents = 'none';
    }
});

// YES button clicked
yesBtn.addEventListener('click', () => {
    // Play background music
    const music = document.getElementById('backgroundMusic');
    const musicControl = document.getElementById('musicControl');
    
    // Set volume to maximum
    music.volume = 1.0;
    
    music.play().catch(error => {
        console.log('Audio playback failed:', error);
        // If autoplay fails, show alert
        alert('Click the 🎵 button to play music!');
    });
    
    // Show music control button
    musicControl.classList.add('show');
    
    // Hide buttons
    document.getElementById('buttonContainer').style.display = 'none';
    
    // Show success section
    document.getElementById('successSection').classList.add('show');
    
    // Create confetti
    createConfetti();
    
    // Scroll to success section
    setTimeout(() => {
        document.getElementById('successSection').scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    }, 100);
});

// Confetti animation
function createConfetti() {
    const colors = ['#FFB3D9', '#FF8FAB', '#FF6B9D', '#FFE5F1', '#FFD700', '#FFA500'];
    const shapes = ['circle', 'square'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)] === 'circle' ? '50%' : '0';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 20);
    }
}

// Love letter envelope
const envelope = document.getElementById('envelope');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
});

// Photo reveal in card (no modal)
function revealPhotoInCard(card) {
    const placeholder = card.querySelector('.photo-placeholder');
    const img = card.querySelector('img');
    const quote = card.querySelector('.photo-quote');
    
    // Hide placeholder and show image
    placeholder.classList.add('hidden');
    img.classList.add('revealed');
    
    // Add sparkle effect
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animation = 'fadeIn 0.5s ease-out forwards';
            sparkle.style.fontSize = '1.5rem';
            sparkle.style.pointerEvents = 'none';
            card.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 50);
    }
    
    // Show quote after image reveals
    setTimeout(() => {
        quote.classList.add('show');
    }, 600);
}

// Easter egg surprises
function toggleSurprise(num) {
    const message = document.getElementById('surprise' + num);
    message.classList.toggle('show');
}

// Second NO button (after saying YES) - with consequences!
const noBtn2 = document.getElementById('noBtn2');
let noBtn2Attempts = 0;

noBtn2.addEventListener('mouseenter', () => {
    noBtn2Attempts++;
    
    // Make button run away
    const parent = noBtn2.parentElement;
    const parentRect = parent.getBoundingClientRect();
    
    const randomX = Math.random() * (parentRect.width - noBtn2.offsetWidth);
    const randomY = Math.random() * 100 - 50; // Move vertically too
    
    noBtn2.style.left = randomX + 'px';
    noBtn2.style.top = randomY + 'px';
    noBtn2.style.transform = `scale(${Math.max(0.5, 1 - noBtn2Attempts * 0.1)}) rotate(${Math.random() * 360}deg)`;
    
    // After 3 attempts, show the consequence message
    if (noBtn2Attempts >= 3) {
        noBtn2.style.display = 'none';
        document.getElementById('consequenceMsg').style.display = 'block';
        document.getElementById('consequenceMsg').style.animation = 'bounceIn 0.6s ease-out';
        
        // Create celebration confetti
        createConfetti();
    }
});

noBtn2.addEventListener('click', () => {
    // If they somehow manage to click it
    noBtn2.style.display = 'none';
    document.getElementById('consequenceMsg').style.display = 'block';
    document.getElementById('consequenceMsg').style.animation = 'bounceIn 0.6s ease-out';
    createConfetti();
});

// Show consequence directly when clicking yes
function showConsequence() {
    document.getElementById('noBtn2').style.display = 'none';
    document.getElementById('consequenceMsg').style.display = 'block';
    document.getElementById('consequenceMsg').style.animation = 'bounceIn 0.6s ease-out';
    createConfetti();
}

// Add hover effects to date items
const dateItems = document.querySelectorAll('.date-item');
dateItems.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = 'linear-gradient(135deg, var(--coral) 0%, var(--soft-red) 100%)';
        item.style.color = 'white';
        setTimeout(() => {
            item.style.background = 'linear-gradient(135deg, var(--soft-pink) 0%, var(--beige) 100%)';
            item.style.color = 'var(--text)';
        }, 300);
    });
});
