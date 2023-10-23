import React, { useState, useEffect } from "react";
import Card from "./Card";
const API = `https://rickandmortyapi.com/api/character?page=`;

const Cards = () => {
  const [cartoon, setCartoon] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCartoon = async () => {
      try {
        const response = await fetch(API + page);
        const data = await response.json();
        setCartoon(data.results);
      } catch (error) {
        setError(error.massage);
      } finally {
        setIsLoading(false);
      }
    };
    getCartoon();
  }, [page]);

  if (error) {
    return <div>Error:{error}</div>;
  }

  const nextPage = () => {
    if (page < 42) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="card-conteiner">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        cartoon?.map((item) => <Card key={item.id} {...item} />)
      )}
      <button className="prevBtn" onClick={prevPage}>
        prevPage
      </button>
      <h1 className="page">{page}</h1>
      <button className="pageBtn" onClick={nextPage}>
        nextPage
      </button>
    </div>
  );
};

export default Cards;
