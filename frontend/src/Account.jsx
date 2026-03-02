import { Link } from "react-router";
function Account({ recipes, accounts, accountID }) {
    return(
        <div class="grid">
          <div class="accountTitle">
            <h1>Hi {accounts[accountID].username}!</h1>
            <img
                    class="idImage"
                    src={accounts[accountID].profileImage}
                    alt="idImage"
            />
          </div>

          <div>
            <h2>Favorite Recipes</h2>
            <ul class="simpleList">
                {accounts[accountID].favoriteRecipesByID.map((recipeID, index) => (
                    <li> <Link to={`/recipe/${recipeID}`}>{recipes[recipeID].title}</Link> </li>
                ))}
            </ul>
          </div>

          <div>
            <h2>Your Created Recipes</h2>
            <ul class="simpleList">
              {recipes
                  .filter(recipe => recipe.createdByID === accountID)
                  .map((recipe, index) => (
                      <li> <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> </li>
                  ))
              }
            </ul>
          </div>
        </div>

    )
}

export default Account;
