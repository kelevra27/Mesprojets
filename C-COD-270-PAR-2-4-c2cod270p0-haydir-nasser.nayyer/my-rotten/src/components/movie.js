const Movie = ({title, index, overview, poster_path, vote_average, release_date}) => {
    const IMAGE_API = "https://image.tmdb.org/t/p/w500/";

    return (

        <div className="movie" key={index}>
            
            <img src={IMAGE_API + poster_path} alt={title}/>
            <div className="movieDesc">
            <p>Resume : {overview} </p>
            <div className="titleAvg">
            <h4>{title}</h4>
            <span> Vote : {vote_average}</span>
            <p>Date of release : {release_date}</p>
            </div>
            </div>
            {/* <h1> ID : {index}</h1> */}
        </div>
    )
}
export default Movie