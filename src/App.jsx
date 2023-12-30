import Form from './Boxes/Form'
import Card from './Boxes/Card'
import './App.css'

function App() {

  const buttonStyle = {
    fontSize: 14 + 'px',
    fontWeight: 500,
  };

  return (
    <>
      <div id="left-side">
        <Card name={'doc-options'}>
          <button style={buttonStyle} id='reset'>Clear Resume</button>
          <button style={buttonStyle} id='download'>Download Resume</button>
        </Card>

        <Card name={'form-card'}>
          <Form />
        </Card>

        <Card name={'form-options'} title={'Education'} expandable={true}>
          Insert education information
        </Card>

        <Card name={'form-options'} title={'Experience'} expandable={true}>
          insert relevant experience
        </Card>
      </div>

      <div id="right-side">
      </div>
    </>
  )
}

export default App
