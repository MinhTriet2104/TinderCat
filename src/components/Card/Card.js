import React from "react";
import CardInfo from '../CardInfo/CardInfo';
import "./Card.scss";

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};    
    this.handleClick = this.handleClick.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);
  }
  handleClickDown() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  } 
  render(){
    return (
      <div className="Card" >
        <div
          className="CardImage"
          style={{
            backgroundImage: `url(https://i.pinimg.com/564x/fa/a2/b8/faa2b89e8b3889bbf7310b113e74ced9.jpg)`,
          }}
        ></div>
        <div className="CardMask"></div>
        <div className="CardBody" >
          <div className="CardInfo" >
            <div className="CardName">Cat</div>
            <div className="CardAge">5</div>
          </div>
          <div className="CardDescription">
            “I have studied many philosophers and many cats. The wisdom of cats is
            infinitely superior.”
          </div>
          <svg
            viewBox="0 0 24 24"
            width="26px"
            height="26px"
            focusable="false"
            aria-hidden="false"
            aria-labelledby="eac4136025b87a6e"
            role="img"
            onClick={this.handleClick}
          >
            <path
              fill="#fff"
              d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            ></path>
            <title id="profile">Open Profile</title>
          </svg>          
            {this.state.isToggleOn ? <CardInfo clickDown={this.handleClickDown}/> : ''}    
        </div>
      </div>
    );

  }
  
};

export default Card;
