// Toggle sidebar functionality
document.querySelector('.toggle-btn').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    console.log('drawer')
    sidebar.classList.toggle('active'); // Toggle the active class
    sidebar.classList.toggle('deActive'); // Toggle the inactive class
});

// Accordion functionality for FAQs
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', (event) => {
        // Toggle the clicked accordion item
        const content = header.nextElementSibling;
        const isActive = content.style.display === "block";

        // Close all accordion items
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.style.display = "none";
        });

        // If the clicked item was not active, open it
        if (!isActive) {
            content.style.display = "block";
        }

        event.stopPropagation();
    });
});

// Close all accordion items when clicking outside
window.addEventListener('click', () => {
    // Close all accordion items
    document.querySelectorAll('.accordion-content').forEach(item => {
        item.style.display = "none";
    });
});

// Get the button for scrolling to the top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});

// Functions to open and close the overlay for editing profile
function openEditProfileOverlay() {
    document.getElementById('editProfileOverlay').style.display = 'flex';
}

function closeEditProfileOverlay() {
    document.getElementById('editProfileOverlay').style.display = 'none';
}
