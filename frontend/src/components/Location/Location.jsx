import React from 'react'

const Location = (props) => {
    return (
        <div className='location-container'>
            <iframe
                className='location-frame'
                src={props.location_src}
                style={{
                    border: "none",
                    outline: "none",
                    height: "265px",
                    width: "265px",
                    borderRadius: "20px",
                    margin: "10px",
                    transition: "all ease-in-out .3s",
                    userSelect: "none"
                }}
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    )
}
export default Location;