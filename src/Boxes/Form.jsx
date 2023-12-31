import './Form.css'
import propTypes from 'prop-types'

function CreateInput({ field, recommended = false, type = 'text', settingFunction}){

    return (
        <div className="inp-div">
            <div className="title">
                <h3>{field}</h3>
                <h4 color="white">{recommended ? 'recommended' : ''}</h4>

            </div>
            <input type={type} onChange={(e) => {
                settingFunction(e.target.value);
            }}></input>
        </div>
    );
}

export default function Form({setName, setMail, setPhone, setAddress}) {

    return (
            <div id="form">
                <h2>Personal Details</h2>
                <CreateInput field={'Full name'} settingFunction={setName}/>
                <CreateInput field={'Email'} recommended type="email" settingFunction={setMail}/>
                <CreateInput field={'Phone Number'} recommended type="number" settingFunction={setPhone}/>
                <CreateInput field={'Address'} recommended settingFunction={setAddress}/>
            </div>
    );
}

CreateInput.propTypes = {
    field: propTypes.string,
    recommended: propTypes.bool,
    type: propTypes.string,
    settingFunction: propTypes.func
};

Form.propTypes = {
    setName: propTypes.func,
    setMail: propTypes.func,
    setPhone: propTypes.func,
    setAddress: propTypes.func,
};