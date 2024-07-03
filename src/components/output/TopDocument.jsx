import '../../styles/TopDocument.css';
import Icon from '@mdi/react'
import { mdiPhone, mdiEmailOutline, mdiMapMarkerOutline } from '@mdi/js';
import propTypes from 'prop-types';

export default function TopDocument({ name, email, phone, address }) {
    if (phone) {
        phone = '+1 (' + phone.slice(0, 3) + ') ' + phone.slice(3, 6) + '-' + phone.slice(6)
    }

    return (
        <div id="header">
            <h1>{name}</h1>
            <div id='contact-info' >
                {
                    email != '' ?
                        <div className="header-info">
                            <Icon className='icon' path={mdiEmailOutline} />
                            <p>{email}</p>
                        </div>
                        : null
                }
                {
                    phone != '' ?
                        <div className="header-info">
                            <Icon className='icon' path={mdiPhone} />
                            <p>{phone}</p>
                        </div>
                        : null
                }
                {
                    address != '' ?
                        <div className="header-info">
                            <Icon className='icon' path={mdiMapMarkerOutline} />
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