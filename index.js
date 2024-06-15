document.getElementById('searchButton').addEventListener('click', async () => {
    const verseInput = document.getElementById('verseInput').value;
    const loadingLayer = document.querySelector('.loading-layer');
    const verseOutput = document.getElementById('verseOutput');
 
    loadingLayer.style.display = 'block';

    const url = `https://bible-api.com/${verseInput}`;
    
        const response = await fetch(url);
        console.log(response)
        const data = await response.json();
        console.log(data)
        const verseText = data.text;
        verseOutput.value = verseText;
    
        loadingLayer.style.display = 'none';
    });