import React, { useState } from "react";
import { faker } from '@faker-js/faker';
import { Pagination } from "@consta/uikit/Pagination";
import "./ServicePage.css";

const generateCards = (count) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    description: faker.company.catchPhrase(),
    link: faker.internet.url(),
  }));
};


const ServicePage = () => {
  const allCards = generateCards(50);
  const cardsPerPage = 15;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = allCards.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div>
      <main>
        {currentCards.map((card) => (
          <a href={card.link} className="company-card" key={card.id}>
            <h3>{card.name}</h3>
            <p>{card.description}</p>
          </a>
        ))}
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