import propTypes from 'prop-types'

export default function CreateInput({ field, recommended = false, type = 'text', settingFunction}){

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

CreateInput.propTypes = {
    field: propTypes.string,
    recommended: propTypes.bool,
    type: propTypes.string,
    settingFunction: propTypes.func
};
