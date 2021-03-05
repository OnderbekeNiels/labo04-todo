// Framkework imports
import React, { useState } from "react";

// Third library packages

// Custom / own code
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import Todo from "../components/Todo";
import Row from "../components/Row";
import Container from "../components/Container";


const Todos = () => {
  const [placeHolderTodos] = useState([{id: 1}, {id:2}]);
  return (
    <main>
      <AppHeader />
      <Row>
          <Container>
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
