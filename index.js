document.getElementById('result').addEventListener('click', function () {
    const search = document.getElementById('search-field');
    const searchText = search.value;

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.docs))

});

const searchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = "";
    const error = document.getElementById('error');
    if (docs.length === 0) {
        error.innerText = 'No result found';
    }
    else {
        error.innerText = "";
    }
    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col')
        const url = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        div.innerHTML = `
            <div class="card h-100">
            <img src="${url}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title">Book Name</h5>
                    <p class="card-text">${doc.title}</p>
                    <h6 class="card-title">Author Name</h6>
                    <p class="card-text">${doc.author_name}</p>
                    <h6 class="card-title">Publisher Name</h6>
                    <p class="card-text">${doc.publisher}</p>
                    <h6 class="card-title">First Publish Year</h6>
                    <p class="card-text">${doc.first_publish_year}</p>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    });
}
document.getElementById('result').addEventListener('click', function () {
    const search = document.getElementById('search-field');
    const searchText = search.value;

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
    search.value = "";
});

const display = result => {
    document.getElementById('result2').innerText = `${result.docs.length} out of ${result.numFound} result displayed`
};