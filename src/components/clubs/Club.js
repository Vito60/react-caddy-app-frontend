import React from 'react'



export default function Club(props) {
    const clubList = (club) => {
        return (
            <div >
                <br></br>
                Brand: {club.brand}
                <br></br>
                Model: {club.model}
                <br></br>
                Type: {club.club_type}
                <br></br>
                Loft: {club.loft}
            </div>
            )
    }
    return (
        <div>
            {props.clubs.map(club => clubList(club))}
        </div>
    )
}


