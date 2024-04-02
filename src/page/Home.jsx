import {useEffect} from "react";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../redux/actions/gamesAction.js";
import {Game} from "../components/Game.jsx";

export const Home = () => {
    // useDispatch
    const dispatch = useDispatch()
    // useEffect
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch]);
    // Data ga kirish
    const {popular, upcoming, newGames} = useSelector((state) => state.games)
    return (
        <div>
            <h2>Upcoming Games</h2>
                {upcoming.map(game => <Game
                        key={game.id}
                        gameName={game.name}
                        released={game.released}
                        img={game.background_image}
                    />
                )}

            <h2>Popular Games</h2>
                {popular.map(game => <Game
                        key={game.id}
                        gameName={game.name}
                        released={game.released}
                        img={game.background_image}
                    />
                )}

            <h2>New Games</h2>
                {newGames.map(game => <Game
                        key={game.id}
                        gameName={game.name}
                        released={game.released}
                        img={game.background_image}
                    />
                )}
        </div>
    )
}