import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookDetails } from '../cmps/BookDetails.jsx'

export class BookApp extends React.Component {
    state = {
        books: [],
        filterBy: null,
        selectedBook: null
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        const {filterBy} = this.state
        bookService.query(filterBy).then(books => {
            this.setState({books})
        })

    }

    onSetFilter = (filterBy) => {
        this.setState({filterBy}, this.loadBooks)
    }

    onSelectBook = (selectedBook) => {
        this.setState({selectedBook})
    }

    onRemoveBook = (bookId) => {
        bookService.remove(bookId).then(()=> {
            const newBooks = this.state.books.filter(book => book.id !== bookId)
            this.setState({cars: newBooks})
        })
    }

    onUnSelectBook = () => {
        this.setState({selectedBook:null})
    }

    render() {
        const {books, selectedBook} = this.state
        return (
            <section className="book-app">
                {!selectedBook && 
                <React.Fragment>
                <BookFilter onSetFilter={this.onSetFilter} />
                <BookList books={books} onSelectBook={this.onSelectBook}/>
                    </React.Fragment>}
                {selectedBook && <BookDetails book={selectedBook} onUnSelectBook={this.onUnSelectBook} /> }
            </section>
        )
    }
}