import {Component} from "react"
import "./Hero.css";

class Hero extends Component{
    render(){
        return(
            <div className = "Hero">
                <img className = {`Hero-img ${this.props.imgStyle}`}  src = {this.props.hero} alt = "hero"/>
            </div>
        )
    }
}

export default Hero;