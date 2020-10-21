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
          src="data:image/png;base64,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"
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
