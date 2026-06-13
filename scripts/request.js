document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookRequestForm');
    form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const description = document.getElementById('description').value;

    const bookRequest = {
        title,
        author,
        genre,
        description
    };

    console.log('Book Request Submitted:', bookRequest);
    alert('Your book request has been submitted successfully!');

    // Clear the form
    document.getElementById('bookRequestForm').reset();
}