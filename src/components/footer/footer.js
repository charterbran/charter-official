import React from 'react'
import './footer.css'
import ContactForm from '../../components/form'


//TODO - MAKE CARDS EXPANDABLE ON MOBILE AND DESKTOP

const Footer = () => {
  return (
    <footer className='Footer'>
        <hr/>
        <div className='content-wrapper'>
            <div className='left'>
                <ContactForm />
            </div>
            <div className='right'>
                <div className='helpful-links'>
                    <h4>Helpful Links</h4>
                    <ul>
                        <li>About Charter</li>
                        <li>Careers</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='headquarters'>
                    <h4>Charter Headquarters</h4>
                    <ul>
                        <li>9660 Haven Ave, Rancho Cucamonga, CA 91730</li>
                        <li>P: 123-456-7890</li>
                        <li>F: 123-456-7890</li>
                    </ul>
                </div>
                <div className='socials'>
                    <h4>Follow Us</h4>
                    <ul>
                        <li>I</li>
                        <li>T</li>
                        <li>F</li>
                        <li>L</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bottom'>
            <p>© {new Date().getFullYear()}, Built with ❤️ by Charter Healthcare Group</p>
        </div>
    </footer>
  )
}

export default Footer