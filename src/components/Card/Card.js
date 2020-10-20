import React from "react";
import "./Card.scss";
import Link from "../../common/CustomLink";

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
    var name ="";
    var age = "";
    var avt = "";
    var urlbg = "url(";
    var des = "";
    var id="";
    var idCat = "/detail/";
   
    if(this.props.curCat != null)
    {      
      console.log(this.props.curCat);
         name = this.props.curCat.name;
         age = this.props.curCat.age;    
         avt = this.props.curCat.avatar;
         urlbg += avt+")";
         des = this.props.curCat.description;
         id = idCat + this.props.curCat.id;
    }
    else{
      name = '';
         age = '';    
         avt = '';
    }
    
    return (
      <div className="Card" >
        <div
          className="CardImage"
          style={{
            backgroundImage:  urlbg,
          }}
        ></div>
        <div className="CardMask"></div>
        <div className="CardBody" >
          <div className="CardInfo" >
            <div className="CardName">{name}</div>
            <div className="CardAge">{age}</div>
          <div>          
          </div> 
          </div>
          <div className="CardDescription">
            {des}
          </div>
          <Link to={id}>
            <svg
              viewBox="0 0 24 24"
              width="26px"
              height="26px"
              focusable="false"
              aria-hidden="false"
              aria-labelledby="eac4136025b87a6e"
              role="img"
            >
              <path
                fill="#fff"
                d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              ></path>
              <title id="profile">Open Profile</title>
            </svg> 
          </Link>        
            
        </div>
      </div>
    );

  }
  
};

export default (Card);
