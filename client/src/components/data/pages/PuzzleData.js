import React from "react";
import { Card } from "react-bootstrap";

import "./TimeClass.css";

function PuzzleData({ data }) {
  if (data) {
    return (
      <Card className="general-data-card">
        <Card.Img
          variant="top"
          src="https://lh3.googleusercontent.com/proxy/0VJ263RcX5VyaYWhY4kJyefSWovOVGz6VdCjpU7-yh0cdvwWtVp4-xLc87ay59PrmgtB1i9gwwPtHiANEOM7KDcbeCyudIyuMO1deV8d"
        />
        <Card.Body>
          <Card.Title>Puzzles</Card.Title>
          <Card.Text>{`Best puzzle rush score: ${data.puzzle_rush.best.score}`}</Card.Text>
          <Card.Text>{`Highest tactics rating: ${data.tactics.highest.rating}`}</Card.Text>
        </Card.Body>
      </Card>
    );
  } else return <div className="section-container"></div>;
}

export default PuzzleData;
