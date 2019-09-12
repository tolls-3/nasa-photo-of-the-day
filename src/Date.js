import React from "react";

function Date(props) {
    const {today, handleChange} = props;
    return (
        <div>
        <input
        onChange={handleChange}
        value={today}
        type='date'
        max={today}
        />
        </div>
    )
    
    }
    
    export default Date;
