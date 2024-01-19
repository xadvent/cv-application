import propTypes from 'prop-types';
import './educationDocument.css';

export default function EducationDocument({ info }) {
    info = info.map((thing, index) => showInformation(thing, index));

    function showInformation(item, index) {
        return (
            <div key={index} className="education-item" >
                <div className="left-education">
                    <div className="date">{item.startDate + ' - ' + item.endDate}</div>
                    <div className="location">{item.location ? item.location : ''}</div>
                </div>
                <div className="right-education">
                    <div className="school-name">{item.school}</div>
                    <div className="degree">{item.degree}</div>
                </div>
            </div>
        );
    }

    return (
        <div id="education-document">
            {info.length > 0 ? <div className="banner">Education</div> : ''}
            {info}
        </div>
    );
}

EducationDocument.propTypes = {
    info: propTypes.array
}