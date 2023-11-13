import React from 'react'
import './contact.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const Contact = () => {
  return (
    <div className='contact'><div className="wrapper">
        <span>BE IN TOUCH</span>    
        <div className="mail">
            <input type="text" placeholder='Enter your email'/>
            <button>JOIN US</button>
        </div>
        <div className="icons">
            <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
            <LinkedInIcon />
            <InsertLinkIcon />
        </div>
    </div></div>
  )
}

export default Contact