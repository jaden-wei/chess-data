import React from "react";
import { Card } from "react-bootstrap";

import "./TimeClass.css";

function GameData({ name, data }) {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getImageURL = () => {
    if (name === "rapid")
      return "https://lh3.googleusercontent.com/proxy/eMSYRUpi1focKMcqGV3jpson-jpezP6_Ej0lrOFhZgIhavG1g-ZRioGBOvGBMdL-7p7zT8Pkl68-SxkTTzZG1Aqh73yjxYA";
    if (name === "blitz")
      return "https://lh3.googleusercontent.com/proxy/PZvsuhZ3VbaPakCeCq3SLRD2yGxfeYpzjScrZRx6DPj-IfjOGcIEGzMBdAi6TFsgEM-5YEnQZF748JIcKVvr_GpGSaUkMIdXG8F4hw4mT2Z-";
    if (name === "bullet")
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAb1BMVEX///8AAAAEBAQsLCw+Pj4aGhr7+/sICAjx8fHDw8Ph4eEUFBQwMDDJycmFhYXT09Pr6+tGRkbb29uzs7OdnZ0mJiaTk5NcXFytra1ycnKlpaViYmLBwcFWVlZMTEw6Ojp+fn52dnaXl5dqamqLi4uIOfH1AAADGElEQVR4nO3c63KiQBAFYBjACwJyU9SISsz7P+OKq86II4Kyge49389U5dinEDQwE8MAAAAAAAAAAAAAAAAAAAAAAAAAAACAwYsjYZb2c/kz81d1VMS65lnEi+gCUWQYRQZiPHMWlp0Vy5U/IV1EtcgPScihyJm1Tpocmr7HbMb+fnlg+h6xKRGl9cel7wFbmK1dHkVOdlMmRUwzmj8toi9Uf2Z15fpao0noxnN/mqTBOo+sWV2VPB5wkaqJvznk3ljfRBxG2igZqcb/o8kfXr32teLN0ROaKpavi5KRanznM2s1OPqjaWA/llk/HJTBFylNVl9Opcm+eikmUaTkH+8vAbNtNUpGqvGdzVqr1YVllOTq6S/SSpSMVOO7GrVeqyInYaC+xZb3UTJSje9m0FfaFjkdlo0nmwR3UTJSje9kzpfaFzlJZJWDGiUj1fiPZ2zkrSKGsVpcm2yUKBmpxn8+ZBNvFjFGP5fTXty+RdIsYhhufrkKXz9PqBY5vb/+fq7YtygZqcZ/OGFDnxQxwki9CBMuYhhB+dvjWIm6DzR/WbLdTn1/HsduGE50X9GfSspzPhpMkQpR3qPz9tEu/zoWwTJdbf04fNJvXn7SbwcwdHNjx4uydZAm/t2dIXdxOd/7nu8dYmFnh83ljmrZZEu0yJUTFSvXiGfmjniRMyf7MsWEQZGzlEsRm0sRMWJSxPS5FFlyKZJxKWJzKWJxKeJwKTJGkYFh89Zic7Kzufyy+UBk8xWFy5dGNl/j2fxhxeVPXTY3H3IOt4NK1G/QXZG9ZVo1ZVLk8bECTZoHPTTdHr0RJx+G0qY8niZN3NbS9T3Jh9QlHJQpy4P6HuUjPwaPIpWFZ1Q9LAUkyqksk+97nnfZ1Q0lfQ/0pkKzgJkgT7uknBwR6Bf5U5Pp9/X0PVZbu+cbYSjJNScHvSKzgsNmMbHb1C8S7HvARkSUMthQ6THY4rrIA7qbjs9LTO2s+F75rVbOyoS+yrWZ9n8octtUQv2fV7i7804MYSsbR0kWAQAAAAAAAAAAAAAAAAAAAAAAAAAAgMH7A8XkRjcKwQ71AAAAAElFTkSuQmCC";
  };

  if (data) {
    return (
      <Card className="general-data-card">
        <Card.Img
          variant="top"
          src={getImageURL()}
        />
        <Card.Body>
          <Card.Title>{capitalize(name)}</Card.Title>
          <Card.Text>{`Current rating: ${data.last.rating}`}</Card.Text>
          <Card.Text>{`Highest rating: ${data.best.rating}`}</Card.Text>
          <Card.Text>
            {`Record: ${data.record.win} wins, ${data.record.loss} losses, ${data.record.draw} draws`}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else return <div className="section-container" id={name}></div>;
}

export default GameData;
