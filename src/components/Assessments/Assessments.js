import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import { RiArrowDropRightFill, RiChat3Line } from "react-icons/ri";
import { AccountContext } from '../../context/account.context';
import "./Assessments.module.scss";

const Assessments = (props) => {
  const {assessments, } = useContext(AccountContext);
  const {  backgroundColorFind, innerWidth } = props;
 
  const Styles = (Assessment) => {
    let result = {
      backgroundColor: backgroundColorFind(Assessment),
      width: "40px",
      fontSize: "20px",
      color: "white",
      textAlign: "center",
      borderRadius: "7px",
      height: 40
    }
  
    return result;
  };

  const classBtn = () => {
    let result = {
      marginTop: innerWidth >= 375 && innerWidth <=480 ? 20: '',
    }
    return result;

  }

  const btn = () => {
    let result  = {
      width: innerWidth >= 375 && innerWidth <=480 ? 310: '', 
      height: 50
    }
    return result;
  }

  const iconFont= () => {
    let result = {
      fontSize : 40,
    };
    return result;
  };

  const cardText = () => {
    let result = {
      textAlign: "left", marginLeft: 18, lineHeight: 1
    }
    return result
  }

  const textColor = () => {
    let result = {
      color: "blue"
    }
    return result
  }
 
  return (
    <Container>
      <h1>Assessments</h1>
      {
        assessments?.assessments?.map((Assessment) => {
          return (
            <Card className="text-center" key={Assessment?.id}>
              <Card.Body className="d-flex justify-content-between flex-wrap">
                <div className="card-c d-flex">
                  <span className="icons">
                    <Card.Text style={Styles(Assessment)}>  <RiChat3Line className="RiChat3Line" /></Card.Text>
                  </span>
                  <div className="cards-text" style={cardText()}>
                    <Card.Title style={textColor()}>
                      {Assessment?.title}
                    </Card.Title>
                    <Card.Text>
                      {Assessment?.author}
                    </Card.Text>
                  </div>
                </div>
                <div className="class-btn" style={classBtn()}>
                  <Button variant="primary" style={btn()}>Get Started 
                  <RiArrowDropRightFill style={iconFont()} /></Button>
                </div>
              </Card.Body>
            </Card>
          )

        })
      }
    </Container>
  )
};

export default Assessments;




