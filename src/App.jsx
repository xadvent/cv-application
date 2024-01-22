import './CSS/App.css';
import Card from './Cards/General Functions/Card';
import EducationForm from './Cards/Education/EducationForm';
import EducationDocument from './output/EducationDocument';
import Form from './Cards/Personal Details/Form'
import TopDocument from './output/TopDocument';
import { useState } from 'react';
import ExperienceForm from './Cards/Experience/ExperienceForm';
import ExperienceSection from './output/ExperienceSection';

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
            setFullName(''); setEmail(''); setPhone(''); setAddress(''); setEducation([]); setWorkExperience([]);
            document.querySelectorAll('input').forEach(target => target.value = '');
          }}>Clear Resume</button>

          <button style={buttonStyle} id='download' onClick={() => {
            console.log(workExperience)
          }}>Download Resume</button>

        </Card>

        <Card name={'form-card'} >
          <Form setName={setFullName} setMail={setEmail} setPhone={setPhone} setAddress={setAddress} />
        </Card>


        <Card name={'form-options'} title={'Education'} expandable={true} >
          <EducationForm allEducation={education} setAllEducation={setEducation} />
        </Card>

        <Card name={'form-options'} title={'Experience'} expandable={true} >
          <ExperienceForm experience={workExperience} setExperience={setWorkExperience} />
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
          <div id="content">
            <EducationDocument id={'education'} info={education} />
            <ExperienceSection experience={workExperience} />
          </div>
        </div>
      </div>
    </>
  );
}