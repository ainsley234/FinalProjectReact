import { useParams } from "react-router";
import Recipe from "./Recipe"

function RecipePage ({ recipes, accounts, accountID, onFavorite }) {
    const { id } = useParams()
    const recipeID = Number(id)

    return(
        <main>
            <Recipe recipes={recipes} recipeID={recipeID} accounts={accounts} accountID={accountID} onFavorite={onFavorite}/>
        </main>
    )
}

export default RecipePage;