import propTypes from 'prop-types';

export default function CreateInput({ field, recommended = false, optional = false, type = 'text', settingFunction, value }) {
    return (
        <div className="inp-div">
            <div className="title">
                <h3>{field}</h3>
                <h4 style={{ color: 'white' }}>{recommended ? 'Recommended' : optional ? 'Optional' : ''}</h4>
            </div>
            <input
                type={type}
                onChange={(e) => settingFunction(e.target.value)}
                value={value}
                name={field}
            />
        </div>
    );
}

CreateInput.propTypes = {
    field: propTypes.string,
    recommended: propTypes.bool,
    optional: propTypes.bool,
    type: propTypes.string,
    settingFunction: propTypes.func,
    value: propTypes.string
};