import React from 'react'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">&copy; Shawn Baugh 2 | All Rights reserved</p>
  </footer>
)

Footer.propTypes = {
  timeout: React.PropTypes.bool,
}

export default Footer
