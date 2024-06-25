
document.getElementById('quote-button').addEventListener('click', generateQuote);

async function generateQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').innerText = `"${data.content}" — ${data.author}`;
    } catch (error) {
        document.getElementById('quote').innerText = 'Failed to fetch a quote. Please try again later.';
        console.error('Error fetching the quote:', error);
    }
}
