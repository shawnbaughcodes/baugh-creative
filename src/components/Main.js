import React from 'react'
import Link from 'gatsby-link'

import heyyoupic from '../images/heyyoucard.png'
import ffwmpic from '../images/ffwmcard.png'
import honestycard from '../images/honestycard.png'
import damncard from '../images/damncard.png'
import mindgamescard from '../images/mindgamescard.png'
import aboutpic from '../images/aboutpic.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Music</h2>
          <span className="image main">
            <img src={heyyoupic} alt="" />
          </span>
          <p className="music-link-wrapper">
            Hey You - Out Now on your favorite streaming services:
            <a
              className="music-link-icons"
              href="https://itunes.apple.com/us/album/hey-you/1400481669?i=1400482098"
            >
              <i className="fa fa-apple" />
            </a>
            <a
              className="music-link-icons"
              href="https://open.spotify.com/track/7I7RXmMSAw3EvX2Z7LL2Wg?si=SBDNr4DDSRizO_xNcLUkFQ"
            >
              <i className="fa fa-spotify" />
            </a>
            <a className="music-link-icons" href="https://youtu.be/94biphTTihc">
              <i className="fa fa-youtube" />
            </a>
            <a
              className="music-link-icons"
              href="https://soundcloud.com/shawnbaugh2/hey-you"
            >
              <i className="fa fa-soundcloud" />
            </a>
          </p>
          <span className="image main">
            <img src={ffwmpic} alt="" />
          </span>
          <p>
            Fight For Whats Mine - Out Now on your favorite streaming services.
            <a
              className="music-link-icons"
              href="https://itunes.apple.com/us/album/fight-for-whats-mine/1396625768?i=1396626067"
            >
              <i className="fa fa-apple" />
            </a>
            <a
              className="music-link-icons"
              href="https://open.spotify.com/track/07kOk59ZeugKbwzmeNd67X?si=vUb8fwchTTm72_Pn2_GQQg"
            >
              <i className="fa fa-spotify" />
            </a>
            <a className="music-link-icons" href="https://youtu.be/guA5jfahoX0">
              <i className="fa fa-youtube" />
            </a>
            <a
              className="music-link-icons"
              href="https://soundcloud.com/shawnbaugh2/fight-for-whats-mine"
            >
              <i className="fa fa-soundcloud" />
            </a>
          </p>
          <span className="image main">
            <img src={honestycard} alt="" />
          </span>
          <p>
            Honesty - Out Now on your favorite streaming services.
            <a
              className="music-link-icons"
              href="https://itunes.apple.com/us/album/honesty/1391471370?i=1391471396"
            >
              <i className="fa fa-apple" />
            </a>
            <a
              className="music-link-icons"
              href="https://open.spotify.com/track/7DDBpwrHVJH8McnE3yeSUH?si=K9hnYA6XRdywdyHWvvX9Yw"
            >
              <i className="fa fa-spotify" />
            </a>
            <a className="music-link-icons" href="https://youtu.be/Vo694p67BXQ">
              <i className="fa fa-youtube" />
            </a>
            <a
              className="music-link-icons"
              href="https://soundcloud.com/shawnbaugh2/honesty"
            >
              <i className="fa fa-soundcloud" />
            </a>
          </p>
          <span className="image main">
            <img src={mindgamescard} alt="" />
          </span>
          <p>
            Mind Games - Out Now on your favorite streaming services.
            <a
              className="music-link-icons"
              href="https://itunes.apple.com/us/album/mind-games/1386947197?i=1386947198"
            >
              <i className="fa fa-apple" />
            </a>
            <a
              className="music-link-icons"
              href="https://open.spotify.com/track/68iAYtudqNBtJaxhnSDDuG?si=rb4u-hrjQR6Wonhk7-__ww"
            >
              <i className="fa fa-spotify" />
            </a>
            <a className="music-link-icons" href="https://youtu.be/79H35UfztA0">
              <i className="fa fa-youtube" />
            </a>
            <a
              className="music-link-icons"
              href="https://soundcloud.com/shawnbaugh2/mind-games"
            >
              <i className="fa fa-soundcloud" />
            </a>
          </p>
          <span className="image main">
            <img src={damncard} alt="" />
          </span>
          <p>
            Damn - Out Now on your favorite streaming services.
            <a
              className="music-link-icons"
              href="https://itunes.apple.com/us/album/damn/1391460057?i=1391460059"
            >
              <i className="fa fa-apple" />
            </a>
            <a
              className="music-link-icons"
              href="https://open.spotify.com/track/1GQHOAX8vej8xMAcTAw0fF?si=22_Fnd-MRbWNh5pbWoI66Q"
            >
              <i className="fa fa-spotify" />
            </a>
            <a className="music-link-icons" href="https://youtu.be/SeP1WRtvA5I">
              <i className="fa fa-youtube" />
            </a>
            <a
              className="music-link-icons"
              href="https://soundcloud.com/shawnbaugh2/damn"
            >
              <i className="fa fa-soundcloud" />
            </a>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Videos</h2>
          <span className="image main">
            <iframe
              width="560"
              height="215"
              src="https://www.youtube.com/embed/TYIPA7z2tHs"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </span>
          <p>Check IDEAS | EPISODE 1.</p>
          <span className="image main">
            <iframe
              width="560"
              height="215"
              src="https://www.youtube.com/embed/KnpA2Ggvh0U"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </span>
          <p>Check out how I created my song Hey You.</p>
          <span className="image main">
            <iframe
              width="560"
              height="215"
              src="https://www.youtube.com/embed/_sDkmb2Ftz0"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </span>
          <p>Check out how I created this unreleased song.</p>
          <span className="image main">
            <iframe
              width="560"
              height="215"
              src="https://www.youtube.com/embed/VmglFi-6u_M"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </span>
          <p>Check out how I created my song Mind Games.</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={aboutpic} alt="" />
          </span>
          <p>
            Born and raised from Fresno, CA, I've always been intrigued by music
            and performing. I grew up in a very musical home and was always
            either playing music or playing tennis.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/baughcreative"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/baughcreative"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/baughcreative"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
