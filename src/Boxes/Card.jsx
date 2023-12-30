import { useState } from "react";
import './Card.css'

export default function Card({ children, name, expandable = false, title }) {
    const [expanded, setExpanded] = useState(false);

    const show = function (e) {
        let container = e.target.parentElement.parentElement;
        container = container.querySelector('.expand-container');

        setExpanded(!expanded);
        container.classList.toggle('hidden');
    }

    if (expandable) {
        return (
            <div className={'card' + ' ' + name}>
                <div className="title-container">
                    <h2 className="card-title">{title}</h2>
                    <div className="expand-icon" onClick={show}>{expanded ? 'X' : 'V'}</div>
                </div>
                <div className="expand-container hidden">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className={'card' + ' ' + name}>
            <h2>{title}</h2>
            {children}
        </div>
    );
}