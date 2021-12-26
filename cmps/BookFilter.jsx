
export class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            minPrice: '',
            maxPrice: '',
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }
    onSubmitFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
        this.cleanForm()
    }

    cleanForm = () => {
        this.setState({filterBy: {
            title: '',
            minPrice: '',
            maxPrice: '',
        } })
    }

    render() {
        const {title,minPrice,maxPrice} = this.state.filterBy
        return (
            <form className="book-filter" onSubmit={this.onSubmitFilter}>
                <label 
                htmlFor="by-title">By Title:</label>
                <input 
                placeholder="Enter Book Name"
                type="text"
                id="by-title"
                name="title"
                value={title}
                onChange={this.handleChange} />
                <div className="range">

                <label htmlFor="by-min-price">Min price:</label>
                <input 
                    placeholder="Enter minimum price"
                    type="number"
                    min="0"
                    id="by-min-price"
                    name="minPrice"
                    value={minPrice}
                    onChange={this.handleChange} />
                <label
                    htmlFor="by-max-price">Max price:</label>
                <input 
                    placeholder="Enter maximum price"
                    type="number"
                    min="0"
                    id="by-max-price"
                    name="maxPrice"
                    value={maxPrice}
                    onChange={this.handleChange} />
                    </div>
            </form>
        )
    }
}