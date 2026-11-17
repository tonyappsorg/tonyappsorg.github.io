(() => {
    const cards = Array.from(document.querySelectorAll('.extension-card'));
    const filters = Array.from(document.querySelectorAll('.filter-button'));
    const search = document.getElementById('extension-search');
    const count = document.getElementById('result-count');
    const empty = document.getElementById('empty-state');
    const year = document.getElementById('year');
    let activeCategory = 'all';

    function updateCatalog() {
        const query = search.value.trim().toLowerCase();
        let visible = 0;

        cards.forEach((card) => {
            const categoryMatches = activeCategory === 'all' || card.dataset.category === activeCategory;
            const queryMatches = !query || `${card.dataset.search} ${card.textContent}`.toLowerCase().includes(query);
            const show = categoryMatches && queryMatches;
            card.hidden = !show;
            visible += show ? 1 : 0;
        });

        count.textContent = visible === cards.length && activeCategory === 'all' && !query
            ? `Showing all ${visible} extensions`
            : `Showing ${visible} ${visible === 1 ? 'extension' : 'extensions'}`;
        empty.hidden = visible > 0;
    }

    filters.forEach((button) => {
        button.addEventListener('click', () => {
            activeCategory = button.dataset.filter;
            filters.forEach((filter) => {
                const selected = filter === button;
                filter.classList.toggle('is-active', selected);
                filter.setAttribute('aria-pressed', String(selected));
            });
            updateCatalog();
        });
    });

    search.addEventListener('input', updateCatalog);
    document.addEventListener('keydown', (event) => {
        if (event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey
            && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
            event.preventDefault();
            search.focus();
        }
    });

    year.textContent = new Date().getFullYear();
    updateCatalog();
})();
