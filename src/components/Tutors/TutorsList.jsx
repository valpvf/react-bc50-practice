import TutorItem from "./TutorItem";
import PropTypes from 'prop-types';

const TutorsList = ({ tutors }) => {
    return tutors.map(tutor => <TutorItem key={tutor.phone} {...tutor} />)
}
TutorsList.propTypes = {
    tutors: PropTypes.arrayOf(
        PropTypes.shape(
            {phone: PropTypes.string.isRequired}
        )
    )
}
export default TutorsList;