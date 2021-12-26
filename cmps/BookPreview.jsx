

export function BookPreview({book, onSelectBook,amount,currency,img}) {
    let symbol = ''
    switch (currency) {
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
    return <article onClick={()=> onSelectBook(book)} className="book-preview">
        <div className="card">
            <div className="content">
           <h2 className="title"> {book.title}</h2>
        <h4>Price:{symbol}{amount}</h4>
        <img src={img}/>
            </div>
            </div> 
    </article>  
}