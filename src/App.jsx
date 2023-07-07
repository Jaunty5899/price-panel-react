import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="bigCard">
      <div className="title">
        <h3>Website - Sponsorship</h3>
        In the event that we do not have a full 30-days, we extrapolate based on
        data we have.
      </div>
      <div className="content">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
