import './Form.css';
import propTypes from 'prop-types'
import CreateInput from '../General Functions/CreateInput';


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

Form.propTypes = {
    setName: propTypes.func,
    setMail: propTypes.func,
    setPhone: propTypes.func,
    setAddress: propTypes.func,
};