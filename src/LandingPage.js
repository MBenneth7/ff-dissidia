import React, {Component} from "react";
import "./LandingPage.css";
import bg from "./assets/images/dissidia-wall.png";
// import toggle from "./assets/images/menu.png";
// import close from "./assets/images/close.png"

class LandingPage extends Component{

    constructor(props){
        super(props)
        this.state = {activeClass: "", activeToggle: "", aboutPage: ""}
    }

    componentDidMount(){
        window.addEventListener("scroll", ()=>{
            let activeClass = "";
            if(window.scrollY > 0){
                activeClass = "LandingPage-sticky";
            }
            this.setState({activeClass : activeClass});
        })
    }
    
    render(){

        let about =  <div className = "LandingPage-about">
                        <h1>Made with Love & React</h1>
                        <p>This webpage was made for educational purposes. All content are properties of Square Enix</p>
                        <p>
                            Author: Mark Sayong <br/>
                            Email: Mbenneth7@yahoo.com
                        </p>
                    </div>

        return(
            <div className ={`LandingPage ${this.state.activeClass}`}>
                <img className = "LandingPage-bg" src = {bg} alt = "bg-img"/>
                <nav className = {`LandingPage-nav ${this.state.activeToggle !== "" ? "LandingPage-nav-active" : ""}`}>
                    <div>
                        <h1>FF Dissidia</h1>
                    </div>
                    <div className = {`LandingPage-toggle ${this.state.activeToggle}`} onClick = {()=>{
                        if(this.state.activeToggle === "")
                            this.setState({activeToggle : "LandingPage-toggleMenu"});
                        else    
                            this.setState({activeToggle : "", aboutPage: ""});
                    }}>      
                    </div>
                    <ul>
                        <li><a href ="#/">Learn More</a></li>
                        <li><a href ="#/">Buy Now</a></li>
                        <li><a href = "#/" onClick = {()=>{
                            if(this.state.aboutPage === "") this.setState({aboutPage: about})
                            else this.setState({aboutPage: ""})
                        }}>About</a></li>
                    </ul>
                    
                    {this.state.aboutPage}

                </nav>
            </div>
        )
    }
}

export default LandingPage;