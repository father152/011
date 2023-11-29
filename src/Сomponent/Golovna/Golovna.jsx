import "./Golovna.css";
import image from "./1.png";
import imag from "./2.png";

const Golovna = () => {
  return (
    <>
      <div className="golovna-1">
        <img className="picture" src={image} alt="" />
        <h1>HolidayTime</h1>
        <p>Автентичний відпочинок серед українського колориту!</p>
      </div>
      <div className="golovna-2">
        <img className="picture" src={imag} alt="" />
        <div className="carusel">
        <button className='pereglad'>Переглянути</button>
          <p>
            Полонини Карпат, у селі Орів посеред гір розташувався затишний
            куточок для незабутніх вражень. Справжні українські гори,
            власноручне сироваріння на полонині, водоспади та вікові дерева
            чекають на Вас.
          </p>
        </div>
      </div>
    </>
  );
};

export { Golovna };
