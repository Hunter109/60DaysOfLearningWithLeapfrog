
function calculateMarks() {

    const math = parseFloat(document.getElementById('math').value);
    const science = parseFloat(document.getElementById('science').value);
    const english = parseFloat(document.getElementById('english').value);
    const nepali = parseFloat(document.getElementById('nepali').value);
    const social = parseFloat(document.getElementById('social').value);

    const total = math + science + english + nepali + social;

    const percentage = (total / 500) * 100;

    let grade = '';
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Result</h2>
        <p>Total Marks: ${total} / 500</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
    `;
    showModal();
}

function showModal() {
    const modal = document.getElementById('resultModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('resultModal');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('resultModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
