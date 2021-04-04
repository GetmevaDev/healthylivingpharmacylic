import React, {useState, useEffect} from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import { Logo } from "./Header-components/Logo/Logo"
import { SocialMedia } from "./Header-components/Social-Media/SocialMedia"
import { ButtonMenu } from "./Header-components/ButtonMenu/ButtonMenu"
import OutsideClickHandler from 'react-outside-click-handler';

import * as classes from "./headerStyle.module.scss"



const Header = ({marginSocialMedia}) => {


  const [handleMenu, setHandleMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false);


    useEffect(() =>{
      const handleScroll = () => {
        const isScrolled = window.scrollY > 73;
        if (isScrolled !== scrolled) {
          setScrolled(!scrolled);
        }
      };

      document.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        // clean up the event handler when the component unmounts
        document.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled])

  const data = useStaticQuery(graphql`
      {
          strapiNavigationMenu {
              Menu_Items {
                  Link_Page
                  Page
                  Submenu {
                      Link_Page
                      Page
                      id
                  }
                  id
              }
          }
      }
  `)

  return(
      <header data-active={scrolled} className={classes.siteHeader}>
        <div className={`container-big row  ${classes.flexStyles}`}>
          <Logo />
          <SocialMedia marginLeft={marginSocialMedia} className={classes.socialMedia} />
          <div style={{
            opacity: handleMenu ? 0.5 : 0,
            zIndex: handleMenu ? 0 : 11,
          }}
               className={classes.overlay}
          />


          <OutsideClickHandler onOutsideClick={() => {setHandleMenu(false)}}>
            <ButtonMenu  func={() => {setHandleMenu(!handleMenu)}} bool={handleMenu} />
            <nav style={{
              transform: handleMenu ? `translateX(0)` : `translateX(100%)`,
              transition: `.4s`,
            }} className={classes.navigationMenu}>
              <ul>
                {
                  data.strapiNavigationMenu.Menu_Items.map(item => (
                    <li key={item.id}>
                      <Link to={item.Link_Page}>{item.Page}</Link>
                      {
                        item.Submenu && item.Submenu.length !== 0 ? <ul
                          className={`${classes.submenu} ${classes.openSubmenu}`}>
                          {
                            item.Submenu.map(subitem => (
                              <li>
                                <Link to={subitem.Link_Page}>{subitem.Page}</Link>
                              </li>
                            ))
                          }
                        </ul> : null
                      }
                    </li>
                  ))
                }

              </ul>
            </nav>
          </OutsideClickHandler>
        </div>
      </header>
    )
}

export default Header
