import React from "react"
import {Link} from "gatsby"



export function Card ({data, classStyles}){



  return(
    data ?  <section className={`sectionCars`}>
      <h3 className="pretitileSection">{data.Pretitle}</h3>
      <h2 className="titleSection">{data.Title}</h2>

      <div className={`container row flexStylesCard`}>
        {
          data.Cards.map(card => (
            <div
              className={`card ${classStyles}`}
            >
              {
                card.icon ? <div className={`image-icon`}>

                  <img  className={'icon'}  src={card.icon[0].url} alt={card.icon[0].alternativeText} />
                  <img className={'icon-hover'} src={card.icon[1].url} alt={card.icon[0].alternativeText} />

                </div> : null
              }
              {
                card.photo ? <div className="image-photo">
                  <img src={card.photo[0].url} alt={card.photo[0].alternativeText} />
                </div> : null
              }

              {
                card.title || card.name ? <h3 className={`titleCard`}>{card.title || card.name}</h3> : null
              }
              {
                card.specialization ? <h4>{card.specialization}</h4> : null
              }
              {
                card.text ? <p className={`textCard`}>{card.text}</p> : null
              }
              {
                card.link ? <Link className={`cardLink`} to={card.link}>Read more</Link> : null
              }
            </div>
          ))
        }
      </div>

    </section> : null
  )
}