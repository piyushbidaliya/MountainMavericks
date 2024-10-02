import React from "react";
import './trek.css';


const Trek = ({ imgurl, imgurl1, Title, Title1, aboutTitle, aboutTitle1, link, link2 }) => {
  return (
    <div className="trek-row1">
      <div className="trek-column1">
        <div className="trek-card">
          <img src={imgurl} alt="trek-sample2" loading="lazy"/>
          <div className="trek-container2">
            <h2 className="trek-Title">{Title}</h2>
            <p>{aboutTitle}</p>
            <a href={link}><p className="trek-subTitle1">View Details</p></a>

          </div>
        </div>
      </div>

      <div className="trek-column1">
        <div className="trek-card">
          <img src={imgurl1} alt="img1" loading="lazy"/>
          <div className="trek-container2">
            <h2 className="trek-Title">{Title1}</h2>
            <p>{aboutTitle1}</p>
            <a href={link2}><p className="trek-subTitle1">View Details</p></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trek;
