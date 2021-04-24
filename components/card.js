import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";

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
  const [showFooter,setShowFooter] = useState(false);
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

  useEffect(()=>{
      if(showFooter) downloadCard();

  }, [showFooter]);
  return (
    <div
      ref={cardRef}
      className="card relative"
     
    >
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
        <p>{notes}</p>
        <div className="contacts">
          {contact.split(",").map((number, idx) => {
            return (
              <div className="contact" key={idx}>
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
      {
      showFooter &&
      <div className="mt-5 mb-10">
        <p className="absolute bottom-2 left-0 right-0 text-center">resources.covidkashmir.org</p>
      </div>
      }
    </div>
  );
}
