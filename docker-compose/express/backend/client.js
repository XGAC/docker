const apiUrl = '/proxy'; // This points to the local proxy server endpoint

const fetchButton = document.getElementById('fetchButton');
const resultDiv = document.getElementById('result');

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        resultDiv.innerHTML = 'API Response: ' + JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        resultDiv.innerHTML = 'Error: ' + error.message;
    }
}

fetchButton.addEventListener('click', fetchData);
