import { Link } from "react-router-dom";
import image1 from "./к1.png";
import image2 from "./к2.png";
import image3 from "./к3.png";
import image4 from "./к4.png";
import './Karpatu.css'
import { Examination } from "./Examination";

const Karpatu = () => {
  return (
    <div className="bron-karpatu">
      <h2>Бронювання будиночка в Карпатах</h2>
      <button className="back">
        <Link to="/bron">На попередню сторінку</Link>
      </button>
      <div className="container-karpatu">
        <div className="left-foto">
          <img src={image1} alt=""></img>
          <img src={image2} alt=""></img>
        </div>
        <div className="right-foto">
          <p>
            Затишні дерев’яні будиночки, які заховались на окраїні лісу,
            зустрічатимуть Вас чудовим краєвидом на ранкові полонини. <br></br>{" "}
            <br></br> Ви можете обрати кількість кімнат та місце, яке буде
            ідеальним для Вас. Територія, на якій базуються будиночки, підійде
            як і для великих компаній, яким потрібно бути поряд у декількох
            будинках, так і для пар, які хочуть бути на одинці.
          </p>
          <div className="right-foto1">
            <img src={image3} alt=""></img>
            <img src={image4} alt=""></img>
          </div>
        </div>
      </div>
<h5>Наявність місць</h5>
      <div className="karpatu-forms">
        <div className="forms">
          <p>Коли б Ви хотіли зупинись в помешканні Полонини Карпат?</p>
          <div className="form-date">
            <label for="start">Дата заїзду:</label>
            <input
              type="date"
              id="start"
              name="trip-start"
              min="2023-01-01"
              max="2024-12-31"
            ></input>
            <label for="start">Дата відїзду:</label>
            <input
              type="date"
              id="start"
              name="trip-start"
              min="2023-01-01"
              max="2024-12-31"
            ></input>
          </div>
          <div className="form-people">
            <label for="tentacles">Номери:</label>
            <input
              type="number"
              id="tentacles"
              name="tentacles"
              min="1"
              max="10"
            ></input>
            <label for="tentacles">Дорослі:</label>
            <input
              type="number"
              id="tentacles"
              name="tentacles"
              min="1"
              max="10"
            ></input>
            <label for="tentacles">Діти:</label>
            <input
              type="number"
              id="tentacles"
              name="tentacles"
              min="1"
              max="10"
            ></input>
          </div>
        </div>

        <div className="c">
          <button className="examination">
            <Link to="/examination">
              Перевірити наявність <br></br>вільних місць
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export { Karpatu };


