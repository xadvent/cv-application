import './TopDocument.css';
import propTypes from 'prop-types';

export default function TopDocument({ name, email, phone = null, address }) {
    if(phone) {
        phone = '+1 (' + phone.slice(0, 3) + ') ' + phone.slice(3,6) + '-' + phone.slice(6)
    }

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