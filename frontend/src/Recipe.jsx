import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Recipe({ recipes, recipeID, accounts, accountID, onFavorite }) {
    const isFavorite = accounts[accountID].favoriteRecipesByID.includes(recipeID)

    function handleFavorite() {
          onFavorite(accountID, recipeID);
    }

    return(
        <div>
            <div className="flex">
                <h1>{recipes[recipeID].title}</h1>
                 <button onClick={handleFavorite}>
                    <FontAwesomeIcon icon={faHeart} className={isFavorite ? "favorite" : ""} />
                </button>
            </div>

            <h2>Food Type: {recipes[recipeID].type}</h2>


            <div className="grid">
              <div>
                <h2>Ingredients</h2>
                <ul className="simpleList">
                  {recipes[recipeID].ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2>Instructions</h2>
                <ul className="simpleList">
                    {recipes[recipeID].instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
              </div>
            </div>
        </div>
    )
}

export default Recipe;
