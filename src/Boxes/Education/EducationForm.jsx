import { useState } from "react";
import propTypes from 'prop-types';
import CreateInput from "../General Functions/CreateInput";

export default function EducationList() {
    const [formVisible, setFormVisible] = useState(false);

    return (
        <div id="education-list">
            <button
                id={'new-education-button'}
                className={''}
                onClick={() => setFormVisible(!formVisible)}
            >
                +
            </button>
            {formVisible && <EducationForm setFormVisible={setFormVisible} />}
        </div>
    );
}

function EducationForm({ setFormVisible, setTotal }) {
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
                setTotal({
                    school,
                    degree,
                    startDate,
                    endDate,
                    location
                });
                setFormVisible(false);
            }}>Submit</button>
            <button onClick={() => setFormVisible(false)}>
                Cancel
            </button>
        </div>
    );
}

EducationForm.propTypes = {
    setTotal: propTypes.func.isRequired,
    setFormVisible: propTypes.func.isRequired
};
