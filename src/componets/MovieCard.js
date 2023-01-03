import React from 'react'

const MovieCard = ({movie: {imdbID, Year, Poster, Title, Type}}) => {
    return (
        <div className='movie' key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>

                <img src=
                    {
                        //if the value of poster is not equal to N/A add the url to the src of the image tag
                        Poster !== "N/A" ? Poster 
                        //else add the placeholder image to the src tag
                        : "https://via.placeholder.com/400"
                    } 
                    alt={Title} 
                />
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    )

}

export default MovieCard