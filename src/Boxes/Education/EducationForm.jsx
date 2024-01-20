import { useState } from "react";
import propTypes from 'prop-types';
import CreateInput from "../General Functions/CreateInput";

export default function EducationList({ allEducation, setAllEducation }) {
    const [formVisible, setFormVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    // const handleDelete = (index) => {
    //     if (allEducation) {
    //         const newEducationList = allEducation.filter((_, idx) => idx !== index);
    //         setAllEducation(newEducationList);
    //     }
    // };
    // alternate position for the delete button

    const handleEdit = (index) => {
        setFormVisible(true);
        setEditingIndex(index);
    }

    const displayItems = () => {
        if (allEducation) {
            return allEducation.map((item, index) => (
                <div key={index} className="education-item">
                    {item.school} - {item.degree}
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    {/* <button onClick={() => handleDelete(index)}>X</button> */}
                    {/* alternate position for button */}
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
            {
                formVisible && <EducationForm setFormVisible={setFormVisible}
                    setList={setAllEducation}
                    items={allEducation}
                    preFilled={editingIndex !== null ? allEducation[editingIndex] : null}
                    isAdding={editingIndex === null} // True when opening reg, false when editing
                    setEditingIndex={setEditingIndex}
                />
            }
        </div>
    );
}

function EducationForm({ setFormVisible, setList, items, preFilled = null, isAdding, setEditingIndex }) {
    useState(preFilled ? preFilled : '');

    const [school, setSchool] = useState(!isAdding || preFilled ? preFilled.school : '');
    const [degree, setDegree] = useState(!isAdding || preFilled ? preFilled.degree : '');
    const [startDate, setStartDate] = useState(!isAdding || preFilled ? preFilled.startDate : '');
    const [endDate, setEndDate] = useState(!isAdding || preFilled ? preFilled.endDate : '');
    const [location, setLocation] = useState(!isAdding || preFilled ? preFilled.location : '');

    const resetForm = () => {
        setEditingIndex(null)
        setFormVisible(false)
    }

    const handleDelete = () => {
        const newUpdatedItems = items.filter((item, idx) => idx !== items.indexOf(preFilled));
        setList(newUpdatedItems);
        resetForm();
    }

    const handleSubmit = () => {
        const newItem = { school, degree, startDate, endDate, location };
        if (preFilled !== null) {
            const updatedItems = items.map((item, idx) => idx === items.indexOf(preFilled) ? newItem : item);
            setList(updatedItems);
        } else {
            setList([...items, newItem]);
        }
        resetForm();
    }

    return (
        <div id="education-form">
            <CreateInput field={'School'} value={school} settingFunction={setSchool} />
            <CreateInput field={'Degree'} value={degree} settingFunction={setDegree} />
            <CreateInput field={'Start Date'} value={startDate} settingFunction={setStartDate} />
            <CreateInput field={'End Date'} value={endDate} settingFunction={setEndDate} />
            <CreateInput field={'Location'} value={location} settingFunction={setLocation} optional />

            {
                preFilled && !isAdding ?
                    <button onClick={handleDelete}>Delete</button>
                    : null
            }
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={resetForm}>Cancel</button>
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
    items: propTypes.array.isRequired,
    preFilled: propTypes.any,
    isAdding: propTypes.bool,
    setEditingIndex: propTypes.func
};
