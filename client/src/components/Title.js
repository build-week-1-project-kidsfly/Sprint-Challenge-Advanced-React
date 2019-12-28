import React from "react";
import { useConsoleState, useInput } from "../utils/TitleHook";

const Title = () => {
  const [title, setTitle] = useConsoleState("Womwen's Word Coop");
  const [inputText, setInputText, handleChanges] = useInput("");

  const changeTitle = e => {
    e.preventDefault();
    setTitle(inputText);
    setInputText("");
  };
  return (
    <div>
      <h1>{title}</h1>
      <form>
        <div className="titleDiv">
          <input
            className="inputText"
            id="input"
            name="inputText"
            onChange={e => handleChanges(e.target.value)}
            placeholder="Please re-type title corrrectly"
            type="text"
            value={inputText}
          />
          <label htmlFor="input" className="inputLabel">
            New Title
          </label>
          <button onClick={changeTitle}>Change Title</button>
        </div>
      </form>
    </div>
  );
};

export default Title;
