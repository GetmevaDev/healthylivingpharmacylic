import React from "react"
import {Link} from "gatsby"
import * as classes from "./card.module.scss"



export function Card ({data, classStyles}){



  return(
    data ?  <section className={classes.sectionCars}>
      <h3 className="pretitileSection">{data.Pretitle}</h3>
      <h2 className="titleSection">{data.Title}</h2>

      <div className={`container row ${classes.flexStyles}`}>
        {
          data.Cards.map(card => (
            <div
              className={`${classes.card} ${classStyles}`}
            >
              {
                card.icon ? <div className={classes.imageIcon}>

                  <img  className={classes.icon}  src={card.icon[0].url} alt={card.icon[0].alternativeText} />
                  <img className={classes.iconHover} src={card.icon[1].url} alt={card.icon[0].alternativeText} />

                </div> : null
              }
              {
                card.photo ? <div className="image-photo">
                  <img src={card.photo[0].url} alt={card.photo[0].alternativeText} />
                </div> : null
              }

              {
                card.title || card.name ? <h3 className={classes.titleCard}>{card.title || card.name}</h3> : null
              }
              {
                card.specialization ? <h4>{card.specialization}</h4> : null
              }
              {
                card.text ? <p className={classes.textCard}>{card.text}</p> : null
              }
              {
                card.link ? <Link className={classes.cardLink} to={card.link}>Read more</Link> : null
              }
            </div>
          ))
        }
      </div>

    </section> : null
  )
}