import React from "react";
import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
  const { meals, loading, selectMeal, addToFavorites } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h2>Loading...</h2>
      </section>
    );
  }

  if (meals.length < 1) {
    return (
      <section className="section">
        <h2>No meals matched your search term. Please try again...</h2>
      </section>
    );
  }

  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const { idMeal: id, strMeal: title, strMealThumb: image } = singleMeal;
        return (
          <article key={id} className="single-meal">
            <img
              src={image}
              alt="singleMeal"
              className="img"
              onClick={() => selectMeal(id)}
            />
            <footer>
              <h5> {title} </h5>
              <button onClick={() => addToFavorites(id)} className="like-btn">
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
