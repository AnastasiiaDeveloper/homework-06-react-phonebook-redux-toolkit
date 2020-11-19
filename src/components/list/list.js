import React, { useState, useEffect, useCallback } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "./../../toolkitRedux/toolkitReducer";
import "./list.css";

const List = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const con = useSelector((state) => state.toolkit.contacts.items);
  const filter = useSelector((state) => state.toolkit.contacts.filter);
  const removeI = useCallback((id) => {
    dispatch(removeContact(id));
  }, []);
  const deleteI = (id) => {
    removeI(id);
  };
  useEffect(() => {
    setItems(con);
  }, [con]);
  const filterSearch = (arrayTodo) => {
    if (filter === "") {
      return arrayTodo;
    } else {
      return arrayTodo.filter((item) => {
        return item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      });
    }
  };
  const datarr = filterSearch(items).map(({ id, name, num }) => {
    return (
      <CSSTransition key={id} timeout={500} classNames="item">
        <ListGroup.Item className="li">
          <p>{name}</p> <p> {num}</p>
          <Button
            className="remove-btn"
            variant="danger"
            size="sm"
            onClick={() => deleteI(id)}
          >
            &times;
          </Button>
        </ListGroup.Item>
      </CSSTransition>
    );
  });
  if (items.length === 0) {
    return <div style={{ marginTop: "20px" }}>записей не найдено</div>;
  }
  return (
    <Container style={{ marginTop: "2rem" }}>
      <ListGroup style={{ marginBottom: "1rem" }}>
        <TransitionGroup className="todo-list">{datarr}</TransitionGroup>
      </ListGroup>
    </Container>
  );
};
export default List;
