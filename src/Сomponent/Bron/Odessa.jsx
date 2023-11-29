import { Link } from "react-router-dom"


const Odessa = () => {
    return (
        <div>
        <h5>Odessa</h5>
        <button className='back'>
          <Link to="/bron">На попередню сторінку</Link>
        </button>
        </div>
    )
}
export {Odessa}