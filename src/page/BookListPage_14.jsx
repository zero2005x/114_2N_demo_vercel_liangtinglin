import books_data from "../data/booklist_data.js";
import Wrapper from "../assets/wrappers/BookList_14.jsx";

console.log("books_data", books_data);

const App_14 = () => {
  return (
    <>
      <Booklist_14 />;
    </>
  );
};

const BookListPage_14 = () => {
  return (
    <Wrapper>
      <section className="booklist">
        {books_data.map((book) => {
          const { id, img, title, author } = book;
          return <Book_14 key={id} img={img} title={title} author={author} />;
        })}
      </section>
    </Wrapper>
  );
};

const Book_14 = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} />
      <div className="bookinfo">
        <h1>{title}</h1>
        <h4>{author}</h4>
      </div>
    </article>
  );
};

export default BookListPage_14;
