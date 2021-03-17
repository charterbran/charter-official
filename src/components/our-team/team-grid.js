import './team-grid.css'

import React, {useState} from 'react'

import TeamCard from './team-card';
import carol from '../../images/team/carol.png'
import jeanclaude from '../../images/team/jeanclaude.png'
import meagan from '../../images/team/meagan.png'
import sabina from '../../images/team/sabina.png'
import steve from '../../images/team/steve.png'
import sylvie from '../../images/team/sylvie.png'
import vince from '../../images/team/vince.png'

const TeamGrid = () => {
    const [teamList, setTeamList] = useState(
        [
            {
                name: 'Steve Larkin',
                title: 'Chief Executive Officer',
                image: steve,
                linkedIn: 'https://www.linkedin.com/in/steve-j-larkin-7352381b/',
                quote: '"Go Charter!"',
                bio: 'Steve J Larkin is a highly accomplished health care management executive with more than 20 years of industry experience. He has a proven ability to increase sales, market share, productivity and profitability. He is the Chief Executive Officer of Charter Health Holdings, LLC.  Steve joined Charter in 2018 after spending time with Pharos Capital as an Operating Partner. There, he provided insight and advised the firm on multiple post-acute and healthcare delivery investment opportunities consisting of home health/hospice, palliative care, ABA therapy, behavioral health, and physician practice/surgical roll-ups. Prior to partnering with Pharos Capital and joining Charter, he worked as a Division President at Compassus, a nationwide network of community-based hospice, home health and palliative care services. As Division President he oversaw the growth and development of 52 programs in 17 states. Steve Larkin holds a Master’s in Business Administration and Health Care Administration from Saint Louis University and Webster University respectively, as well as a Bachelor of Science from Iowa State University.',
                isClicked: false,
                animationTime: 700
            },
            {
                name: 'Sabina Del Rosario',
                title: 'Chief Operating Officer',
                image: sabina,
                linkedIn: null,
                quote: '"In every person there is a sun. Just let it shine." -Socrates',
                bio: 'Sabina is a savvy Operations Leader with an indelible reputation for delivering innovative business strategies and client-focused solutions that improve margins. She’s been recognized for transforming operations systems productively by building strong and solid partnerships with employees and community partners. Sabina wields broad experience building profitable start up healthcare divisions, growth business lines, and streamlined operations. She specializes in creating high performing and innovative culture that consistently achieves goals in competitive markets.',
                isClicked: false,
                animationTime: 900
            },
            {
                name: 'Vincent Castaldo',
                title: 'Chief Financial Officer',
                image: vince,
                linkedIn: 'https://www.linkedin.com/in/vincent-castaldo-29310761/',
                quote: '"From caring comes courage." -Lao Tzu',
                bio: 'Mr. Castaldo currently serves as the Company’s Chief Financial Officer, a position he has held since January 2019. He brings over 25 years of finance experience, 18 of which have been for health care companies. Prior to Charter Health, Mr. Castaldo spent over seven years as Chief Financial Officer for Home and Community Care Services at Providence St. Joseph Health. He also held prior finance, operations, and/or administrative roles at American Dental Partners, at the time a public company, and CPRR, LLC. Mr. Castaldo earned a Bachelor of Science in business administration & economics from St. Mary’s College of California, where he majored in accounting.',
                isClicked: false,
                animationTime: 1100
            },
            {
                name: 'Dr. Jean-Claude Hage',
                title: 'Chief Medical Officer',
                image: jeanclaude,
                linkedIn: null,
                quote: '"Go Charter!"',
                bio: 'Dr. Hage has been in practice in the Inland Empire area for over 20 years. He is a board certified family physician with additional certification in Hospice & Palliative Medicine. He finished his training at LLU in 1995 and remained there for 3 years as part of the Family Medicine Faculty and Director of the Family Medicine Residency clinic before going into private practice in San Bernardino in 1999. While initially treating patients of all ages and even delivering many babies, he started focusing on his elderly patients which now comprise the overwhelming majority of the people he treats and he does so in many settings: office, nursing homes, assisted living, and even at home when time permits. He is keen on caring for people at the later stages of their life and helping them with all the difficulties that may set it while sharing with them all the positives that they may easily tend to overlook and striving to improve the quality of their life as much as possible.',
                isClicked: false,
                animationTime: 1300
            },
            {
                name: 'Sylvie Boal',
                title: 'Corporate Counsel, VP of Quality & Compliance',
                image: sylvie,
                linkedIn: 'https://www.linkedin.com/in/sylvie-boal-41920557/',
                quote: '"Fight for the things that you care about, but do it in a way that will lead others to join you." -RBG',
                bio: 'Ms. Boal joined Charter in 2013 as a Compliance Officer to take on the ever-changing hospice and home health regulatory landscape. Since then, her position evolved into Corporate Counsel and expanded to handle external audits and surveys, employment risk management, contracts drafting and management, and transactional matters, while growing the department as a business partner. Alongside the leadership team, Ms. Boal has worked to support new clinical models that aim to provide a better continuum of care for patients in the post-acute space- from complex care management to end-of-life care.  She earned her juris doctor in 2012 at Western State College of Law and her bachelor’s degree from the University of California Irvine. Ms. Boal is a member of the California State Bar.',
                isClicked: false,
                animationTime: 1500
            },
            {
                name: 'Meagan De Guzman',
                title: 'VP of Human Resources',
                image: meagan,
                linkedIn: 'https://www.linkedin.com/in/meagan-de-guzman-57325729/',
                quote: '"The strength of the team is each individual member. The strength of each member is the team." -Phil Jackson',
                bio: "Meagan De Guzman is the Director of Human Resources for Charter Health Holdings LLC. Meagan has had over 10 years of successful Human Resource Management experience with high growth and high performance in developing business strategies aimed at increasing employment engagement, supporting compliance and legal practices, coordination and administration of Benefits and Payroll, and works closely with senior leadership in development of training system practices. She currently supports over 1000 employees in 14 programs. Meagan's key to sucess has been a strong philosophical view that the Human Resources function must be viewed as an integral partner in shaping, developing, and executing a company's core strategies. Achieving leadership credibility requires close alignment of it's HR policies and practices with the core strategies. Having an HR team with the requisite skills and experience has been a major factor in the sucess of the department. A native of the Southern California area, Meagan graduated with a Bachelor's of Science in Business Administration with an emphasis in Human Resources and Management. She enjoys spending time with her husband and two children.",
                isClicked: false,
                animationTime: 1500
            },
            {
                name: 'Carol Lynn',
                title: 'VP of Communications',
                image: carol,
                linkedIn: 'https://www.linkedin.com/in/carol-fite-lynn-3b86377/',
                quote: '"Go Charter!"',
                bio: "Carol is a high-performing healthcare communication and marketing leader with 11 years in communications and public relations. She possesses a successful record of leading an organization's marketing and public relations efforts, with a strong emphasis on media relations, community relations, and social media. She brings to the table a strong knowledge and understanding of the marketing complexities within the healthcare industry, as well as the challenges and opportunities. Carol loves what she does, and her passion shows in her performance to her clients and team.",
                isClicked: false,
                animationTime: 1500
            }
        ]
    )
    //Method that will be passed down as a prop to handle state management and expand cards / animate clickers
    //ID passed down as a prop to child button - which invokes this function and passes its ID when clicked
    const expandBio = (id) => {
        //create a new list from old list, but update whichever child was clicked on
        const newList = teamList.map((teamMember) => {
            if(teamMember.name === id) {
                const newMember = {
                    //state is updated, component rerenders, and new props are passed down to children
                    ...teamMember,
                    isClicked: !teamMember.isClicked
                }
                //must return so .map can enter it into new array list
                return newMember;
            };
            //must return so .map can enter it into new array list
            return teamMember;
        });
        //use setState method to update state
        setTeamList(newList);
    }


  return (
    <div className='TeamGrid'>
        <h4>Meet Our Executive Team</h4>
        <div className='card-container'>
            {teamList.map(teamMember => {
                return <TeamCard 
                    id={teamMember.name}
                    image={teamMember.image} 
                    name={teamMember.name} 
                    title={teamMember.title} 
                    linkedIn={teamMember.linkedIn}
                    quote={teamMember.quote}
                    bio={teamMember.bio}
                    isClicked={teamMember.isClicked} 
                    animationTime={teamMember.animationTime} 
                    expandBio={expandBio} 
                    key={teamMember.name}
                />   
            })}
        </div>
    </div>
  )
}

export default TeamGrid;