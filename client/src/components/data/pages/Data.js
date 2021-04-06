import React from 'react'

function Data( {name, data} ) {
    return (
        <div className="section-container" id={name}>
            <h1>{data ? `Current rating: ${data.last.rating}` : ''}</h1>
        </div>
    )
}

export default Data
