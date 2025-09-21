// ====== Live Time ======
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');
    document.getElementById('liveTime').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
updateTime();

// ====== Matrix Effect ======
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "0123456789";
const fontSize = 20;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

// Default colors
let bgColor = 'black';
let textColor = '#0f0';

function drawMatrix() {
    ctx.fillStyle = `rgba(${bgColor === 'black' ? '0,0,0' : '255,255,255'}, 0.05)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = textColor;
    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Resize canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ====== Day / Night Buttons ======
document.getElementById('dayBtn').addEventListener('click', () => {
    bgColor = 'white';
    textColor = 'black';
    document.querySelector('.time-container').style.color = 'black';
    document.querySelector('.time-container').style.textShadow = '0 0 10px #000, 0 0 20px #000';
});

document.getElementById('nightBtn').addEventListener('click', () => {
    bgColor = 'black';
    textColor = '#0f0';
    document.querySelector('.time-container').style.color = 'white';
    document.querySelector('.time-container').style.textShadow = '0 0 10px #0f0, 0 0 20px #0f0';
});
