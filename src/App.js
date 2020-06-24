import React from 'react';
import PropTypes from "prop-types";

function Food({ name, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>{rating}/5</h3>
    </div>
  );
}

const foodILIke = [
  {
    id: 1,
    name: "pizza",
    rating: 5.0
  },
  {
    id: 2,
    name: "chicken",
    rating: 5.0
  },
  {
    id: 3,
    name: "ramen",
    rating: 4.5
  }
]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      {foodILIke.map(dish => (
        <Food name={dish.name} key={dish.id} rating={dish.rating} />
      ))}
    </div>

  );
}

export default App;
