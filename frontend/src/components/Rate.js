import React from "react";
import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rate = ({ rating, numReviews, color }) => {
  let markup = [];
  for (let i = 0; i < 5; i++) {
    if (i <= rating - 1) {
      //yellow
      markup.push(<FaStar key={i} style={{ color }} />);
    } else if (rating - i > 0 && rating - i < 1) {
      //half yellow
      markup.push(<FaStarHalfAlt key={i} style={{ color }} />);
    } else {
      //grey
      markup.push(<FaRegStar key={i} style={{ color }} />);
    }
  }
  return (
    <>
      {markup} {numReviews} reviews
    </>
  );
};

Rate.defaultProps = {
  color: "#F5BB00",
  // color: "#EC9F05",
};

Rate.propTypes = {
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Rate;
