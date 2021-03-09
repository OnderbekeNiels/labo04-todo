// Framkework imports
import React, { useState } from "react";

// Third library packages

// Custom / own code
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import Todo from "../components/Todo";
import Row from "../components/Row";
import Container from "../components/Container";

import "../style/components/newTodo.css";

const Todos = () => {
  const [placeHolderTodos] = useState([{ id: 1 }, { id: 2 }]);
  return (
    <main>
      <AppHeader />
      <Row>
        <Container>
          {/* insert todo */}
          <div className='c-new-todo'>
            <button className='c-new-todo__button'>
              <svg
                className='c-new-todo__icon'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='arcs'
              >
                <line x1='12' y1='5' x2='12' y2='19'></line>
                <line x1='5' y1='12' x2='19' y2='12'></line>
              </svg>
            </button>
            <div className='c-new-todo__input'>
              <input
                className='c-new-todo__text-input'
                type='text'
                placeholder='Enter new task here.'
                name=''
                id=''
              />
              <div>
                <select className='c-new-todo__subject' name='' id=''>
                  <option value='hobby'>Hobby</option>
                  <option value='school'>School</option>
                  <option value='work'>Work</option>
                </select>
              </div>
            </div>
          </div>

          {placeHolderTodos.map((t) => (
            <Todo />
          ))}
        </Container>
      </Row>
      <AppFooter />
    </main>
  );
};

export default Todos;
