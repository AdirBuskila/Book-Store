export function BookDetails({ book, onUnSelectBook }) {
    let symbol = ''
    switch (book.listPrice.currencyCode) {
        case 'EUR':
            symbol = '€'
            break;
        case 'ILS':
            symbol = '₪'
            break
        case 'USD':
            symbol = '$'
            break    
    }

    let readingLvl = ''
    if (book.pageCount >= 500) {
        readingLvl = 'Long reading'
    } else if (book.pageCount >= 200 || book.pageCount < 500) {
        readingLvl = 'Decent reading'
    } else if (book.pageCount <= 100 || book.pageCount < 200) {
        readingLvl = 'Light reading'
    }

    let bookRelease = ''
    let release = new Date().getFullYear() - book.publishedDate
    if (release >= 10) {
        bookRelease = 'Veteran Book'
    } else {
        bookRelease = 'New!'
    }

    let bookClass = ''
    if (book.listPrice.amount >= 150) bookClass = 'red'
    else bookClass = 'green'

    const saleClass = (book.listPrice.isOnSale) ? 'sale' : 'hide-sale'
    console.log(book.listPrice.isOnSale);
    return (
        <section className="book-details">
            <img className="main-img" src={book.thumbnail} alt="" />
            <div className="content">
            <h2 className="title"><span>Title:</span> {book.title}</h2>
            <h3><span>Subtitle:</span> {book.subtitle}</h3>
            <h3><span>Author:</span> {book.authors[0]}</h3>
            <h4><span>Book Status:</span> {bookRelease}</h4>
            <h4><span>Reading level :</span> {readingLvl}</h4>
            <div className="price-container">
            <h4 className={bookClass}><span>Price:</span> {symbol}{book.listPrice.amount}</h4>
            <img className={saleClass} src="assets/img/sales.svg"/>
            </div>
            <p><span>Description:</span> {book.description}</p>
            <button className="btn" onClick={() => onUnSelectBook()}>Go back</button>
            </div>
        </section>
    )
}