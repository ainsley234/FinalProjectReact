import React, { useState } from "react";
import {foodTypeLabels} from "./RecipeOptions.jsx";
import InputList from "./InputList";


function NewRecipe({ onNewRecipe }) {
    const [titleEntry, setTitleEntry] = useState("");
    const [typeEntry, setTypeEntry] = useState("");
    const [ingredientsEntry, setIngredientsEntry] = useState([]);
    const [instructionsEntry, setInstructionsEntry] = useState([]);

    function handleSave() {
      onNewRecipe(titleEntry, typeEntry, ingredientsEntry, instructionsEntry);
      setTitleEntry("");
      setTypeEntry("");
      setIngredientsEntry([]);
      setInstructionsEntry([]);
      alert("Recipe saved!");
    }

    return(
        <main>
            <h1>New Recipe</h1>
            <div className="grid newRecipe">
                <div className="puttingIN">
                    <label>
                        Recipe Name:
                        <input
                          type="text"
                          value={titleEntry}
                          onChange={(e) => setTitleEntry(e.target.value)}
                        />
                    </label>

                    <div className="input_dropdown">
                        <p>Food Type</p>
                        <select value={typeEntry} onChange={(e) => setTypeEntry(e.target.value)}>
                            {foodTypeLabels.slice(1).map( (option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <h2>Recipe</h2>
                <hr />
                <InputList title="Ingredients" list={ingredientsEntry} setList={setIngredientsEntry} />
                <InputList title="Instructions" list={instructionsEntry} setList={setInstructionsEntry} />
            </div>
            <div className="button">
                <button onClick={handleSave}>Save!</button>
            </div>
        </main>
    )
}

export default NewRecipe;