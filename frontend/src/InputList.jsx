import { useState } from "react";

function InputList({title, list, setList}) {
    const [textEntry, setTextEntry] = useState("")

    const addListItem = () => {
        const listClone = [ ...list, textEntry]
        setList(listClone)
        setTextEntry("")
    }

    return (
        <div className="input_list">
          <ul>
              {list.map((item, idx) => (
                  <li key={idx}>
                      {item}
                  </li>
              ))}
          </ul>
          <input
            placeholder={`Add ${title}`}
            value={textEntry}
            onChange={(e) => setTextEntry(e.target.value)}
            />
          <button onClick={addListItem}>Add</button>
        </div>
    )
}

export default InputList;
