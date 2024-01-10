import propTypes from 'prop-types';

export default function EducationSection({ItemArray}) {

    return (
        <div id="education-section">
            {ItemArray}
        </div>
    );
}

EducationSection.propTypes = {
    ItemArray: propTypes.array,
};

