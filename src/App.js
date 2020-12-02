import logo from './logo.svg';
import './App.css';
import Item from "./components/Item";
import {Button, ListGroup, Input} from "reactstrap";
import {useState, UseEffect} from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  function Add() {
    setItems(items.concat(inputText));
  }
  return (
    <div className="App">
          <Input onChange={e => setInputText(e.target.value)}/>
          <ListGroup>
          {items.map((item, index) => (<Item key={index} item={item} />))}
        </ListGroup>
        <Button onClick={Add}>Add</Button>
    </div>
  );
}

export default App;
