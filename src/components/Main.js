import React from 'react'
import Link from 'gatsby-link'

import heyyoupic from '../images/heyyoucard.png'
import ffwmpic from '../images/ffwmcard.png'
import honestycard from '../images/honestycard.png'
import damncard from '../images/damncard.png'
import mindgamescard from '../images/mindgamescard.png'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/aboutpic.png'

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
          <p>Hey You - Out Now on your favorite streaming services.</p>
          <span className="image main">
            <img src={ffwmpic} alt="" />
          </span>
          <p>
            First For Whats Mine - Out Now on your favorite streaming services.
          </p>
          <span className="image main">
            <img src={honestycard} alt="" />
          </span>
          <p>Honesty - Out Now on your favorite streaming services.</p>
          <span className="image main">
            <img src={damncard} alt="" />
          </span>
          <p>Damn - Out Now on your favorite streaming services.</p>
          <span className="image main">
            <img src={mindgamescard} alt="" />
          </span>
          <p>Mind Games - Out Now on your favorite streaming services.</p>
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
            <img src={pic03} alt="" />
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
