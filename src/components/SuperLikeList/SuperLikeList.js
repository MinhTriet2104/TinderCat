import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
//styles
import "./SuperLikeList.scss";
import {
  Dialog,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";

function SuperLikeList() {
  const SuperLikeListFromStore = useSelector((state) => state.superlikelist);
  const [superlikelist, setSuperLikelist] = useState([]);

  useEffect(() => {
    setSuperLikelist(SuperLikeListFromStore);
  }, [SuperLikeListFromStore]);

  const moveUp = (id) => {
    const findItem = superlikelist.find((item) => item.id === id);
    const index = superlikelist.indexOf(findItem);

    if (index === 0) return;

    const tempSuperLikeList = [...superlikelist];
    tempSuperLikeList.splice(index, 1);
    tempSuperLikeList.splice(index - 1, 0, findItem);
    setSuperLikelist(tempSuperLikeList);
  };

  const moveDown = (id) => {
    const findItem = superlikelist.find((item) => item.id === id);
    const index = superlikelist.indexOf(findItem);

    if (index === superlikelist.length - 1) return;
    const tempSuperLikeList = [...superlikelist];
    tempSuperLikeList.splice(index, 1);
    tempSuperLikeList.splice(index + 1, 0, findItem);
    setSuperLikelist(tempSuperLikeList);
  };

  //open dialog message
  const [isOpen, setDialogIsOpen] = useState(false);

  const handleClickOpen = () => {
    setDialogIsOpen(true);
  };

  const handleClickClose = () => {
    setDialogIsOpen(false);
  };

  return (
    <ul className="superlikelist" id="superLikeList">
      {superlikelist.map((spLike) => (
        <li key={spLike.id} className="row-sp-like">
          <Container>
            <Row>
              <Col md={3}>
                <img alt="avt" src={spLike.avatar} className="img-avatar"></img>
              </Col>
              <Col md={3} className="title-member">
                <Row>
                  <b>{spLike.name}</b>
                </Row>
                <Row className="dateSuperLike">
                  {spLike.superLikesAt.slice(0, 10)}
                </Row>
              </Col>
              <Col md={6}>
                <button onClick={() => handleClickOpen()} className="btn-icon">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_WGi9IBAs_4ZxNJ7mYLfGKae0VnP5f6eDsg&usqp=CAU"
                    className="img-icon"
                    alt="messages"
                  />
                </button>
                <Dialog
                  open={isOpen}
                  onClose={handleClickClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Tin nhắn</DialogTitle>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="inputMess"
                    fullWidth
                  />
                  <DialogActions>
                    <Button onClick={handleClickClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleClickClose} color="primary">
                      Send
                    </Button>
                  </DialogActions>
                </Dialog>
                <button className="btn-icon" onClick={() => moveUp(spLike.id)}>
                  <img
                    src="https://st2.depositphotos.com/5266903/8456/v/950/depositphotos_84568954-stock-illustration-arrow-up-flat-red-color.jpg"
                    className="img-icon"
                    alt="moveup"
                  />
                </button>
                <button
                  className="btn-icon"
                  onClick={() => moveDown(spLike.id)}
                >
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
