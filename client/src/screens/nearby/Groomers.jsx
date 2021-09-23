import React from 'react'

const Groomers = (props) => {

    let businesses = props.groomers.businesses

    return (
        <div>
            <h1>Groomers</h1>
            {businesses ? businesses.map((business, k) => {
                return(
                    <div key={k}>
                        <h1>{business.name}</h1>
                        <p>Distance: {business.distance}</p>
                        <p>{business.location.city}, {business.location.state}, {business.location.zip_code} {business.location.country}</p>
                        <p>{business.location.address1}</p>
                        <p>Phone: {business.phone}</p>
                        <p>Rating: {business.rating}</p>
                    </div>
                    
                    )
            }): <h1>No Location Found</h1>}
        </div>
    )
}

export default Groomers
