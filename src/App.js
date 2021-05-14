import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterList, setCharacterList] = useState([]);
  const [stillLoading, setStillLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => {
        console.log("2. here is future data", response);
        setCharacterList(response.data);
        setStillLoading(false);
        console.log("this is character list", characterList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("char list outside", characterList);
  if (stillLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character
        characterList={characterList}
        setCharacterList={setCharacterList}
      />
    </div>
  );
};

export default App;
