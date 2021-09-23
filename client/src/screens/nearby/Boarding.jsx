import React from 'react'

const Boarding = (props) => {

    let businesses = props.boarding.businesses

    return (
        <div>
            {businesses ? businesses.map((business, k) => {
                return(
                    <div key={business.phone}>
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

export default Boarding
