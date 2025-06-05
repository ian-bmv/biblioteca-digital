const input = document.getElementById('searchInput');
const results = document.getElementById('results');

input.addEventListener('input', () => {
  const query = input.value.toLowerCase();
  results.innerHTML = '';

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );

  filteredBooks.forEach(book => {
    const div = document.createElement('div');
    div.className = 'result';
    div.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Autor:</strong> ${book.author}</p>
      <p><a href="${book.pdf}" target="_blank">📖 Leer PDF</a> | 
         <a href="${book.audio}" target="_blank">🎧 Escuchar Audiolibro</a></p>
    `;
    results.appendChild(div);
  });
});
