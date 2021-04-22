import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="footer">
            A <a href="https://covidkashmir.org" target="_blank" rel="noopener noreferrer">CovidKashmir</a> Initiative
            <a className="mx-2" href="https://facebook.com/covidkashmir" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","facebook"]} /></a>
            <a className="mx-2" href="https://instagram.com/covidkashmir" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","instagram"]} /></a>
            <a className="mx-2" href="https://twitter.com/covidkashmir" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","twitter"]} /></a>
        </div>
    )
}