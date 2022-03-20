import './Card.css'
import '../helpers/data.js'
import { data } from '../helpers/data.js'

const Card = () => {
  console.log(data)
  return (
    <div className="container">
      {data.map((info, id) => {
        return (
          <div className="cards" key={id}>
            <div className="title">
              <h2>{info.title}</h2>
            </div>
            <img src={info.image} alt={info.image} />
            <div className="card over">
              <p>{info.desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
