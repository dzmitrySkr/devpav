import { Input, Button } from "antd";
import VideoComp from "./VideoComp";
import "../Styles/video.css";
import { Link } from "react-router-dom";
import { BsList, BsFillGrid3X3GapFill, BsHeart } from "react-icons/bs";
import React from "react";
import Modal from "./Modal";
import { delToken } from "../store/action/tokenAction";
import { useMainPage } from "../Hooks/useMainPage";
import { useState } from "react";


// AIzaSyCNmXdleaGFSBnvkYGgIN7lk4BqJ6EvB0E
// require('dotenv').config()

function MainPage() {
 
  let {inputValue, video, layout, modal, dispatch, serch, setInputValue,  setLayout, setModal} = useMainPage()

   return (
    <>
      <header>
        <ul>
          <Link to={"/main"}>
            <li style={{color:"white"}}>Search</li>
          </Link>
          <Link to={"/saved"} >
            <li >Favorites</li>
          </Link>
        </ul>

        <Link to="/">
          {" "}
          <div
            className="exit"
            onClick={() => {
              return dispatch(delToken()), localStorage.removeItem("token");
            }}
          >
            Exit
          </div>
        </Link>
      </header>

      <div className={video.length >= 1 ? "search_title up" : "search_title "}>
        <p>Search video</p>
        <Input.Group compact>
          <Input
            value={inputValue}
            style={{ width: "calc(100% - 1000px)" }}
            // defaultValue="shark"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(event) => event.key === "Enter" && serch(inputValue)}
          />
          <BsHeart className="heart" onClick={() => setModal(!modal)} />
          <Button type="primary" onClick={() => serch(inputValue)}>
            Submit
          </Button>
        </Input.Group>
      </div>
      <div className="icons">
        {video.length >= 1 && (
          <div
            className={layout ? "icon icon_row " : "icon icon_row activ_icon"}
            onClick={() => setLayout(false)}
          >
            {" "}
            <BsList />
          </div>
        )}
        {video.length >= 1 && (
          <div
            className={
              layout ? "icon icon_block activ_icon" : "icon icon_block"
            }
            onClick={() => setLayout(true)}
          >
            <BsFillGrid3X3GapFill />
          </div>
        )}
      </div>

      <div className={layout ? "lists lists_row" : "lists "}>
        {video.map((item) => (
          <VideoComp
            key={item.snippet.title}
            layout={layout}
            title={item.snippet.title}
            imgUrl={item.snippet.thumbnails.high.url}
            description={item.snippet.description}
          />
        ))}
      </div>

      <Modal modal={modal} setModal={setModal} />
    </>
  );
}

export default MainPage;
