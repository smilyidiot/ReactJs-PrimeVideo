// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

// {
//     id: '61227099e13958e58d31e74c',
//     thumbnailUrl:
//       'https://assets.ccbp.in/frontend/react-js/the-tomorrow-war-img.png',
//     videoUrl: 'https://www.youtube.com/watch?v=QPistcpGB8o',
//     categoryId: 'ACTION',
//   },

const MoviesSlider = props => {
  const {details} = props
  console.log(details)

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {details.map(eachItem => (
          <MovieItem key={eachItem.id} content={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
