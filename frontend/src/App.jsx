import { useState } from "react";
import { SHARED_TEST } from "./shared/example.js";
import "./App.css";
import {recipeList} from './recipeData.jsx'
import {accountList} from './accountData.jsx'
import Banner from "./Banner.jsx";
import Home from "./Home.jsx"
import Account from "./Account.jsx"
import NewRecipe from "./NewRecipe.jsx"
import YourDinner from "./YourDinner"
import RecipePage from "./RecipePage"
import { BrowserRouter, Routes, Route, useParams} from "react-router";
import { nanoid } from "nanoid";

function App() {
    const [recipes, setRecipes] = useState(recipeList)
    const [accounts, setAccounts] = useState(accountList)
    const [user, setUser] = useState(0)

    function addRecipe(title, type, ingredients, instructions) {
        const newRecipe = {
            id: nanoid(),
            title: title,
            createdByID:0,
            type: type,
            instructions:instructions,
            ingredients:ingredients
            };
        const recipesClone = [ ...recipes, newRecipe ];
        setRecipes(recipesClone);
    }

    function toggleFavorite(accountID, recipeID) {
      setAccounts(currentAccounts => currentAccounts.map((account) => {
          if (account.id !== accountID) return account;

          const favorites = account.favoriteRecipesByID;
          const updatedFavorites = favorites.includes(recipeID)
            ? favorites.filter(id => id !== recipeID)
            : [...favorites, recipeID];

          return { ...account, favoriteRecipesByID: updatedFavorites };
        })
      );
    }



    return (
        <div>
            <Banner/>
            <Routes>
                  <Route path="/" element={
                      <Home recipes={recipes} />
                  } />
                  <Route path="/account" element={
                      <Account recipes={recipes} accounts={accounts} accountID={user} />
                  } />
                  <Route path="/new_recipe" element={
                      <NewRecipe onNewRecipe={addRecipe} />
                  } />
                  <Route path="/your_dinner/:id" element={
                      <YourDinner recipes={recipes} accounts={accounts} accountID={user} onFavorite={toggleFavorite}/>
                  } />
                  <Route path="/recipe/:id" element={
                      <RecipePage recipes={recipes} accounts={accounts} accountID={user} onFavorite={toggleFavorite}/>
                  } />
            </Routes>
        </div>
    );
}

export default App;
