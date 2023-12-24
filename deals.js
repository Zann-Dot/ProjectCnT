function searchDeals() {
    const searchInput = document.getElementById('search-input');
    const foodDeals = document.querySelectorAll('.food-deal');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    foodDeals.forEach(deal => {
        const foodName = deal.querySelector('h3').textContent.toLowerCase();
        const displayStyle = foodName.includes(searchTerm) ? 'block' : 'none';
        deal.style.display = displayStyle;
    });
}