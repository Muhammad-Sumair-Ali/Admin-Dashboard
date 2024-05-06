import { Form, Input, Button } from 'antd';
import Layout from '../components/Layout';
import React from 'react';
import './About.css';

const Contact = () => {
    return (
      <Layout>
        <div className='c-body'> 
        <div className="container">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt" />
                <div className="topic">Address</div>
                <div className="text-one">Karachi Pakistan</div>
                <div className="text-two">Mehmodabad 01</div>
              </div>
              <div className="phone details">
                <i className="fas fa-phone-alt" />
                <div className="topic">Phone</div>
                <div className="text-one">03194075607</div>
                <div className="text-two">+0096 3434 5678</div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope" />
                <div className="topic">Email</div>
                <div className="text-one">muhammadsumair224@gmail.com</div>
              
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Send us a message</div>
              <p>
                If you have any work from me or any types of quries related to my
                tutorial, you can send me message from here. It's my pleasure to help
                you.
              </p>
              <form action="#">
                <div className="input-box">
                  <input type="text" placeholder="Enter your name" required/>
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box message-box">
                
            <textarea required placeholder='Write your Message'></textarea>
                </div>
                <div className="button">
                  <input type="button" defaultValue="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
          </div>
      </Layout>
    );
};

export default Contact;