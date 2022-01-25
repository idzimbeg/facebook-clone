import React, { useState, useCallback, useEffect } from "react";
import classes from "./Quotes.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

function App() {
  const [responseData, setResponseData] = useState("");
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const toggle = () => {
    setLike(like + (isLike?-1:1));
      setIsLike(!isLike);
  }

  const fetchData = useCallback(async () => {
    const URL = "https://quotes15.p.rapidapi.com/quotes/random/";
    try {
      const response = await fetch(URL, {
        headers: {
          "x-rapidapi-host": "quotes15.p.rapidapi.com",
          "x-rapidapi-key":
            "670625423dmsh38b6d653df87253p14285ejsncf31b895139b",
        },
        params: {
          language_code: "en",
        },
      });
      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();

      setResponseData(data);
    } catch (error) {
      console.log("error");
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <div className={classes.quotes} onLoadedData={fetchData}>
      {responseData && (
        <div>
          <small className={classes.quotesTopInfo}>
            {responseData &&
              responseData.originator &&
              responseData.originator.name}
          </small>
          <p className={classes.quotesBottom}>
            {responseData && responseData.content}
          </p>
        </div>
      )}
      <div className={classes.quotesOptions}>
        <div className={classes.quotesOption} onClick={toggle}>
          <FaRegThumbsUp />
          <p>Like | {like}</p>
        </div>
        <div className={classes.quotesOption}>
          <FaRegCommentAlt />
          <p>Comment</p>
        </div>

        <div className={classes.quotesOption}>
          <FiShare />
          <p>Share</p>
        </div>

        <div className={classes.quotesOption}>
          <BsPersonCircle />
        </div>
      </div>
    </div>
  );
}
export default App;
