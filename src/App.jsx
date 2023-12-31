import Form from './Boxes/Form'
import Card from './Boxes/Card'
import TopDocument from './output/TopDocument';
import './App.css'
import { useState } from 'react';

export default function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  const buttonStyle = {
    fontSize: 14 + 'px',
    fontWeight: 500,
  };

  return (
    <>
      <div id="left-side">
        <Card name={'doc-options'} >
          <button style={buttonStyle} id='reset' onClick={() => {
            setFullName(''); setEmail(''); setPhone(''); setAddress('');
            document.querySelectorAll('input').forEach(target => target.value = '')
          }}>Clear Resume</button>
          <button style={buttonStyle} id='download'>Download Resume</button>
        </Card>

        <Card name={'form-card'} >
          <Form setName={setFullName} setMail={setEmail} setPhone={setPhone} setAddress={setAddress} />
        </Card>

        <Card name={'form-options'} title={'Education'} expandable={true} >
          Insert education information
        </Card>

        <Card name={'form-options'} title={'Experience'} expandable={true} >
          insert relevant experience
        </Card>
      </div>

      <div id="right-side">
        <div id="doc">
          <TopDocument
            name={fullName}
            email={email}
            phone={phone}
            address={address}
            education={education}
            experience={workExperience}
          /> 
          <div id="education"></div>
          <div id="work-experience"></div>
        </div>
      </div>
    </>
  );
}