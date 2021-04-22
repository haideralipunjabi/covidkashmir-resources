import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getNumbers } from "../utils/utils";
export default function Card(props) {
  const {
    title,
    subtitle,
    notes,
    contact,
    sourcetitle,
    sourcelink,
    tags,
    type,
    showType,
  } = props;
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
      {showType && <div className="text-lg italic">{type}</div>}
      <div className="body">
        <p>{notes}</p>
        <div className="contacts">
          {contact.split(",").map((number, idx) => {
              return (
                <div
                  className="contact"
                  key={idx}
                >
                  <a className="icon" href={`tel:${number}`}>
                    <span>
                      <FontAwesomeIcon icon={["fas", "phone"]} />
                    </span>
                    <span>{number}</span>
                  </a>
                </div>
              );
            })}
        </div>
        <p>
          Source:{" "}
          <a
            className="sourceLink italic"
            href={sourcelink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sourcetitle || sourcelink}
          </a>
        </p>
      </div>
    </div>
  );
}
