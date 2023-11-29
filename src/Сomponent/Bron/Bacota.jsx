import { Link } from "react-router-dom";




const Bacota = () => {
  return (
    <div>
      <h5>BACOTA</h5>
      <button className='back'>
          <Link to="/bron">На попередню сторінку</Link>
        </button>
    </div>
  );
};
export { Bacota };
