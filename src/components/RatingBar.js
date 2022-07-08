import classes from './RatingBar.module.css';

import star from '../images/icon-star.svg';

const RatingBar = (props) => {
  return (
    <div className={classes.ratingBar}>
      <div className={classes.stars}>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <div className={classes.review}>Rated 5 Stars in {props.business}</div>
    </div>
  )
}

export default RatingBar;