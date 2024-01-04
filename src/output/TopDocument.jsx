import './TopDocument.css';
import propTypes from 'prop-types';

export default function TopDocument({ name, email, phone = null, address }) {

    return (
        <div id="header">
            <h1>{name}</h1>
            <div id='contact-info' >
                <div className="header-info">
                    <img src="#" />
                    <p>{email}</p>
                </div>
                <div className="header-info">
                    <img src="#" />
                    <p>{phone}</p>
                </div>
                <div className="header-info">
                    <img src="#" />
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
}

TopDocument.propTypes = {
    name: propTypes.string,
    email: propTypes.string,
    phone: propTypes.string,
    address: propTypes.string,
}