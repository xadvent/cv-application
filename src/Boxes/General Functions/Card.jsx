import { useState } from "react";
import propTypes from 'prop-types';
import './Card.css';

export default function Card({ children, name, expandable, title }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    if (expandable) {
        return (
            <div className={'card' + ' ' + name}>
                <div className="title-container" onClick={toggleExpand}>
                    <h2 className="card-title">{title}</h2>
                    <div className="open-close">
                        {
                            expanded ?
                                <>
                                    <div className="left-card-icon close"></div>
                                    <div className="right-card-icon close"></div>
                                </>
                                :
                                <>
                                    <div className="left-card-icon show"></div>
                                    <div className="right-card-icon show"></div>
                                </>
                        }
                    </div>
                </div>
                {
                    expanded &&
                    <div className="expand-container">
                        {children}
                    </div>
                }
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

Card.propTypes = {
    children: propTypes.node,
    name: propTypes.string,
    expandable: propTypes.bool,
    title: propTypes.string,
};