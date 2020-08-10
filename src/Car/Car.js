import React from 'react';

export default ({ name, year, onChangeName, onDelete }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '10px 0'
        }}>
            <h2>{ name }</h2>
            <h3>{ year }</h3>
            <input type="text" onChange={onChangeName} value={name} />
            <button 
                style={{
                    backgroundColor: 'red',
                    color: '#fff'
                }}
                onClick={onDelete}
            >delete</button>
            {/* <button onClick={onChangeTitle}>Click</button> */}

        </div>
    )
}