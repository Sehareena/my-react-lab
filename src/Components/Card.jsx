import React from 'react';
import './style/card.css';  

function Card({ title, items }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            <span className="icon">&#10004;</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="card-footer">
        <a href="#">See more</a>
      </div>
    </div>
  );
}

export default Card;
