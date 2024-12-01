import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCard from '../../components/card/Card'; 


const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  const currentUserID = localStorage.getItem('id')

  useEffect(() => {
    fetch(`https://673423afa042ab85d1190055.mockapi.io/api/v1/services/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setService(data);
      })
      .catch((error) => {
        console.error('Error fetching the service:', error);
      });
  }, [id]);

  return (
    <>
      {!currentUserID ? (
        <div style={{textAlign: "center"}}>Вы должны войти в аккаунт.</div>
      ) : service ? (
        <MyCard 
          imgURI={service.image} 
          name={service.name} 
          desc={service.description} 
          id={service.id} 
        />
      ) : (
        <div>Услуга не найдена.</div>
      )}
    </>
  );
};

export default ServiceDetail;