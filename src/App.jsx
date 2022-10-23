import React from 'react'
import Header from './components/Header'
import Card from './components/Card'

import data from './data'

const cardsList = data.map((item)=> {
    return (
        <Card 
            key={item.id}
            item={item}
        />
    )
})

export default function App() {
    return (
        <div >
            <Header />
            <div className="container">
                {cardsList}
            </div>
        </div>
    )
}
