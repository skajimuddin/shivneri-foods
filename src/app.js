function whatsapp() {
    const phoneNumber = "8328939820"
    const message = "Hello"

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.location.href = url
}

function gotoTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const buyNowButtons = document.querySelectorAll('.buy-now-btn');
const amazonButton = document.getElementById('model-amazon-btn');
const flipkartButton = document.getElementById('model-flipkart-btn');

buyNowButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const amazonUrl = button.getAttribute('data-amazon');
        const flipkartUrl = button.getAttribute('data-flipkart');

        amazonButton.href = amazonUrl;
        flipkartButton.href = flipkartUrl;
    });
});

// Serch button
// Get elements
const searchBtn = document.getElementById('search-btn');
const searchModal = document.getElementById('search-modal');
const closeModal = document.getElementById('close-modal');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// List of sections to search (section titles and IDs)
const sections = [
    { id: 'our-products', title: 'Our Products' },
    { id: 'who-we-are', title: 'Who we are' },
    { id: 'thought', title: 'Thought about us' },
    { id: 'contact', title: 'Contact us' }
];

// Function to display search results
function displaySearchResults(filteredSections) {
    searchResults.innerHTML = filteredSections.map(section => `
        <div class="p-2 border-b">
            <a href="#${section.id}" class="hover:underline search-link">${section.title}</a>
        </div>
    `).join('');

    // Close modal when clicking a result and smooth scroll to the section
    document.querySelectorAll('.search-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior

            const sectionId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(sectionId);

            // Smoothly scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Close the modal
            searchModal.classList.add('hidden');
        });
    });
}

// Open modal when search button is clicked
searchBtn.addEventListener('click', () => {
    searchModal.classList.remove('hidden');
    searchInput.focus(); // Focus the input when modal opens

    // Display default search results
    displaySearchResults(sections);
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
    searchModal.classList.add('hidden');
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.classList.add('hidden');
    }
});

// Search function (search sections based on user input)
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    // Filter sections based on query
    const filteredSections = sections.filter(section => section.title.toLowerCase().includes(query));

    // Display search results
    displaySearchResults(filteredSections);
});