import React, { Component } from 'react'


class CatList extends Component {

    componentDidMount() {
        console.log(this.props.catPics)
        
    }

    renderCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt=''/> )
    }

    render() {
        return (
            <div>
                <h3>Cat List</h3>
                {this.renderCats()}
            </div>
        )
    }
}

export default CatList