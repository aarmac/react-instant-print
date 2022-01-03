require("./index.css");
var $KNNtY$react = require("react");
var $KNNtY$proptypes = require("prop-types");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "InstantPrint", () => $fd9b9dd3036ec6ea$export$2e2bcd8739ae039);



const $fd9b9dd3036ec6ea$var$InstantPrint = ({ altText: altText , captionText: captionText , fadeDuration: fadeDuration , filter: filter , height: height , src: src , width: width  })=>/*#__PURE__*/ ($parcel$interopDefault($KNNtY$react)).createElement("div", {
        className: "instant-print"
    }, /*#__PURE__*/ ($parcel$interopDefault($KNNtY$react)).createElement("figure", {
        className: filter,
        style: {
            height: height,
            width: width
        }
    }, /*#__PURE__*/ ($parcel$interopDefault($KNNtY$react)).createElement("img", {
        alt: altText,
        onLoad: (event)=>event.target.classList.add('instant-print--loaded')
        ,
        src: src,
        style: {
            transitionDuration: fadeDuration
        }
    })), captionText && /*#__PURE__*/ ($parcel$interopDefault($KNNtY$react)).createElement("figcaption", null, captionText))
;
$fd9b9dd3036ec6ea$var$InstantPrint.propTypes = {
    altText: ($parcel$interopDefault($KNNtY$proptypes)).string.isRequired,
    captionText: ($parcel$interopDefault($KNNtY$proptypes)).string,
    fadeDuration: ($parcel$interopDefault($KNNtY$proptypes)).string.isRequired,
    filter: ($parcel$interopDefault($KNNtY$proptypes)).oneOf([
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
    height: ($parcel$interopDefault($KNNtY$proptypes)).number,
    src: ($parcel$interopDefault($KNNtY$proptypes)).string.isRequired,
    width: ($parcel$interopDefault($KNNtY$proptypes)).number
};
$fd9b9dd3036ec6ea$var$InstantPrint.defaultProps = {
    fadeDuration: '60s',
    height: 300,
    width: 300
};
var $fd9b9dd3036ec6ea$export$2e2bcd8739ae039 = $fd9b9dd3036ec6ea$var$InstantPrint;




//# sourceMappingURL=index.js.map
