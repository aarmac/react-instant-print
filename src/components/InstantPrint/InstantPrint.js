import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const InstantPrint = ({ altText, caption, fadeDuration, filter, height, src, width }) => (
  <div className="instant-print--container">
    <figure
      className={`instant-print ${filter ? filter : 'nofilter'}`}
      style={{ height: height, width: width }}>
      <img alt={altText}
        className="instant-print--image"
        onLoad={event => event.target.classList.add('instant-print--image__loaded')}
        src={src}
        style={{ transitionDuration: fadeDuration }}
      />
    </figure>
    {caption && <figcaption className="instant-print--caption">{caption}</figcaption>}
  </div>
)

InstantPrint.propTypes = {
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  fadeDuration: PropTypes.string.isRequired,
  filter: PropTypes.oneOf([
    '_1977',
    'aden',
    'brooklyn',
    'gingham',
    'hudson',
    'inkwell',
    'lofi',
    'mayfair',
    'nashville',
    'perpetua',
    'reyes',
    'toaster',
    'walden',
    'xpro2'
  ]),
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  width: PropTypes.number
}

InstantPrint.defaultProps = {
  fadeDuration: '1s',
  height: 300,
  width: 300
}

export default InstantPrint