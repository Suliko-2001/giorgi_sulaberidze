function Child({ books }) {
  if (!books || books.length === 0) {
    return <p>წიგნები არ მოიძებნა</p>;
  }

  return (
    <div>
      <h3>წიგნების სია:</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.name}</strong> — {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Child;
