import React, {useEffect} from 'react';
import './hospice-card.css';
import AOS from "aos";
import "aos/dist/aos.css";

const HospiceCard = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HospiceCard' data-aos='fade-up' data-aos-duration={props.animationTime} >
        <img src={props.icon} alt={props.alt} />
        <h6 className='detail-title'>{props.title}</h6>
    </div>
  );
}

export default HospiceCard;