import React from 'react'
import { Link } from 'react-router'
import ig1 from './img/m27.jpg'
function Join() {
  return (
    <div className='Join'>
        <div className='Pat1'>
          <div className='Side1'><img src={ig1} alt='image 27 is not working' /></div>
          <div className='Side2'>
        <h1>BECOME A G&B AFFILIATE</h1>
        <h2>Make money with G&B Affiliate Program</h2>
        <p>Get Your Unique Affiliate Link and Start Earning.Content Creator, Course Educator,influencers and 
        view Sites are helping their audience launch successful Bussinesson G&B Solutionz They earn Competative
       referrels Commission and elevate themselves as leader in the industry</p>
        <Link to="/signUp"><button className='join-btn1'>Join Affiliate</button></Link>
          </div>
        </div>
        <div className='Pat2'>
        <div className='p1'>
          <h1>15 Days Free Trials</h1>
          <p>Try our Builder For 15 Days without any payment information</p>
        </div>
        <div className='p2'>
          <h1>24/7 Call Support</h1>
          <p>Our Experts will Provide unhindered anytime you want</p>
        </div>
        <div className='p3'>
          <h1>MoneyBack Gurentee</h1>
          <p>Try G&B Solutionz For 15 Days and if you'r are not satisfied,get your money back</p>
        </div>
        </div>
    </div>
  )
}

export default Join
