import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCard from '../../components/card/Card'; 
import { Loader } from "@consta/uikit/Loader";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const currentUserID = localStorage.getItem('id')
    if (currentUserID) {
      setIsLoading(true);
      setIsAuthenticated(true);
      fetch(`https://673423afa042ab85d1190055.mockapi.io/api/v1/services/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data !== 'Not found') {
          console.log(data);
          setService(data);          
        }
      })
      .catch((error) => {
        console.error('Error fetching the service:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader size="m" />
      </div>
    );
  }

  return (
    <>
      {!isAuthenticated ? (
        <div style={{textAlign: "center"}}>Вы должны войти в аккаунт.</div>
      ) : service ? (
        <MyCard 
          imgURI={service.image} 
          name={service.name} 
          desc={service.description} 
          id={service.id} 
        />
      ) : (
        <div style={{textAlign: "center"}}>Услуга не найдена.</div>
      )}
    </>
  );
};

export default ServiceDetail;