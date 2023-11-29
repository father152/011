import { Link } from "react-router-dom"
import { Arrow } from "./Arrow"

const Kiev = () => {
    return (
        <div>
        <h5>Kiev</h5>
        <Arrow />

        <button className='back'>
          <Link to="/bron">На попередню сторінку</Link>
        </button>
        </div>
    )
}
export {Kiev}