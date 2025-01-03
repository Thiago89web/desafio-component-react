import "./style.css";
import carImg from "../../assets/car-card 1.png";

export default function CardCarro() {
  return (
    <div className="container-ct-carro">
      <h1>Venha nos visitar</h1>
      <div className="ct-carro">
        <img src={carImg} alt="Carro" />
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="ct-carro">
        <img src={carImg} alt="Carro" />
        <p>Lorem ipsum dolor</p>
      </div>
    </div>
  );
}
