import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  color: black;
  text-shadow: 1px 1px 5px #fff;
  font-size: 1.5em;
  width: 22%;
  border: 2px solid grey;
  border-radius: 25px;
  padding: 2px;
  margin: 10px;

  &:hover {
    background-color: #fff;
    font-size: 1.75em;
  }
`;

export default function Character(props) {
  console.log("this is props", props);

  const characters = props.characterList.map((character) => {
    console.log(character);
    return (
      <StyledCharacter className="individualContainer">
        <h3>{character.name}</h3>
      </StyledCharacter>
    );
  });
  console.log("this is characters", characters);

  return characters;
}
