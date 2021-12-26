import { BookPreview } from './BookPreview.jsx'

export function BookList({ books, onSelectBook }) {
    return (
        <section className="book-list">
            {books.map(book => <BookPreview key={book.id} book={book} onSelectBook={onSelectBook} amount={book.listPrice.amount} currency={book.listPrice.currencyCode} img={book.thumbnail} />)}
        </section>
    )
}