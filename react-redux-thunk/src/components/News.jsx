import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchNewsData from "../redux/newsAction";

function News() {
  const dispatch = useDispatch();
  const { news, isLoading, error } = useSelector((state) => state.news);
  console.log(news);
  useEffect(() => {
    dispatch(fetchNewsData());
  }, [dispatch]);

  console.log(news);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <div>{item.title}</div>
            <div>{item.author}</div>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  );

  // return (
  //   <>
  //     <div>News</div>
  //     {isLoading && <div>Loading...</div>}
  //     {error && <div>{error}</div>}
  //     {news && (
  //       <ul>
  //         {news.map((article, index) => {
  //           return (
  //             <li key={index}>
  //               <a href={article.url} target="_blank" rel="noreferrer">
  //                 <h2>{article.title}</h2>
  //               </a>
  //               <p>{article.description}</p>
  //               <hr />
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     )}
  //   </>
  // );
}

export default News;
