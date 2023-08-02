import React from "react";
import { useGlobalContext } from "../context";

const Favorites = () => {
  const { favorites, removeFromFavorites, selectMeal } = useGlobalContext();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal: id, strMealThumb: image } = item;
            return (
              <div key={id} className="favorite-item">
                <img
                  src={image}
                  alt="Favorite"
                  onClick={() => selectMeal(id, true)}
                  className="favorites-img img"
                />
                <button
                  onClick={() => removeFromFavorites(id)}
                  className="remove-btn"
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
