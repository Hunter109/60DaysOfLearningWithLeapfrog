
function handleClick(event) {
    console.log(event.target.id + ' single click detected!');
    event.target.style.backgroundColor = 'lightgreen';
}

function handleDoubleClick(event) {
    console.log(event.target.id + ' double click detected!');
    event.target.style.backgroundColor = 'lightcoral';
}

document.querySelectorAll('.clickable').forEach(box => {
    box.addEventListener('click', handleClick);
    box.addEventListener('dblclick', handleDoubleClick);
});
