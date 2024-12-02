import React, { useState, useEffect } from "react";
import { Pagination } from "@consta/uikit/Pagination";
import { Loader } from "@consta/uikit/Loader";
import { useDispatch, useSelector } from 'react-redux';
import { set } from './ServicesSlice'
import "./ServicePage.css";
import { useNavigate } from "react-router-dom";

const SERVICES_URL = "https://673423afa042ab85d1190055.mockapi.io/api/v1/services";


const ServicePage = () => {
  const dispatch = useDispatch();
  const servicesFromState = useSelector((state) => state.services.value);

  const [allCards, setAllCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  const cardsPerPage = 15;
  
  useEffect(() => {
    const currentUserID = localStorage.getItem('id')
    if (currentUserID) {
      if (!servicesFromState.length) {
        const fetchData = async () => {
            setIsLoading(true);
            try {
              const response = await fetch(SERVICES_URL);
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const data = await response.json();
              setAllCards(data);
              dispatch(set(data));
            } catch (error) {
              setError(error.message);
            } finally {
              setIsLoading(false);
            }
        };
        fetchData();
      } else {
        setIsLoading(false);
        setAllCards(servicesFromState);
      }
    } else {
      setError('Вы должны войти в аккаунт.');
      setIsLoading(false);
    }

    
  }, [servicesFromState, dispatch]);

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
    return <div style={{textAlign: "center"}}>{error}</div>;
  }

  return (
    <div>
      <main>
        {
            currentCards.map((card) => (
                <div onClick={() => navigate(`/services/${card.id}`)} className="company-card" key={card.id}>
                    <img src={card.image} alt={card.name} className="card-image" />
                    <div>
                        <h3>{card.name}</h3>
                        <p style={{marginTop: "10px"}}>{card.description}</p>
                    </div>
                </div>
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