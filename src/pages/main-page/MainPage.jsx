import React, { useState, useEffect } from "react";
import { Pagination } from "@consta/uikit/Pagination";
import { Loader } from "@consta/uikit/Loader";
import { useDispatch, useSelector } from 'react-redux';

import { set } from './NewsSlice'

import "./MainPage.css";

const NEWS_URL = "https://673423afa042ab85d1190055.mockapi.io/api/v1/main";


const MainPage = () => {
    const dispatch = useDispatch();
    const newsFromState = useSelector((state) => state.news.value);

    const [allNews, setAllNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);

    const newsPerPage = 15;

    useEffect(() => {
        if (!newsFromState.length) {
          const fetchNews = async () => {
              setIsLoading(true);
              try {
                const response = await fetch(NEWS_URL);
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAllNews(data);
                dispatch(set(data));
              } catch (error) {
                setError(error.message);
              } finally {
                setIsLoading(false);
              }
          };

          fetchNews();
        } else {
          setIsLoading(false);
          setAllNews(newsFromState);
        }
    }, [dispatch, newsFromState]);
    
      const startIndex = (currentPage - 1) * newsPerPage;
      const currentCards = allNews.slice(startIndex, startIndex + newsPerPage);
    
      if (isLoading) {
        return (
          <div className="loader-container">
            <Loader size="m" />
          </div>
        );
      }
    
      if (error) {
        return <div style={{textAlign: "center"}}>Error: {error}</div>;
      }

    return (
        <div>
        <main className="content">
            {
                currentCards.map((card) => (
                    <div className="message-box">
                        <p><b>{card.name}</b></p>
                        <br/>
                        <p>{card.description}</p>
                        <div className="message-time">{
                            new Date(card.createdAt).toUTCString()
                        }</div>
                    </div>
                ))
            }
        </main>
        <Pagination
            totalPages={Math.ceil(allNews.length / newsPerPage)}
            currentPage={currentPage}
            onChange={({ value }) => setCurrentPage(value)}
        />
        </div>

    );
};

export default MainPage;