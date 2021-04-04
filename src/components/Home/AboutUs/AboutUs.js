import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import ReactMarkdown from 'react-markdown'
import Slider from "react-slick";
import { SliderCompanies } from "../../common/SliderCompanies/SliderCompanies"
import * as classes from "./aboutUs.module.scss"

export function AboutUs(){

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              About_Us {
                  Pretitle
                  Title
                  Text
                  Photo {
                      url
                      alternativeText
                  }
              }
          }
      }
  `)

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const about = data.strapiHomePage.About_Us;
  return(
    about ?  <section className={classes.sectionAbout}>
      <div className={`row ${classes.flexStyles}`}>
        <div className={classes.blockImages}>
          <Slider {...settings}>
            {
              about.Photo.map(item =>(
                <div className="classSlider">
                  <img src={item.url} alt={item.alternativeText}  />
                </div>


              ))
            }

          </Slider>
        </div>
        <div className={classes.blockTexts}>
          <h3 className={classes.pretitle}>{about.Pretitle}</h3>
          <h2 className={classes.title}>{about.Title}</h2>
          <ReactMarkdown className={classes.text} source={about.Text} />
          <Link className={classes.link} to={about.Link}>More About Us</Link>
        </div>
      </div>
      <div className="container">
        <SliderCompanies />
      </div>
    </section> : null
  )
}