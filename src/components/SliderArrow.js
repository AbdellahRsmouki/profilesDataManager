import React from 'react'

import icon_right from '../images/Red_Arrow_Head_Right.png';
import icon_left from '../images/Red_Arrow_Head_Left.png';

export default ({className, to, onClick}) => (
  <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
    <img className={to==="next"?"slick-next":"slick-prev"} src={to==="next"?icon_right:icon_left} />
  </button>
)