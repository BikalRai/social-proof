/* eslint-disable react/prop-types */
import Star from '../assets/images/icon-star.svg';

const Rating = (props) => {
  return (
    <div className="rating">
      <p className="rating__stars">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
      </p>
      <p className="rating__area">Rated 5 stars in {props.name}</p>
    </div>
  );
};

export default Rating;
