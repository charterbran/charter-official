import React, {useEffect} from 'react';
import './levels-of-care.css';
import AOS from "aos";
import "aos/dist/aos.css";
import oneIcon from '../../images/one.png';
import twoIcon from '../../images/two.png';
import threeIcon from '../../images/three.png';
import fourIcon from '../../images/four.png';
import LevelsCard from './levels-card';

const LevelsOfCare = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const levelsList = [
      {
        img: oneIcon,  
        title: 'Routine Home Health',
        content: 'Delivered primarily where the patient resides and provided by a team of hospice professionals. Care may involve skilled nursing care, certified home health aides, emotional and spiritual care, social services and/or volunteer services.'
      },
      {
        img: twoIcon,  
        title: 'Respite Care',
        content: 'Delivered primarily where the patient resides and provided by a team of hospice professionals. Care may involve skilled nursing care, certified home health aides, emotional and spiritual care, social services and/or volunteer services.'
      },
      {
        img: threeIcon,  
        title: 'General Inpatient Care',
        content: 'Delivered primarily where the patient resides and provided by a team of hospice professionals. Care may involve skilled nursing care, certified home health aides, emotional and spiritual care, social services and/or volunteer services.'
      },
      {
        img: fourIcon,  
        title: 'Continuous Care',
        content: 'Delivered primarily where the patient resides and provided by a team of hospice professionals. Care may involve skilled nursing care, certified home health aides, emotional and spiritual care, social services and/or volunteer services.'
      }
  ]

  return (
    <div className='LevelsOfCare'>
        <h2>4 Levels of Care</h2>
        <div className='levels-card-wrapper'>
            {
                levelsList.map(level => {
                    return <LevelsCard img={level.img} title={level.title} content={level.content} />
                })
            }
        </div>
    </div>
  );
}

export default LevelsOfCare;