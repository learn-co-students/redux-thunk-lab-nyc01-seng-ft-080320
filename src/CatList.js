import React from 'react';

function CatList(props) {

    const renderCatPics = () => {
        return props.catPics.map(cat => <div key={cat.id}>
            <img src={cat.url} style={{ width: '300px' }} alt='cat pic'/>
        </div>)
    }

    return (
        <div>
            {renderCatPics()}
        </div>
    );
}

export default CatList;