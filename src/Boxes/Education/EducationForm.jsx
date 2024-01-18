import { useState } from "react";
import propTypes from 'prop-types';
import CreateInput from "../General Functions/CreateInput";

export default function EducationList({ allEducation, setAllEducation}) {
    const [formVisible, setFormVisible] = useState(false);

    const displayItems = () => {
        if (allEducation) {
            return allEducation.map((item, index) => (
                <div key={index} className="education-item">
                    {item.school} - {item.degree}
                </div>
            ));
        }
        return
    };

    return (
        <div id="education-list">
            {!formVisible && displayItems()}
            {!formVisible && (
                <button id={'new-education-button'} onClick={() => setFormVisible(true)} >+</button>
            )}
            {formVisible && <EducationForm setFormVisible={setFormVisible} setList={setAllEducation} items={allEducation} />}
        </div>
    );
}

function EducationForm({ setFormVisible, setList, items }) {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');

    return (
        <div id="education-form">
            <CreateInput field={'School'} settingFunction={setSchool} />
            <CreateInput field={'Degree'} settingFunction={setDegree} />
            <CreateInput field={'Start Date'} settingFunction={setStartDate} />
            <CreateInput field={'End Date'} settingFunction={setEndDate} />
            <CreateInput field={'Location'} settingFunction={setLocation} optional />
            <button onClick={() => {
                setList([...items, { school, degree, startDate, endDate, location }]);
                setFormVisible(false);
            }}>Submit</button>
            <button onClick={() => setFormVisible(false)}>
                Cancel
            </button>
        </div>
    );
}

EducationList.propTypes = {
    allEducation: propTypes.array,
    setAllEducation: propTypes.func
};

EducationForm.propTypes = {
    setFormVisible: propTypes.func.isRequired,
    setList: propTypes.func.isRequired,
    items: propTypes.array.isRequired
};
