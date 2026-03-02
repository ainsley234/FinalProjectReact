import { foodTypeLabels } from "./RecipeOptions.jsx";
import { useNavigate } from "react-router";
import React, { useState } from "react"

function Home({ recipes }) {
    const [typeChoice, setTypeChoice] = useState("🤷‍♀️")
    const navigate = useNavigate();

    function pickDinner() {
        let recipesReduced

        if (typeChoice !== "🤷‍♀️") {
            recipesReduced = recipes.filter(recipe => recipe.type === typeChoice)
        } else {
            recipesReduced = recipes
        }
        const recipeIndex = Math.floor(Math.random() * recipesReduced.length)
        const recipeID = recipesReduced[recipeIndex].id
        navigate(`/your_dinner/${recipeID}`)
    }

    return (
        <main>
            <h1>What do you want for dinner?</h1>

            <div className="inputs">
                <h2>Food Type</h2>
                <form>
                    {foodTypeLabels.map((label) => (
                        <div>
                            <input
                                type="radio"
                                id={label}
                                name="typeInput"
                                value={label}
                                checked={typeChoice === label}
                                onChange={(e) => setTypeChoice(e.target.value)}
                            />

                            <label for={label}>{label}</label>
                        </div>
                    ))}
                </form>
            </div>

            <div className="button">
                <button onClick={pickDinner}>Pick My Dinner!</button>
            </div>
        </main>
    );
}

export default Home;
