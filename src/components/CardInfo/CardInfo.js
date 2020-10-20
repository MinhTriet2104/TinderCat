import React, { useEffect, useState } from "react";
import "./CardInfo.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCats } from "../../helpers";
import Link from "../../common/CustomLink";

function CardInfo({ match }) {
  const [cats, setCats] = useState([]);
  var name, age, bio, avt;
  

  useEffect(() => {
    (async () => {
      const catsData = await getCats();
      setCats(catsData);
    })();
  }, []);
    var idCat = match.params;
    console.log(idCat.id);
  cats.map((el) => { 
      
    if (el.id === idCat.id +'') {      
      name = el.name;
      age = el.age;
      bio = el.bio;
      avt = el.avatar;
    }
  });
  return (
    <div className="Card-Info">
      <Link to="/">
        <img
          alt="next"
          className="toListItem"
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png"
        />
      </Link>
      <div className="CardInfo">
        <div className="CardName">{name}</div>
        <div className="CardAge">{age}</div>
      </div>
      <div className="Located">
        <span>
          <LocationOnIcon className="Icon-Locate" />
        </span>{" "}
        39 kilometers away
      </div>
      <div className="Bio">{bio}</div>
      <div>
        <Container>
          <Row>
            <Col className="Img-Gallery" sm={6} md={6}>
              <img alt="cat" src={avt} width="100%" height="100px" />
            </Col>
            <Col className="Img-Gallery" sm={6} md={6}>
              <img alt="cat" src={avt} width="100%" height="100px" />
            </Col>
          </Row>
          <Row>
            <Col className="Img-Gallery" sm={6} md={6}>
              <img alt="cat" src={avt} width="100%" height="100px" />
            </Col>
            <Col className="Img-Gallery" sm={6} md={6}>
              <img alt="cat" src={avt} width="100%" height="100px" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default CardInfo;
