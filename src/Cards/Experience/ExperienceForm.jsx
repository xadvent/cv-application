import { useState } from "react";
import propTypes from 'prop-types';
import CreateInput from "../General Functions/CreateInput";

export default function ExperienceList({ experience, setExperience }) {
    const [formVisible, setFormVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const displayItems = () => {
        if (experience) {
            return experience.map((item, index) => (
                <div key={index} className="item-list">
                    <b style={{ fontSize: 18 + 'px' }}>{item.name}</b>
                    <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                </div>
            ));
        }
    }

    const handleEdit = (index) => {
        setFormVisible(true);
        setEditingIndex(index);
    }

    const buttonStyle = {
        marginTop: 10 + 'px',
        position: 'relative',
        left: 90 + 'px',
    };

    return (
        <div>
            {!formVisible && displayItems()}
            {!formVisible && (
                <button id={'new-experience-button'} style={buttonStyle} onClick={() => setFormVisible(true)} >+ Add New</button>
            )}
            {
                formVisible && <ExperienceForm
                    setList={setExperience}
                    items={experience}
                    preFilled={editingIndex !== null ? experience[editingIndex] : null}
                    isAdding={editingIndex == null}
                    setEditingIndex={setEditingIndex}
                    setFormVisible={setFormVisible}
                />
            }
        </div>
    );
}

function ExperienceForm({ setFormVisible, setList, items, preFilled = null, isAdding, setEditingIndex }) {
    useState(preFilled ? preFilled : '')

    const [name, setName] = useState(preFilled ? preFilled.name : '');
    const [title, setTitle] = useState(preFilled ? preFilled.title : '');
    const [startDate, setStartDate] = useState(preFilled ? preFilled.startDate : '');
    const [endDate, setEndDate] = useState(preFilled ? preFilled.endDate : '');
    const [location, setLocation] = useState(preFilled ? preFilled.location : '');
    const [description, setDescription] = useState(preFilled ? preFilled.description : '');

    const resetForm = () => {
        setEditingIndex(null);
        setFormVisible(false);
    }

    const handleDelete = () => {
        const newUpdatedItems = items.filter((_, idx) => idx !== items.indexOf(preFilled));
        setList(newUpdatedItems);
        resetForm();
    }

    const handleSubmit = () => {
        const newItem = { name, title, startDate, endDate, location };
        if (preFilled !== null) {
            const updatedItems = items.map((item, idx) => idx === items.indexOf(preFilled) ? newItem : item);
            setList(updatedItems);
        } else {
            setList([...items, newItem]);
        }
        resetForm();
    }

    return (
        <>
            <CreateInput field={'Company Name'} value={name} settingFunction={setName} />
            <CreateInput field={'Position Title'} value={title} settingFunction={setTitle} />
            <CreateInput field={'Start Date'} value={startDate} settingFunction={setStartDate} />
            <CreateInput field={'End Date'} value={endDate} settingFunction={setEndDate} />
            <CreateInput field={'Location'} value={location} settingFunction={setLocation} />
            <CreateInput field={'Description'} value={description} settingFunction={setDescription} />

            <div className="button-div">
                {
                    preFilled && !isAdding ?
                        <button className="delete-button" onClick={handleDelete}>Delete</button>
                        : null
                }
                <button onClick={handleSubmit} className="submit-button" >Submit</button>
                <button onClick={resetForm} className="cancel-button" >Cancel</button>
            </div>
        </>
    )
}

ExperienceList.propTypes = {
    experience: propTypes.array,
    setExperience: propTypes.func,
};

ExperienceForm.propTypes = {
    setFormVisible: propTypes.any.isRequired,
    setList: propTypes.func.isRequired,
    items: propTypes.array.isRequired,
    preFilled: propTypes.any,
    isAdding: propTypes.bool,
    setEditingIndex: propTypes.func
};