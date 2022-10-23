import React from 'react'

export default function Card({item}) {
    return (
            <>
                <div className="card">
                    <img className="card--img" src={item.imageUrl}/>
                    <div className="card--info">
                        <div className="card--locale">
                            <i className="fa-solid fa-location-dot"></i>
                            <span className="card--country">{item.location.toUpperCase()}</span>
                            <a className="card--mapsLink" href={item.googleMapsUrl}>View on Google Maps</a>
                        </div>
                        <h1 className="card--title">{item.title}</h1>
                        <h3 className="card--date">{item.startDate} - {item.endDate}</h3>
                        <p className="card--desc">{item.description}</p>
                    </div>
                </div>
                <hr className="separator"/>
            </>
    )
}