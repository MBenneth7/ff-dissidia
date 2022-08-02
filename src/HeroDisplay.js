import {Component} from "react";
import Hero from "./Hero";
import HeroModal from "./HeroModal";
import { v4 as uuidv4 } from 'uuid';
import cosmos from "./assets/images/cosmos-flip.png";
import ff1 from "./assets/images/profile/01-warrior-of-light.png";
import ff2 from "./assets/images/profile/02-firion.png";
import ff3 from "./assets/images/profile/03-onion-knight.png";
import ff4 from "./assets/images/profile/04-cecil-palidan.png";
import ff5 from "./assets/images/profile/05-bartz.png";
import ff6 from "./assets/images/profile/06-terra.png";
import ff7 from "./assets/images/profile/07-cloud.png";
import Tff7 from "./assets/images/profile/07-tifa.png";
import ff8 from "./assets/images/profile/08-leon.png";
import ff9 from "./assets/images/profile/09-zidane.png";
import ff10 from "./assets/images/profile/10-tidus.png";
import Yff10 from "./assets/images/profile/10-yuna.png";
import ff11 from "./assets/images/profile/11-shantoto.png";
import Pff11 from "./assets/images/profile/11-prishe.png";
import ff12 from "./assets/images/profile/12-vann.png";
import ff13 from "./assets/images/profile/13-lightning.png";

import "./HeroDisplay.css";

class HeroDisplay extends Component{

    static defaultProps = {
        // heroes : [ff1, ff2, ff3, ff4, ff5, ff6, ff7, Tff7, ff8, ff9, ff10, Yff10, ff11, Pff11, ff12,ff13],
        heroes : [
            {
                profile: ff1,
                name: "Warrior Of Light",
                description: "The Warrior of Light a recurring character in the Final Fantasy series, first appearing in Dissidia Final Fantasy and Dissidia 012 Final Fantasy. Though the Warrior of Light acts as a representative of the first Final Fantasy in the Dissidia series, he is an original character created for Dissidia with an origin that ties him closely to the game's lore. After the events of Dissidia, the Warrior travels to the world of Final Fantasy and becomes one of the Warriors of Light of that game. Since his debut, he has served as the primary representative for Final Fantasy in many other crossover titles.",
                game: "Final Fantasy",
                id : uuidv4()
            },
            {
                profile: ff2,
                name: "Firion",
                description: "Firion is a hero fighting for the side of Cosmos in Dissidia Final Fantasy and Dissidia 012 Final Fantasy. Representing Final Fantasy II, Firion is a young man skilled in armed combat with a variety of weapons. Passionate with an unshakable sense of justice, Firion fights for a world 'where wild roses can bloom freely,' symbolizing freedom from war and tyranny. His dream stands in opposition to the desires of his adversary, the Emperor. In Dissidia 012 Final Fantasy, Firion's fighting style was heavily re-balanced.",
                game: "Final Fantasy II",
                id : uuidv4()
            },
            {
                profile: ff3,
                name: "Onion Knight",
                description: "The Onion Knight is a recurring character in the Final Fantasy series. He first appeared in Dissidia Final Fantasy as a representative of Final Fantasy III, based on the Onion Knights of the original NES release of the game. Since then he has made many other appearances in spin-off titles as a representative of Final Fantasy III.",
                game: "Final Fantasy III",
                id : uuidv4()
            },
            {
                profile: ff4,
                name: "Cecil Harvey",
                description: "Cecil Harvey is a warrior of Cosmos in Dissidia Final Fantasy and Dissidia 012. He relies on experience as both a Dark Knight and a Paladin, and may freely switch between them during battle. When a Dark Knight, he is a formidable ground fighter, boasting short and long range moves. As a Paladin, aerial combat is his forte, combining speed with expert swordplay. While traveling alongside Firion, Cloud, and Tidus, Cecil deals with his feelings for Golbez, torn between fighting him as his nemesis and trusting him as his brother.",
                game: "Final Fantasy IV",
                id : uuidv4()
            },
            {
                profile: ff5,
                name: "Bartz",
                game: "Final Fantasy V",
                description: "Bartz Klauser is a hero fighting for the side of Cosmos in Dissidia Final Fantasy and Dissidia 012 Final Fantasy. Representing Final Fantasy V, Bartz is a courageous young man with a strong sense of justice who can mimic and combine the powers of Cosmos's other warriors in battle. Traveling with Squall and Zidane, he strives to defeat his nemesis, Exdeath.",
                id : uuidv4()
            },
            {
                profile: ff6,
                name: "Terra Branford",
                game: "Final Fantasy VI",
                description: "Terra Branford is a hero fighting on the side of Cosmos in Dissidia Final Fantasy, and is originally a warrior of Chaos in Dissidia 012 Final Fantasy. Representing Final Fantasy VI, she is a girl blessed, or cursed, with both the power of espers and magic. Terra's attacks are magical, but she can strike with both long- and short-range attacks. Terra was forced to serve Chaos against her will, but in the next cycle has forgotten these events and now fights on the side of Cosmos. Her nemesis, Kefka, taunts her about her forgotten past and attempts to sway her back to his services.",
                id : uuidv4()
            },
            {
                profile: ff7,
                name: "Cloud Strife",
                game: "Final Fantasy VII",
                description: "Cloud Strife was one of the warriors fighting for the side of Chaos in Dissidia 012 Final Fantasy, but in the next cycle he switched sides and fought alongside the warriors of Cosmos in Dissidia Final Fantasy. Cloud is a swordsman who deals powerful attacks that send his foes flying. Though in the eyes of his comrades he is considered composed, Cloud often questions the reasons and methods for fighting, as well as the purposes it would serve, and struggles to understand them. During the war he is forced to battle his nemesis, Sephiroth, who manipulates him into fighting at every turn.",
                id : uuidv4()
            },
            {
                profile: Tff7,
                name: "Tifa Lockhart",
                game: "Final Fantasy VII",
                description: "Tifa Lockhart is the third representative of Final Fantasy VII and a Warrior of Cosmos in Dissidia 012 Final Fantasy. She was a childhood friend of Cloud, and she worked alongside the resistance group AVALANCHE to bring down Shinra. When her father's killer, Sephiroth, resurfaced, she worked along with Cloud and their friends to fight him and save the Planet. When she was summoned to the wars of World B, her memory was erased, and knowledge of Cloud was taken from her. She keeps her hopes and dreams alive while confronting the forces of Chaos.",
                id : uuidv4()
            },
            {
                profile: ff8,
                name: "Squall Leonhart",
                game: "Final Fantasy VIII",
                description: "Squall Leonhart is a hero fighting on the side of Cosmos in Dissidia Final Fantasy and Dissidia 012 Final Fantasy. He is a cold taciturn youth who wields a gunblade, a weapon part sword and part gun. He is a master of combos, able to chain a myriad of attacks. Squall is a loner focused on finding the Crystals and defeating his nemesis, Ultimecia. During his travels, he is torn between fulfilling his duty and protecting his friends, Zidane and Bartz, who are being targeted by Ultimecia's allies.",
                id : uuidv4()
            },
            {
                profile: ff9,
                name: "Zidane Tribal",
                game: "Final Fantasy IX",
                description: "Zidane Tribal is one of the heroes fighting for the side of Cosmos in Dissidia Final Fantasy and Dissidia 012 Final Fantasy. Lithe and graceful, Zidane excels at midair battling, and can run rings around foes in arenas with few footholds. During his quest to find the Crystals, he befriends Bartz and Squall. However, his nemesis Kuja lays traps for them with the intent to make Zidane feel powerless and break his spirit.",
                id : uuidv4()
            },
            {
                profile: ff10,
                name: "Tidus",
                game: "Final Fantasy X",
                description: "Tidus is a minion of Chaos during Dissidia 012 Final Fantasy, but became a hero fighting for the side of Cosmos in Dissidia Final Fantasy. He also appears in Dissidia Final Fantasy NT and its arcade version. Tidus is a lighthearted, cheerful youth who follows his father's footsteps as an ace blitzball player for the Zanarkand Abes. Tidus is an agile fighter who easily dodges opponents' attacks as he performs his own. While he appears cheerful to his allies Firion, Cecil, and Cloud, his weak point is his emotions concerning his father and nemesis, Jecht. He seeks to fight and defeat his father to prove himself and settle his hatred.",
                id : uuidv4()
            },
            {
                profile: Yff10, 
                name: "Yuna",
                game: "Final Fantasy X",
                description: "Yuna is a Warrior of Cosmos and is the third representative for Final Fantasy X in Dissidia 012 Final Fantasy. She once traveled across her world of Spira as a summoner, obtaining the aid of various aeons, entities of great power, to help her in her fight against Sin. She had many guardians, among them Tidus. Yuna now uses her aeons as her primary fighting style in the battle against the forces of Chaos. She regained her memories of Tidus sometime during the cycle of wars, but sadly, he has lost all of his memories of her.",
                id : uuidv4()
            },
            {
                profile: ff11,  
                name: "Shantoto",
                game: "Final Fantasy XI",
                description: "Shantotto is an extra character in Dissidia Final Fantasy and Dissidia 012 Final Fantasy. A hero who fought in the Crystal War, Shantotto is a famous Tarutaru professor of magic from Windurst in Final Fantasy XI. She is known for her high-pitched, haughty laughter and overall arrogant nature. Shantotto is respected for her great power, but she refuses to admit it when she finds someone who could be superior. She fights using powerful spells that level up and become stronger as she gains Bravery.",
                id : uuidv4()
            },
            {
                profile: Pff11,    
                name: "Prishe",
                game: "Final Fantasy XI",
                description: "Prishe is a secret playable character in Dissidia 012 Final Fantasy, appearing with Shantotto as the second representative of Final Fantasy XI. Prishe is a combination Monk and White Mage and also fights with magic and weapon skills. In her world, she was once intended to be the vessel for Promathia, the Twilight God, until the darkness inside of her was crystallized, turning her immortal. Along with Selh'teus, Prishe was instrumental in Promathia's destruction. Like Shantotto, Prishe is a warrior of Cosmos and, as a secret character, she has no impact on the main storyline and no villain opposing her. However, she is mostly responsible for recruiting the Warrior of Light to Cosmos's side.",
                id : uuidv4()
            },
            {
                profile: ff12,
                name: "Vann",
                game: "Final Fantasy XII",
                description: "Vaan is one of the new characters introduced in Dissidia 012 Final Fantasy. Vaan is a young man who lived on the streets of Rabanastre and dreamed of being a sky pirate. He and five comrades all fought together to free their world, Ivalice, from Archadian rule. He wields a variety of weapons and his EX Burst is based on his Quickenings from Final Fantasy XII.",
                id : uuidv4()
            },
            {
                profile: ff13,
                name: "Claire Farron (Lightning)",
                description: "Lightning is the sole representative from Final Fantasy XIII introduced in Dissidia 012 Final Fantasy. With the aid of five comrades, she once stopped a nefarious plot by the fal'Cie to destroy her world, Cocoon, defying her Focus and challenging her fate of eternal servitude. Lightning fights by using three paradigm roles from her original title, combining gunblade attacks, elemental magic, and healing abilities. Lightning is the main protagonist of the Dissidia 012 storyline as she leads the other five new heroes in their battle against the manikins. To keep in with her role as the leader of the new heroes, her main rival is Garland, the leader of the villains.",
                game: "Final Fantasy XIII",
                id : uuidv4()
            },
        ]
    }

    constructor(props){
        super(props)
        this.state = {
            popUp : false,
            modal : null
        }
        this.closeModal= this.closeModal.bind(this);
    }

    closeModal(){
        this.setState({
            modal: null,
            popUp : !this.state.popUp
        })
    }

    render(){

        let heroes = this.props.heroes.map((h,i)=>(

                <button className = "HeroDisplay-btn" onClick = {this.state.popUp ? undefined  : (h)=>{
                    let hero = this.props.heroes[i];

                        this.setState({
                            popUp: !this.state.popUp,
                            modal : <HeroModal
                                        name = {hero.name}
                                        game = {hero.game}
                                        profile = {hero.profile}
                                        description = {hero.description}
                                        closeModal = {this.closeModal}
                                    />
                        })
                }}>
                    <Hero 
                        hero = {h.profile}
                        imgStyle = {`ff-${i}`}
                        key = {h.id}
                    />
                </button>
            ))

        return(
            <div className = {`HeroDisplay ${this.state.popUp ? "HeroDisplay-overlay" : ""}`}>
               <img className = "HeroDisplay-bg" src = {cosmos} alt = "cosmos-bg"/> 
               <div className = "HeroDisplay-hero-container">
                    {heroes}
               </div>
                {this.state.modal}
            </div>
        )
    }
}

export default HeroDisplay;