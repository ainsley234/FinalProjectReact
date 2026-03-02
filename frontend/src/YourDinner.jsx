import { useParams } from "react-router";
import { Link } from "react-router";
import Recipe from "./Recipe.jsx"

function YourDinner ({ recipes, accounts, accountID, onFavorite}) {
    const { id } = useParams()
    const recipeID = Number(id)
    const goHome = () => {
      <Link to="/"></Link>
    }

    return(
        <div>
            <h1>Your Dinner!</h1>

            <div className="emphasisContainer">
                <img src="/FireworkBorder3.png" alt="" className="emphasis" />

                <Link to={`/recipe/${recipeID}`}>
                    <div className="recipeCard">
                        <Recipe recipes={recipes} recipeID={recipeID} accounts={accounts} accountID={accountID} onFavorite={onFavorite} />
                    </div>
                </Link>
            </div>

            <div className="button">
                <Link to="/">
                    <button>Change Input</button>
                </Link>
            </div>
        </div>
    )
}

export default YourDinner;
