import { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CourseCard = ({ course }) => {
  const { curreny, calculateRatings } = useContext(AppContext);

  const screenTo = (x, y) => {
   window.scrollTo(x, y);
 };

  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => screenTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
    >
      <img className="w-full" src={course.courseThumbnail} alt="" />
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">GreatStack</p>
        <div className="flex items-center space-x-2">
          <p>{calculateRatings(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(calculateRatings(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt=""
                className="w-3.5 h-3.5"
              />
            ))}
          </div>
          <p className="text-gray-500">{course.courseRatings.length}</p>
        </div>
        <p className="text-base font-semibold text-gray-800">
          {curreny}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

CourseCard.propTypes = {
   course: PropTypes.shape({
     _id: PropTypes.string.isRequired,  // Hozzáadtam a _id validálást
     courseThumbnail: PropTypes.string.isRequired,
     courseTitle: PropTypes.string.isRequired,
     educator: PropTypes.shape({
       name: PropTypes.string.isRequired,
     }).isRequired,
     coursePrice: PropTypes.number.isRequired,
     discount: PropTypes.number.isRequired,
     courseRatings: PropTypes.array.isRequired,
   }).isRequired,
 };

export default CourseCard;
