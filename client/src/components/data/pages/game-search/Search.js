import React, { useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import ChessWebAPI from "chess-web-api";

import RangeSlider from "react-bootstrap-range-slider";
import "./Search.css";
import Game from "./Game";

function Search({ username }) {
  const [games, setGames] = useState();

  const d = new Date();
  //filters
  const [isRated, setIsRated] = useState("Rated or unrated");
  const handleRatedDropdown = (e) => {
    setIsRated(e.target.innerText);
  };

  const [timeClass, setTimeClass] = useState("All time classes");
  const handleTimeClassDropdown = (e) => {
    setTimeClass(e.target.innerText);
  };

  const [year, setYear] = useState(d.getFullYear());
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const [month, setMonth] = useState(d.getMonth());
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  useEffect(() => {
    const chessAPI = new ChessWebAPI();

    chessAPI.getPlayerCompleteMonthlyArchives(username, year, month).then(
      (res) => {
        setGames(res.body.games);
      },
      (err) => {
        setGames([]);
        console.error(err);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month, isRated, timeClass]);

  const renderGameData = () => {
    if (year === d.getFullYear() && month > d.getMonth())
      return <h1 className="error">Cannot get data from the future.</h1>;
    else if (games !== undefined) {
      if (games.length === 0) {
        return <h1 className="error">No data available.</h1>;
      } else
        return games.map((game, index) => {
          if (
            (isRated === "Rated or unrated" ||
              (isRated === "Rated" && game.rated === true) ||
              (isRated === "Unrated" && game.rated === false)) &&
            (timeClass === "All time classes" ||
              timeClass.toLowerCase() === game.time_class)
          ) {
            return (
              <div key={index} className="card-container">
                <Game username={username} data={game} />
              </div>
            );
          } else return "";
        });
    }
  };

  return (
    <div className="section-container" id="game-search">
      <div className="game-filters-container">
        <div className="rated-filter filter">
          <DropdownButton id="dropdown-basic-button" title={isRated}>
            <Dropdown.Item onClick={handleRatedDropdown}>
              Rated or Unrated
            </Dropdown.Item>
            <Dropdown.Item onClick={handleRatedDropdown}>Rated</Dropdown.Item>
            <Dropdown.Item onClick={handleRatedDropdown}>Unrated</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="time-class-filter filter">
          <DropdownButton id="dropdown-basic-button" title={timeClass}>
            <Dropdown.Item onClick={handleTimeClassDropdown}>
              All time classes
            </Dropdown.Item>
            <Dropdown.Item onClick={handleTimeClassDropdown}>
              Rapid
            </Dropdown.Item>
            <Dropdown.Item onClick={handleTimeClassDropdown}>
              Blitz
            </Dropdown.Item>
            <Dropdown.Item onClick={handleTimeClassDropdown}>
              Bullet
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="month-slider filter slider">
          <span className="slider-label">Month</span>
          <RangeSlider
            value={month}
            onChange={handleMonth}
            min={1}
            max={12}
            variant="dark"
          />
        </div>

        <div className="year-slider filter slider">
          <span className="slider-label">Year</span>
          <RangeSlider
            value={year}
            onChange={handleYear}
            min={2010}
            max={d.getFullYear()}
            variant="dark"
          />
        </div>
        <div className="search-by-name"></div>
      </div>
      <div
        className={
          (year === d.getFullYear() && month > d.getMonth()) ||
          (games && games.length === 0)
            ? `game-table-container-error`
            : "game-table-container"
        }
      >
        {renderGameData()}
      </div>
    </div>
  );
}

export default Search;
