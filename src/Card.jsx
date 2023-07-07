import "./Card.css";

function Card() {
  return (
    <div className="card">
      <span className="title">Sidebar Block</span>
      <span className="price">$250/mo</span>
      <button className="addToCart">add to cart</button>
      <ul className="offerings">
        <li>439,000</li>
        <li>180 x 150</li>
        <li> Middle Right</li>
      </ul>
    </div>
  );
}

export default Card;
