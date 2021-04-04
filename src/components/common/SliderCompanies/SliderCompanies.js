import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Slider from "react-slick";

import * as classes from "./sliderCompanies.module.scss"

export function SliderCompanies(){

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              About_Us {
                  Companies {
                      Link
                      id
                      Image {
                          url
                          alternativeText
                      }
                  }
              }
          }
      }
  `)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  const about = data.strapiHomePage.About_Us;

  return(
    <div className="slider-company-styles">
      <Slider {...settings}>
        {
          about.Companies.map(item =>(
            <a className={classes.linkCompany} key={item.id} href={item.Link}>
              <img src={item.Image[0].url} alt={item.Image[0].alternativeText} />
            </a>
          ))
        }
      </Slider>
    </div>

  )
}