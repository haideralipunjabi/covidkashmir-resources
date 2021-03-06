import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
import { isTwitter, isURL } from "../utils/utils";

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
  const cardRef = useRef();
  const [showFooter, setShowFooter] = useState(false);
  const downloadCard = async () => {
    const scale = 3;
    const style = {
      transform: "scale(" + scale + ")",
      transformOrigin: "top left",
      width: cardRef.current.offsetWidth + "px",
      height: cardRef.current.offsetHeight + "px",
    };
    const param = {
      height: cardRef.current.offsetHeight * scale,
      width: cardRef.current.offsetWidth * scale,
      quality: 1,
      filter: (node) => node.id !== "downloadButton",
      style,
    };

    domtoimage.toBlob(cardRef.current, param).then((blob) => {
      saveAs(blob, `${title}.png`);
      setShowFooter(false);
    });
  };
  useEffect(() => {
    if (showFooter) downloadCard();
  }, [showFooter]);
  return (
    <div ref={cardRef} className="card relative">
      <span
        id="downloadButton"
        className="cursor-pointer absolute right-5 top-5 text-xl"
        onClick={() => {
          // downloadCard();
          setShowFooter(true);
        }}
      >
        <FontAwesomeIcon icon={["fas", "download"]} />
      </span>
      <div>
        <p className="title mr-5">{title}</p>
        <p className="subtitle">{subtitle}</p>
        {showType && <div className="text-lg italic">{type}</div>}
      </div>
      <div className="body">
        {notes.split("\\n").map((note) => (
          <p>{note}</p>
        ))}
        <div className="contacts">
          {contact
            .replace(/\s/, "")
            .replace(" ", "")
            .split(",")
            .map((c, idx) => {
              return (
                <div className="contact" key={idx}>
                  {isURL(c) && (
                    <a
                      className="icon"
                      href={c}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        {isTwitter(c) ? (
                          <FontAwesomeIcon icon={["fab", "twitter"]} />
                        ) : (
                          <FontAwesomeIcon icon={["fas", "globe-asia"]} />
                        )}
                      </span>
                      <span>
                        {isTwitter(c)
                          ? c.replace("https://twitter.com/", "")
                          : c.replace("https://", "").replace("http://", "")}
                      </span>
                    </a>
                  )}
                  {!isURL(c) && c.startsWith("wa-") && (
                    <a
                      href={`https://wa.me/${c.replace("wa-", "")}`}
                      className="icon"
                    >
                      <span>
                        <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                      </span>
                      <span>{c.replace("wa-91", "")}</span>
                    </a>
                  )}
                  {!isURL(c) && !c.startsWith("wa-") && (
                    <a className="icon" href={`tel:${c}`}>
                      <span>
                        <FontAwesomeIcon icon={["fas", "phone"]} />
                      </span>
                      <span>{c}</span>
                    </a>
                  )}
                </div>
              );
            })}
        </div>
        {(sourcetitle || sourcelink) && (
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
        )}
      </div>
      {showFooter && (
        <div className="mt-5 mb-10">
          <p className="absolute bottom-2 left-0 right-0 text-center">
            resources.covidkashmir.org
          </p>
        </div>
      )}
    </div>
  );
}
