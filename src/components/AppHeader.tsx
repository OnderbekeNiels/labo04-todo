import React from "react";

import "../style/objects/container.css";
import "../style/objects/row.css";

import "../style/components/header.css";

const AppHeader = ({ todosLeft }: { todosLeft: number }) => {
  return (
    <div className='o-row'>
      <header className='o-container'>
        <h1 className='c-header__welcome'>Hello, {"Marty"}</h1>
        <h2 className='c-header__description'>
          There are {todosLeft} todo{todosLeft === 1 ? "" : "s"} left.
        </h2>
      </header>
    </div>
  );
};

export default AppHeader;
