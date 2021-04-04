import React from "react"

import Slider from "react-slick";

import * as classes from "./sectionHeader.module.scss"


export default function SectionHeader({pretitle, title, specialization, text, linkReadMore, images, image, classSection}){

  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return(
    <section className={`${classes.sectionHeader} ${classSection}`}>
      <div className={`container-big row ${classes.flexStyles}`}>
        <div className={classes.blockText}>
          {
            pretitle ? <>
              <h4 className={classes.pretitle}>{pretitle}</h4>
            </> : null
          }
          {
            title ? <>
            <h2 className={classes.title}>{title}</h2>
            </> : null
          }
          {
            title ? <>
              <h3 className={classes.specialization}>{specialization}</h3>
            </> : null
          }

          {
            text ? <>
            <p className={classes.text}>{text}</p>
            </> : null
          }
          {
            linkReadMore ? <>
              <a className={classes.link} href={linkReadMore}>Read More</a>
            </> : null
          }
        </div>
        {
          images ? <div className={`${classes.blockImages } slider-styles`}>

            <Slider {...settings}>
              {
                images.map(img => (
                  <img src={img.url} alt={img.alternativeText} />
                ))
              }
            </Slider>


          </div> : null
        }
        {
          image ? <div className={classes.blockPhoto}>
            <img src={image[0].url} alt={image[0].alternativeText} />
          </div> : null
        }
        {
          !images && !image ?   <iframe
            className={classes.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.540836208673!2d-73.94290068459388!3d40.750127979327715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258d5ebd00001%3A0x502036dda620abfc!2sHealthy%20Living%20Pharmacy%20LIC!5e0!3m2!1sru!2s!4v1615990462387!5m2!1sru!2s"
            width="600" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy"
          /> : null
        }

      </div>
    </section>
  )
}