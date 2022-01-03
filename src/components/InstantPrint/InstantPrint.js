import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const InstantPrint = ({ altText, captionText, fadeDuration, filter, height, src, width }) => (
  <div className="instant-print">
    <figure
      className={filter}
      style={{ height: height, width: width }}>
      <img
        alt={altText}
        onLoad={event => event.target.classList.add('instant-print--loaded')}
        src={src}
        style={{ transitionDuration: fadeDuration }}
      />
    </figure>
    {captionText && <figcaption>{captionText}</figcaption>}
  </div>
)

InstantPrint.propTypes = {
  altText: PropTypes.string.isRequired,
  captionText: PropTypes.string,
  fadeDuration: PropTypes.string.isRequired,
  filter: PropTypes.oneOf([
    '_1977',
    'aden',
    'brannan',
    'brooklyn',
    'clarendon',
    'earlybird',
    'gingham',
    'hudson',
    'inkwell',
    'kelvin',
    'lark',
    'lofi',
    'maven',
    'mayfair',
    'moon',
    'nashville',
    'perpetua',
    'reyes',
    'rise',
    'slumber',
    'stinson',
    'toaster',
    'valencia',
    'walden',
    'willow',
    'xpro2',
  ]),
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  width: PropTypes.number
}

InstantPrint.defaultProps = {
  fadeDuration: '60s',
  height: 300,
  width: 300
}

export default InstantPrint