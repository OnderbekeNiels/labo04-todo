// Framkework imports
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";

// Third library packages

// Custom / own code
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import TodoComponent from "../components/Todo";
import { Todo } from "../models/Todo";
import Row from "../components/Row";
import Container from "../components/Container";

import { todoStorage } from "../utils/local";

import "../style/components/newTodo.css";

const Todos = () => {
  const generateRandomId = () => Math.floor(Math.random() * 10000).toString();

  const [todos, setTodos] = useState<Todo[]>(
    localStorage.getItem("@todos")
      ? JSON.parse(localStorage.getItem("@todos") as string)
      : []
  );
  const [newTodo, setNewTodo] = useState<Todo>({
    id: generateRandomId(),
    title: "",
    finished: false,
    category: "default",
  });

  const saveTodo = () => {
    if (
      newTodo.id &&
      newTodo.title &&
      newTodo.category &&
      newTodo.category != "default"
    ) {
      //save
      console.log({ newTodo });
      setTodos((currentTodos: Todo[]) => {
        return [...currentTodos, newTodo];
      });

      setNewTodo({
        id: generateRandomId(),
        finished: false,
        title: "",
        category: newTodo.category,
      });
    } else {
      console.warn("something does not work", { newTodo });
    }
  };

  useEffect(() => {
    const todosToSave: Todo[] = todos.filter((todo: Todo) => !todo.finished);
    localStorage.setItem("@todos", JSON.stringify(todosToSave));
  }, [todos]);

  return (
    <main>
      <AppHeader todosLeft={todos.length} />
      <Row>
        <Container>
          {/* insert todo */}
          <div className='c-new-todo'>
            <button className='c-new-todo__button' onClick={saveTodo}>
              <svg
                className='c-new-todo__icon'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='12' y1='5' x2='12' y2='19'></line>
                <line x1='5' y1='12' x2='19' y2='12'></line>
              </svg>
            </button>
            <div className='c-new-todo__input'>
              <input
                value={newTodo?.title}
                onInput={(e: FormEvent) => {
                  setNewTodo((oldTodo: Todo) => {
                    const inputElement = e.target as HTMLInputElement;
                    oldTodo.title = inputElement.value;
                    return { ...oldTodo };
                  });
                }}
                className='c-new-todo__text-input'
                type='text'
                placeholder='Enter new task here.'
                name=''
                id=''
              />
              <div>
                <select
                  value={newTodo?.category}
                  className='c-new-todo__subject'
                  name='category'
                  id='category'
                  onChange={(e: FormEvent) => {
                    setNewTodo((oldTodo: Todo) => {
                      const inputElement = e.target as HTMLSelectElement;
                      oldTodo.category =
                        inputElement.options[
                          inputElement.options.selectedIndex
                        ].value;
                      return { ...oldTodo };
                    });
                  }}
                >
                  <option disabled value='default'>
                    Pick a category
                  </option>
                  <option value='hobby'>Hobby</option>
                  <option value='school'>School</option>
                  <option value='work'>Work</option>
                </select>
              </div>
            </div>
          </div>

          {todos.map((t) => (
            <TodoComponent
              key={t.id}
              todo={t}
              onTodoChange={(e: ChangeEvent) => {
                const target = e.target as HTMLInputElement;
                setTodos((oldTodos: Todo[]) => {
                  oldTodos.map((currentTodo) => {
                    if (currentTodo.id === t.id)
                      currentTodo.finished = target.checked;
                    return currentTodo;
                  });
                  return [...oldTodos];
                });
                t.finished = target.checked;
              }}
            />
          ))}
        </Container>
      </Row>
      <AppFooter />
    </main>
  );
};

export default Todos;
