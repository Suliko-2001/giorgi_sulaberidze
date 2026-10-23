import Child from "./Child";

function Parent() {
  const booksList = [
    { id: 1, name: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი" },
    { id: 2, name: "დათა თუთაშხია", author: "ჭაბუა ამირეჯიბი" },
    { id: 3, name: "სამოსელი პირველი", author: "გურამ დოჩანაშვილი" },
  ];

  return (
    <div
      style={{ padding: "1rem", border: "1px solid #ccc", margin: "1rem 0" }}
    >
      <h2>Parent კომპონენტი</h2>
      {/* მონაცემთა გადაცემა Props-ით Child კომპონენტისთვის */}
      <Child books={booksList} />
    </div>
  );
}

export default Parent;
