import React from "react";
import "./App.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Image from "./components/Image";
import Description from "./components/Description";
import { Card, Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
const App = () => {
  const myname="rahma";
  return (
    <div className="app">
      <NavBar />
      <h1 className="text-center">
        Hello {myname ? myname : "there"} welcome to our store
      </h1>
      {myname ?
      <div className="d-flex justify-content-center">
        <img
          id="profile-pic"
          src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
          alt="picture"
        />
      </div>:null}
      <div id="card-container">
        {" "}
        <Card style={{ width: "18rem" }}>
          <Image />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
            <Card.Text>
              <Price />
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default App;
