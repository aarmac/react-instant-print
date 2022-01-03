# React Instant Print

A instant print styled image component using [CSSGram](https://github.com/una/CSSgram) filters.

## Usage

```
<InstantPrint
  altText="A random placeholder image"
  captionText="Something"
  fadeDuration="360s"
  filter="xpro2"
  src="https://picsum.photos/300/300"
/>
```

## Props

```
altText: string // required
captionText: string
fadeDuration: string // default: '60s'
filter: string
height: number // default: 300
src: string // required
width: number // default: 300
```

## Filters

The following filters can be used for the component's `filter` prop. See the [CSSGram demo page](https://una.im/CSSgram/) for examples.

```
_1977
aden
brannan
brooklyn
clarendon
earlybird
gingham
hudson
inkwell
kelvin
lark
lofi
maven
mayfair
moon
nashville
perpetua
reyes
rise
slumber
stinson
toaster
valencia
walden
willow
xpro2
```

## Future

- Preset film formats
- Optional controls (reset, speed)
- Scaling caption font size