import propTypes from 'prop-types'

export default function CreateInput({ field, recommended = false, optional = false, type = 'text', settingFunction}){

    return (
        <div className="inp-div">
            <div className="title">
                <h3>{field}</h3>
                <h4 color="white">{recommended ? 'Recommended' : optional ? 'Optional' : ''}</h4>
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
    optional: propTypes.bool,
    type: propTypes.string,
    settingFunction: propTypes.func
};
