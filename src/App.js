import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${text}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [text]);
  return (
    <div className="App">
      <h1>Abhishek Tiwai</h1>
      <button onClick={() => setText("posts")}>POSTS</button>
      <button onClick={() => setText("comments")}>COMMENTS</button>
      <button onClick={() => setText("users")}>USERS</button>
      <button onClick={() => setText("albums")}>ALBUMS</button>
      <button onClick={() => setText("todos")}>TODOS</button>
      <h3>{text}</h3>
      {items.map((item, index) => {
        return <h5 key={index}>{JSON.stringify(item)}</h5>;
      })}
    </div>
  );
}
