import {useEffect} from "react"
import {useDispatch} from "react-redux";
import {loadGames} from "./redux/actions/gamesAction.js";

const App = () => {
    // useDispatch
    const dispatch = useDispatch()
    // useEffect
    useEffect(() => {
        dispatch(loadGames())
    }, []);
    return (
        <div className="app">
            <div className="container">
                <h1 className="text-center">Game Finder App</h1>
            </div>
        </div>
    )
}

export default App