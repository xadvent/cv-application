import './TopDocument.css';
import Icon from '@mdi/react'
import { mdiPhone, mdiEmailOutline, mdiMapMarkerOutline } from '@mdi/js';
import propTypes from 'prop-types';

export default function TopDocument({ name, email, phone, address }) {
    if (phone) {
        phone = '+1 (' + phone.slice(0, 3) + ') ' + phone.slice(3, 6) + '-' + phone.slice(6)
    }

    const moveUp = {
        top: -2 + 'px',
        position: 'relative',
        width: 20 +'px',
    };

    return (
        <div id="header">
            <h1>{name}</h1>
            <div id='contact-info' >
                {
                    email != '' ?
                        <div className="header-info">
                            <Icon className='icon' path={mdiEmailOutline} style={moveUp} />
                            <p>{email}</p>
                        </div>
                        : null
                }
                {
                    phone != '' ?
                        <div className="header-info">
                            <Icon className='icon' path={mdiPhone} style={moveUp} />
                            <p>{phone}</p>
                        </div>
                        : null
                }
                {
                    address != '' ?
                        <div className="header-info">
                            <Icon className='icon' path={mdiMapMarkerOutline} style={moveUp} />
                            <p>{address}</p>
                        </div>
                        : null
                }
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