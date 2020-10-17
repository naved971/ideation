import React from 'react'

function List({ data = [] }) {
    return (<>
        <ul>

            {
                data.map((d, idx) => (<li key={idx}> { d.name} </li>))
            }

        </ul>

    </>)
}

export default List
