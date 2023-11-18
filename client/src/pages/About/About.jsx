import React from 'react'
import './about.scss'

const About = () => {
    const team=[
        {
        id:'1',
        profile: "/img/pfps/1.jpeg",
        name: "Mohit",
        place: "Project lover & fixer-upper(er).",
        position: "CEO",
        },
        {
        id:'2',
        profile:"/img/pfps/2.jpeg",
        name: "Kshitij",
        place: "#1 fan of golden retrievers.",
        position: "CTO",
        },
        {
        id:'3',
        profile:"/img/pfps/3.jpeg",
        name: "Naman",
        place: "Beach lover 🌴, keeping life simple!",
        position: "COO",
        },
        {
        id:'4',
        profile:"/img/pfps/4.jpeg",
        name: "Rishi",
        place: "A Ray of Sunshine ☀️. Boyband Enthusiast.",
        position: "CFO",
        },
        {
        id:'5',
        profile:"/img/pfps/5.jpeg",
        name: "Chinmay",
        place: "Listening to Kylie Minogue.",
        position: "CIO",
        },
        {
        id:'6',
        profile:"/img/pfps/6.jpeg",
        name: "Santosh",
        place: "French fry enthusiast & mismatched socks.",
        position: "CMO",
        },
        {
        id:'7',
        profile:"/img/pfps/7.jpeg",
        name: "Uttkarsh",
        place: "Avid reader & coffee lover.",
        position: "CPO",
        },
    ]
  return (
    <div className='about'>
        <div className="intro">
                <img src="/img/background.png" alt="" />
                <div className="info">
                    <h1>Our experience has shaped our solution</h1>
                    <p>As a team of seasoned technologists and procurement professionals, we’ve lived the frustration of keeping up with ever-evolving technology, and we know the hassles of piecemeal solutions. Knowing the pitfalls of the industry inspired us to reshape the industry – for you, and for the better.</p>
                </div>
        </div>
        <div className="team">
            <span>OUR TEAM</span>
            <h1>Talk to real people</h1>
            <p>Amazing team is the #1 reason our creators cite for choosing Shopsy. Our team knows that the entrepreneurial journey comes with challenges, and we’re here to help you every step of the way.</p>
            <div className="template">
                {team.map(t=>(
                    <div className="profile" key={t.id}>
                        <img src={t.profile} alt="" />
                        <span>{t.position}</span>
                        <h2>{t.name}</h2>
                        <span>{t.place}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About