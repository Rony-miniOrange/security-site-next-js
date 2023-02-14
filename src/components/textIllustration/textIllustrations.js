import Head from 'next/head'
import ReactDOM from "react-dom";
import styles from '@/styles/Home.module.css'
import {Button, Container , Row, Col} from 'react-bootstrap';  
import React, { useEffect, useState } from "react";
import Tabs from './tabs';
import "@fontsource/poppins";


const getFormattedPrice = (price) => `$${price.toFixed(2)}`;
const options = [
  {
    name: "Managed Service Provider"
  },
  {
    name: "Distributer / Value-Added Reseller"
  }
];

export default function Home() {
  const [total, setTotal] = useState(0);

    return (
    <>
    <Row className='row-align'>
      <Col className='textStyle'>
      <h1 className='title-pos'><b className='h1 text-color'>Authentication</b> Security</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<ul className="options-list">
        {options.map(({ name}, index) => {
          return (
            <li key={index}>
              <div className="options-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
        <div>
      <Button className='action-btn'>Action</Button>
      </div>
</Col>
<Col style={{margin:'2rem 0rem 0rem 0rem'}}>
 <img src="https://cdn.discordapp.com/attachments/945949843724075038/1070236838217908314/Rectangle_164.png" width="75%" alt="sample"/>
</Col>
</Row>

<Row className='row-align' style={{paddingTop:'8rem', paddingLeft:'2rem'}}>
<Col style={{margin:'5rem 0rem 0rem 0rem'}}>
 <img src="https://cdn.discordapp.com/attachments/945949843724075038/1070236838217908314/Rectangle_164.png" width="75%" alt="sample"/>
</Col>
      <Col className='textStyle'>
      <h1 className='title-pos'><b className='h1 text-color'>Authentication</b> Security</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    </p>
    <div>        <Tabs />
</div>
      <Button className='tabs-btn'><b>Download</b></Button>
      <Button className='tabs-btn'><b>Pricing</b></Button>
      <Button className='tabs-btn'><b>Details</b></Button>
      <Button className='tabs-btn'><b>Setup Guides</b></Button>

</Col>
</Row>
    </>
  )
}
