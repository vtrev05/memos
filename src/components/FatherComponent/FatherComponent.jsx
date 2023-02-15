import React, {useState} from 'react'
import Movie from '../Movie/Movie'
import Review from '../Review/Review'

const FatherComponent = () => {
    const [score, setScore] = useState(0)

  return (
    <div>
         <Movie
        title="Guardianes de la Galaxia"
        poster="https://m.media-amazon.com/images/I/61-ndDQWTdL._AC_.jpg"
      />
       <input
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.valueAsNumber)}
      />

      <Review score={score} title="review de la película"/>
    </div>
  )
}

export default FatherComponent