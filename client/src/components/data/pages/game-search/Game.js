import React from "react";
import { Card } from "react-bootstrap";

import "./Game.css";

function Game({ username, data }) {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const renderData = () => {
    if (data.black.username === username) {
      return (
        <Card.Body>
          <Card.Title>Result: {capitalize(data.black.result)}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Vs. {data.white.username}
          </Card.Subtitle>
          <Card.Text>Rated: {data.rated === true ? "Yes" : "No"}</Card.Text>
          <Card.Text>Time Control: {capitalize(data.time_class)}</Card.Text>
          <Card.Link href={data.url}>View Game</Card.Link>
        </Card.Body>
      );
    } else {
      return (
        <Card.Body>
          <Card.Title>Result: {capitalize(data.white.result)}</Card.Title>
          <Card.Text>Vs. {data.black.username}</Card.Text>
          <Card.Text>Rated: {data.rated === true ? "Yes" : "No"}</Card.Text>
          <Card.Text>Time Control: {capitalize(data.time_class)}</Card.Text>
          <Card.Link href={data.url}>View Game</Card.Link>
        </Card.Body>
      );
    }
  };
  return <Card>{renderData()}</Card>;
}

export default Game;
