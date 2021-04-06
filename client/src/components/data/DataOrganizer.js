/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ChessWebAPI from "chess-web-api";
import Navbar from "../Navbar";
import Data from './pages/Data.js'

function DataOrganizer({ username }) {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const chessAPI = new ChessWebAPI();

    chessAPI.getPlayerStats(username).then(
      (res) => {
        setUserData(res.body);
        console.log(userData);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return (
    <div className="data">
      <Navbar />
      <Data name="rapid" data={userData ? userData.chess_rapid : null}/>
      <Data name="blitz" data={userData ? userData.chess_blitz : null}/>
      <Data name="bullet" data={userData ? userData.chess_bullet : null}/>
      <div className="section-container" id="puzzles"></div>
    </div>
  );
}

export default DataOrganizer;
