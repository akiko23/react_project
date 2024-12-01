import React, { useState, useEffect } from "react";
import { Pagination } from "@consta/uikit/Pagination";
import { Loader } from "@consta/uikit/Loader";
import "./ServicePage.css";

const SERVICES_URL = "https://673423afa042ab85d1190055.mockapi.io/api/v1/services";


const ServicePage = () => {
  const [allCards, setAllCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  const cardsPerPage = 15;
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(SERVICES_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllCards(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = allCards.slice(startIndex, startIndex + cardsPerPage);

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader size="m" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <main>
        {
            currentCards.map((card) => (
                <a href={`/services/${card.id}`} className="company-card" key={card.id}>
                    <img src={card.image} alt={card.name} className="card-image" />
                    <div>
                        <h3>{card.name}</h3>
                        <p style={{marginTop: "10px"}}>{card.description}</p>
                    </div>
                </a>
            ))
        }
      </main>
      <Pagination
        totalPages={Math.ceil(allCards.length / cardsPerPage)}
        currentPage={currentPage}
        onChange={({ value }) => setCurrentPage(value)}
      />
    </div>
  );
};

export default ServicePage;