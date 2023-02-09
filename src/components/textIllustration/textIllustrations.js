import Head from 'next/head'
import ReactDOM from "react-dom";
import styles from './textIllustration.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Button, Container , Row, Col} from 'react-bootstrap';  
import React, { useEffect, useState } from "react";
import {useForm} from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Box
} from "@mui/material";
import Tabs from './tabs';
import "@fontsource/poppins";

const formOptions = ["Managed Service Provider", "Distributor / Value Added Reseller"];

export default function Home() {
  const { register, setValue, handleSubmit } = useForm();
  return (
    <>
    <Row className='row-align'>
      <Col className='textStyle'>
      <h1 className='title-pos'><b className='h1 text-color'>Authentication</b> Security</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<FormControl fullWidth component="fieldset" margin="normal">
          <FormGroup aria-label="Temas" row={false}>
            {formOptions.map((option, i) => (
              <FormControlLabel
                key={option}
                control={
                  <input
                    type="checkbox" 
                    name={`nativeThemes[${i}]`}
                    value={option}
                    //  ref={register}
                  />
                }
                label={option}
              />
            ))}
          </FormGroup>
        </FormControl>
        <div>
      <Button className='action-btn'>Action</Button>
      </div>
</Col>
<Col className='col-align'>
 <img src="https://cdn.discordapp.com/attachments/945949843724075038/1070236838217908314/Rectangle_164.png" width="75%" alt="sample"/>
</Col>
</Row>

<Row className='row-align'>
<Col className='col-alignment'>
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
