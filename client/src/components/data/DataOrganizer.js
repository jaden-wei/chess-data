/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ChessWebAPI from "chess-web-api";
import Data from "./pages/TimeClass.js";
import Search from "./pages/game-search/Search";
import PuzzleData from "./pages/PuzzleData";
import { CardDeck } from "react-bootstrap";
import { Link } from "react-scroll";
import "./DataOrganizer.css";
import { IoArrowDown } from "react-icons/io5";

function DataOrganizer({ username }) {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const chessAPI = new ChessWebAPI();

    chessAPI.getPlayerStats(username).then(
      (res) => {
        setUserData(res.body);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return (
    <div className="data">
      <div className="section-container">
        <div className="general-data-container">
          <CardDeck>
            <Data name="rapid" data={userData ? userData.chess_rapid : null} />
            <Data name="blitz" data={userData ? userData.chess_blitz : null} />
            <Data
              name="bullet"
              data={userData ? userData.chess_bullet : null}
            />
            <PuzzleData name="puzzles" data={userData ? userData : null} />
          </CardDeck>
          <div className="link-container">
            <Link
              className="link"
              activeClass="active"
              to="game-search"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Search for games
            </Link>
            <span>
              <IoArrowDown />
            </span>
          </div>
        </div>
      </div>
      <Search username={username} />
    </div>
  );
}

export default DataOrganizer;
