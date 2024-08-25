function submitResults() {
    const rows = document.querySelectorAll('#truthTable tr');
    let selectedOutput = '';
    let unselectedOutput = '';

    rows.forEach((row, index) => {
        if (index === 0) return; // Skip header row

        const checkbox = row.cells[3].querySelector('input[type="checkbox"]');
        const p = row.cells[0].innerText;
        const q = row.cells[1].innerText;
        const r = row.cells[2].innerText;

        if (checkbox.checked) {
            const selectedResult = `(${p === 'T' ? 'p' : '~p'}^${q === 'T' ? 'q' : '~q'}^${r === 'T' ? 'r' : '~r'})`;
            selectedOutput += selectedOutput ? `v${selectedResult}` : selectedResult;
        } else {
            const unselectedResult = `(${p === 'T' ? '~p' : 'p'}v${q === 'T' ? '~q' : 'q'}v${r === 'T' ? '~r' : 'r'})`;
            unselectedOutput += unselectedOutput ? `^${unselectedResult}` : unselectedResult;
        }
    });

    document.getElementById('output').querySelector('p').innerText = selectedOutput || 'No rows selected.';
    document.getElementById('unselectedOutput').querySelector('p').innerText = unselectedOutput || 'All rows are selected.';
}

function clearResults() {
    // Uncheck all checkboxes
    const checkboxes = document.querySelectorAll('#truthTable input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);

    // Clear the output
    document.getElementById('output').querySelector('p').innerText = '';
    document.getElementById('unselectedOutput').querySelector('p').innerText = '';
}
