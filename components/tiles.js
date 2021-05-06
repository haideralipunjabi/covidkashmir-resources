import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link";
export default function Tiles(){

    const TILES = [
        {"title": "Plasma","icon":["fas","shield-virus"],"link":"plasma"},
        {"title": "Hospitals", "icon":["fas","hospital"],"link":"hospital"},
        {"title": "Medicines","icon":["fas","syringe"],"link":"medicine"},
        {"title": "Oxygen","icon":["fas","lungs"],"link":"oxygen"},
        {"title": "Helplines","icon":["fas","phone"],"link":"helpline"},
        {"title": "Doctors","icon":["fas","user-md"],"link":"doctor"},
        {"title": "Meals","icon":["fas","utensils"],"link":"meal"},
        {"title": "Tweet SOS", "icon":["fab","twitter"],"link":"https://twitter.com/intent/tweet?text=%0A%0A%23SOSJK%20%23SOSKashmir%0A%40Altxk%20%40livenletdiepls%20%40thenotoriousimi%20%40COVIDKashmir%20%40Azzharmalik%20%40jkcovid2021%20%40rj_vijdan%20%40sro_kashmir%20%40Athrout_Kashmir%20"},
        {"title": "CovidReliefJK", "icon":["fas","user-shield"], "link":"https://covidrelief.jk.gov.in/"},
        {"title": "Other Links", "icon":["fas","external-link-alt"], "link":"https://linktr.ee/KashmirCovidResources"}
    ]

    return (
        <div className="tiles-grid-container">
            <div className="tiles-grid">
                {
                    TILES.map((tile,key)=>{
                        if(tile.link.startsWith("http")) {
                            return (
                                <a href={tile.link} key={key} target="_blank" rel="noopener noreferrer">
                                <Tile tile={tile}/>
                                </a>
                            )
                        }
                        return (
                            <Link href={tile.link} key={key}>
                                <a>
                                <Tile tile={tile}/>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

function Tile({tile}) {
    return (
        <div className="tile">
                <span className="icon"><FontAwesomeIcon icon={tile.icon}/></span>
                <span className="title">{tile.title}</span>
        </div>
    )
}