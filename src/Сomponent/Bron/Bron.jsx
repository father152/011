import { NavLink } from "react-router-dom";
import "./Bron.css";
import image from "./image 1.png";
import star from './звезда.png'




const Bron = () => {
  return (
    <div className="bron">
      <h2>Забронювати будиночок</h2>

      <div class="dropdown">
        <button class="dropbtn">Оберіть місцерозташування</button>
        <div class="dropdown-content">
          <NavLink to="/bacota">Бакота</NavLink>
          <NavLink to="/karpatu">Карпати</NavLink>
          <NavLink to="/kiev">Київ</NavLink>
          <NavLink to="/odessa">Одеська область</NavLink>
        </div>
      </div>
      <div className="card">
        <div className="foto">
          <img src={image} alt=""></img>
        </div>
<div className='card-right'>
        <h4>Незвідана Бакота </h4>
        <hr></hr>
        <p2>У Хмельницькій області розташований загублений край -
        Бакота. Мальовничий каньйон з давньою історією захоплює
        своїми просторами та незвичною атмосферою. Бджільництво,
        свіжий мед із польових трав, дотик до природи.</p2>
</div>
      <div className="star">
          <img src={star} alt=""></img>
        </div>
      
        </div>
        <div className="card">
        <div className="foto">
          <img src={image} alt=""></img>
        </div>
<div className='card-right'>
        <h4>Незвідана Бакота </h4>
        <hr></hr>
        <p2>У Хмельницькій області розташований загублений край -
        Бакота. Мальовничий каньйон з давньою історією захоплює
        своїми просторами та незвичною атмосферою. Бджільництво,
        свіжий мед із польових трав, дотик до природи.</p2>
</div>
      <div className="star">
          <img src={star} alt=""></img>
        </div>
      
        </div>
        <div className="card">
        <div className="foto">
          <img src={image} alt=""></img>
        </div>
<div className='card-right'>
        <h4>Незвідана Бакота </h4>
        <hr></hr>
        <p2>У Хмельницькій області розташований загублений край -
        Бакота. Мальовничий каньйон з давньою історією захоплює
        своїми просторами та незвичною атмосферою. Бджільництво,
        свіжий мед із польових трав, дотик до природи.</p2>
</div>
      <div className="star">
          <img src={star} alt=""></img>
        </div>
      
        </div>
        <div className="card">
        <div className="foto">
          <img src={image} alt=""></img>
        </div>
<div className='card-right'>
        <h4>Незвідана Бакота </h4>
        <hr></hr>
        <p2>У Хмельницькій області розташований загублений край -
        Бакота. Мальовничий каньйон з давньою історією захоплює
        своїми просторами та незвичною атмосферою. Бджільництво,
        свіжий мед із польових трав, дотик до природи.</p2>
</div>
      <div className="star">
          <img src={star} alt=""></img>
        </div>
      
        </div>
    </div>
  );
};
export { Bron };
