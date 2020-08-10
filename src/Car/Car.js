import React from 'react';
import './Car.css'

export default props => {
    return (
        <div className="car">
            <h2>{ props.name }</h2>
            <h3>{ props.year }</h3>
            <input 
                type="text" 
                onChange={props.onChangeName} 
                value={props.name} 
                onClick={props.onSelectInput}
            />
            <button 
                style={{
                    backgroundColor: 'red',
                    color: '#fff'
                }}
                onClick={props.onDelete}
            >delete</button>

        </div>
    )
}