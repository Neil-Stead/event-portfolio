// Get modal and close button
const modal = document.getElementById('videoModal');
const closeBtn = modal.querySelector('.close');

// Open modal on link click
document.querySelector('.video-link').addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

// Close modal on close button click
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
