

document.querySelectorAll('.ball-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

document.querySelectorAll('.extra-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
