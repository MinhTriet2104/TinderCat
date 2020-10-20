import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
//styles
import "./SuperLikeList.scss";

function SuperLikeList(props) {
  const superlikelist = useSelector((state) => state.superlikelist);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <ul className="superlikelist" id="superLikeList">
      {superlikelist.map((spLike) => (
        <li key={spLike.id} className="row-sp-like">
          <Container>
            <Row>
              <Col md={3}>
                <img src={spLike.avatar} className="img-avatar"></img>
              </Col>
              <Col md={3} className="title-member">
                <Row>
                  <b>{spLike.name}</b>
                </Row>
                <Row className="dateSuperLike">
                  {spLike.createdAt.slice(0, 10)}
                </Row>
              </Col>
              <Col md={6}>
                <button
                  onClick={() => setModalIsOpen(true)}
                  className="btn-icon"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_WGi9IBAs_4ZxNJ7mYLfGKae0VnP5f6eDsg&usqp=CAU"
                    className="img-icon"
                    alt="messages"
                  />
                </button>
                <button className="btn-icon">
                  <img
                    src="https://st2.depositphotos.com/5266903/8456/v/950/depositphotos_84568954-stock-illustration-arrow-up-flat-red-color.jpg"
                    className="img-icon"
                    alt="moveup"
                  />
                </button>
                <button className="btn-icon">
                  <img
                    src="https://st2.depositphotos.com/5266903/8456/v/950/depositphotos_84568938-stock-illustration-arrow-down-flat-red-color.jpg"
                    className="img-icon"
                    alt="movedown"
                  />
                </button>
              </Col>
            </Row>
          </Container>
        </li>
      ))}
      <p></p>
    </ul>
  );
}

export default SuperLikeList;
