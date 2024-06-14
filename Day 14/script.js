//  click on the child div, both alerts will be shown because the event bubbles up to the parent div.
document.getElementById('parent').addEventListener('click', function (event) {
    alert('Parent div clicked');
});

document.getElementById('child').addEventListener('click', function (event) {
    alert('Child div clicked');
});