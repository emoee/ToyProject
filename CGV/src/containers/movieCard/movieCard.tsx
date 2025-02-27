import Image from "next/image"

interface MovieCardProps {
    title : string
    image : string
    score : string
}

export default function MovieCard({title, image, score} : MovieCardProps) {
    return (
        <div className="movie-card">
            
            <Image src={`https://image.tmdb.org/t/p/original${image}`} alt="poster" style={{ objectFit: "contain" }} width={170} height={234}/>
            <h4>{title.length > 12 ? `${title.slice(0, 11)}...` : title}</h4>
            <h4>{score}</h4>
        </div>
    )
}