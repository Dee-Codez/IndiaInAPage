function showRecommendations(query) {
    // Replace the following array with your own list of recommendation terms
    const recommendations = ["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","Delhi","Puducherry"];
    const recommendationsElement = document.getElementById('recommendations');
    recommendationsElement.innerHTML = '';

    if (query.length > 0) {
        const matchingRecommendations = recommendations.filter(term =>
            term.toLowerCase().startsWith(query.toLowerCase())
        );

        matchingRecommendations.forEach(term => {
            const listItem = document.createElement('li');
            listItem.textContent = term;
            listItem.onclick = () => {
                document.querySelector('.search-input').value = term;
                recommendationsElement.innerHTML = '';    
                // Change the style of an element with the same title as the search query
                const elementWithTitle = document.querySelector(`[title="${term}"]`);
                console.log(elementWithTitle);
                if (elementWithTitle) {
                    const newDiv = document.createElement('div');
                    elementWithTitle.style.fill = 'red';
                    elementWithTitle.style.stroke = 'white';
                    newDiv.textContent = '{term} Found';
                    newDiv.style.backgroundColor = 'green';
                    newDiv.style.color = 'white';
                    elementWithTitle.appendChild(newDiv);
                }
            };
            recommendationsElement.appendChild(listItem);
        });
    }
}

function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the submitted search query value
    const searchQuery = document.querySelector('.search-input').value;

    // Perform additional actions or trigger functions here based on the search form response
    console.log('Form submitted!');
    console.log('Search query:', searchQuery);
}
