import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const Reactaroid = ({ alt, caption, fadeDuration, filter, height, src, width }) => (
  <div className="reactaroid--container">
    <figure
      className={`reactaroid--${filter ? filter : 'nofilter'}`}
      style={{ height: height, width: width }}>
      <img alt={alt}
        onLoad={event => event.target.classList.add('reactaroid--loaded')}
        src={src}
        style={{ transitionDuration: fadeDuration }}
      />
    </figure>
    {caption && <figcaption>{caption}</figcaption>}
  </div>
)

Reactaroid.propTypes = {
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

Reactaroid.defaultProps = {
  fadeDuration: '1s',
  height: 300,
  width: 300
}

export default Reactaroid