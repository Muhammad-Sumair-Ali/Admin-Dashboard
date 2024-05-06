import React from 'react';
import { Card, Row, Col, Layout } from 'antd';
const { Content } = Layout;
import './style.css'
import LayoutRes from '../components/Layout'; 
import Sumair from '../assets/sumairPic.jpg';
import junaid from '../assets/junaid.jpg'

const Team = () => {
   

    return (
      <LayoutRes> 
        <div className="card-list">
          <a href="#" className="card-item">
            <img src={Sumair} alt="Card Image" />  <span className="designer">Designer</span>
            <span className="developer">Developer</span>
            <h3>Muhammad Sumair "developer" and designer .</h3>
            <div className="arrow">
              <i className="fas fa-arrow-right card-icon" />
            </div>
          </a>
          <a href="#" className="card-item">
            <img src={junaid} alt="Card Image" />
            <span className="designer">Designer</span>
            <h3>Junaid Husssain "designer" is a design expert.</h3>
            <div className="arrow">
              <i className="fas fa-arrow-right card-icon" />
            </div>
          </a>
         
        </div>

      </LayoutRes>
    );
};

export default Team;
