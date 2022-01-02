# React Instant Print

A instant print styled image component using [CSSGram](https://github.com/una/CSSgram) filters.

## Usage

```
<InstantPrint
  altText="A bear"
  caption="A bear"
  fadeDuration="2s"
  filter="lofi"
  src="https://placebear.com/600/600"
/>
```

## Props

```
altText: string // required
caption: string
fadeDuration: string // default: '1s'
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
brooklyn
gingham
hudson
inkwell
lofi
mayfair
nashville
perpetua
reyes
toaster
walden
xpro2
```