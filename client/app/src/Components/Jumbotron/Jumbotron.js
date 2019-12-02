import React from 'react'
import ReactDOM from 'react-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/button'
class LandingJumbotron extends React.Component {
  render() {
    const jumbotronStyles = {
      backgroundImage: "url('https://images.unsplash.com/photo-1484081064812-86e90e107fa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      paddingTop: '15%',
      paddingBottom: '15%',
      marginTop: '2.5em'
    }

    const jumbotronButtonStyles = {
      marginLeft: '1%'
    }
    return (
      <Jumbotron style={jumbotronStyles}>
        <h1><strong>Shop Winter Styles</strong></h1>
        <h5><strong>
          Keep your loved one's warm <br /> with our stylish winter attire
        </strong>
        </h5>
        <div>
          <Button variant="danger">Women's</Button>
          <Button style={jumbotronButtonStyles} variant="danger">Men's</Button>
        </div>
      </Jumbotron >
    )
  }
}


export default LandingJumbotron;
