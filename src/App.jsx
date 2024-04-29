import './styles/App.css';
import Card from './components/general-components/Card';
import EducationForm from './components/input/EducationForm';
import EducationDocument from './components/output/EducationDocument';
import Form from './components/input/Form'
import TopDocument from './components/output/TopDocument';
import { usePDF } from "react-to-pdf";
import { useState } from 'react';
import ExperienceForm from './components/input/ExperienceForm';
import ExperienceSection from './components/output/ExperienceSection';

export default function App() {
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState([]);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [workExperience, setWorkExperience] = useState([]);

  const buttonStyle = {
    fontSize: 14 + 'px',
    fontWeight: 500,
  };

  const { toPDF, targetRef } = usePDF({ 'filename': 'resume.pdf', 'method': 'open' })

  return (
    <>
      <div id="left-side">
        <Card name={'doc-options'} >

          <button style={buttonStyle} id='reset' onClick={() => {
            setFullName(''); setEmail(''); setPhone(''); setAddress(''); setEducation([]); setWorkExperience([]);
            document.querySelectorAll('input').forEach(target => target.value = '');
          }}>Clear Resume</button>

          <button style={buttonStyle} id='download' onClick={() => { toPDF() }}>Download Resume</button>

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
        <div id="doc" ref={targetRef}>
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