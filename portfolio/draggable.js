const line = document.getElementById('pull-chain').getElementsByClassName("chain")[0];
const line_handle = document.getElementById('pull-chain').getElementsByClassName("handle")[0];
let isDragging = false;
let startY = 0;
let startHeight = 0;

line.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    startY = e.clientY;
    startHeight = line.offsetHeight;
    document.body.style.cursor = 'grab';  // Change cursor to indicate resizing
});

line_handle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    startY = e.clientY;
    startHeight = line.offsetHeight;
    document.body.style.cursor = 'grab';  // Change cursor to indicate resizing
});


document.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (isDragging) {
        const newHeight = startHeight + (e.clientY - startY); // Calculate the new width
        if (newHeight >= 100 && newHeight <= 200) {  // Set boundaries
            line.style.height = newHeight + 'px';
        }
    }
});
var mode_state = 0;
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        document.body.style.cursor = 'default';  // Reset cursor
        // Bounce back effect
        line.style.transition = 'height 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
        setTimeout(() => {
            line.style.height = '100px';  // Return to original width
        }, 10);  // Small delay to ensure transition happens
        document.body.classList.toggle("dark-mode");
        
        mode_state = mode_state==0?1:0;
        if(mode_state === 0)
        {
            darkModeToggle.textContent = "🌙";
        }
        else
        {
            darkModeToggle.textContent = "☀️";
        }
    }
});


