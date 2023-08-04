import PropTypes from 'prop-types';
import css from './Enlace.module.css';

import './Enlace.css';

function Enlace(props) {
    return <a href={props.href} id={props.id} className={props.className + ' ' + css.myStyle} style={props.style}>{props.children}</a>
}

Enlace.propTypes = {
    href: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string.isRequired,
    style: PropTypes.object,
    children: PropTypes.string.isRequired
}

export default Enlace;