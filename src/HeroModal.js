import {Component} from "react";
import "./HeroModal.css";

class HeroModal extends Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.closeModal();
    }


    render(){
        return(
            <div className = "HeroModal">
                <div className = "HeroModal-container">
                    <div className = "HeroModal-info-container">
                        <h1>{this.props.name}</h1>
                        <h3>{this.props.game}</h3>
                        <p>{this.props.description}</p>

                        <div className = "HeroModal-info-container-btn">
                            <button onClick = {this.handleClick}>Close</button>
                        </div>
                    </div>
                    <div className = "HeroModal-img-container">
                        <img className = "HeroModal-img" src = {this.props.profile} alt = {this.props.name}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default HeroModal;