// eslint-disable-next-line react/prop-types
export const Game = ({gameName, released, img}) => {
    return (
            <div className="card">
                <h3>Game name: {gameName}</h3>
                <p>Released date: {released}</p>
                <img src={img} alt={name}/>
            </div>
    )
}