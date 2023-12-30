import { useState } from "react";
import './Form.css'

function CreateInput({ field, recommended = false, type = 'text' }) {
    const [result, setResult] = useState('');

    return (
        <div className="inp-div">
            <div className="title">
                <h3>{field}</h3>
                <h4 color="white">{recommended ? 'recommended' : ''}</h4>

            </div>
            <input type={type} value={result} onChange={(e) => {
                setResult(e.target.value)
            }}></input>
        </div>
    )
}

export default function Form() {

    return (
            <div id="form">
                <h2>Personal Details</h2>
                <CreateInput field={'Full name'} />
                <CreateInput field={'Email'} recommended type="email" />
                <CreateInput field={'Phone Number'} recommended type="number"/>
                <CreateInput field={'Address'} recommended />
            </div>
    )
}