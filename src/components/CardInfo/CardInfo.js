import React from "react";
import './CardInfo.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardInfo(props){
    return(
        <div className="Card-Info">
            <div className="Btn-Down" onClick={props.clickDown}>
                <DetailsTwoToneIcon className="Icon-Down" />
            </div>
            {/*             
                <div className="Name">
                    {props.name}
                    <span> {props.age} </span>
                </div> */}
            <div className="CardInfo" >
                <div className="CardName">{props.name}</div>
                <div className="CardAge">{props.age}</div>
            </div>
            <div className="Located">
               <span><LocationOnIcon className="Icon-Locate"/></span>  39 kilometers away
            </div>
            <div className="bio">
                {props.bio}
            </div>
            <div>
               <Container>
                    <Row >
                        <Col className="Img-Gallery" sm={6} md={6}><img alt={props.name} src={props.avatar} width="100%" height="100px"/></Col>
                        <Col className="Img-Gallery" sm={6} md={6}><img alt={props.name} src={props.avatar} width="100%" height="100px"/></Col>                    
                    </Row>
                    <Row >
                        <Col className="Img-Gallery" sm={6} md={6}><img alt={props.name} src={props.avatar} width="100%" height="100px"/></Col>                 
                        <Col className="Img-Gallery" sm={6} md={6}><img alt={props.name} src={props.avatar} width="100%" height="100px"/></Col>                 
                    </Row>
                </Container> 
            </div>
        </div>
        
    );
};
export default CardInfo;