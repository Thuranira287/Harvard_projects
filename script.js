document.addEventListener("DOMContentLoaded", function() {
    // Google Search Button
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.onclick = function() {
            const query = document.getElementById('search-bar').value;
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        };
    }

    // Lucky Button
    const luckyBtn = document.getElementById('lucky-btn');
    if (luckyBtn) {
        luckyBtn.onclick = function() {
            const query = document.getElementById('search-bar').value;
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
        };
    }

    // Image Search Button
    const imageSearchBtn = document.getElementById('image-search-btn');
    if (imageSearchBtn) {
        imageSearchBtn.onclick = function() {
            const query = document.getElementById('image-search-input').value;
            window.location.href = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
        };
    }
    
    // Advanced Search Button
    const advancedSearchBtn = document.getElementById('advanced-search-btn');

    // Check if the button exists
    if (advancedSearchBtn) {
        advancedSearchBtn.onclick = function(event) {
            event.preventDefault(); // Prevent the default form submission
            
            // Get the values from the input fields
            const allWords = document.getElementById('all-words').value;
            const exactPhrase = document.getElementById('exact-phrase').value;
            const anyWords = document.getElementById('any-words').value;
            const noneWords = document.getElementById('none-words').value;

            // Build the search URL
            let url = `https://www.google.com/search?as_q=${encodeURIComponent(allWords)}`;
            url += `&as_epq=${encodeURIComponent(exactPhrase)}`;
            url += `&as_oq=${encodeURIComponent(anyWords)}`;
            url += `&as_eq=${encodeURIComponent(noneWords)}`;

            // Redirect to the search URL
            window.location.href = url;
        };
    }
});