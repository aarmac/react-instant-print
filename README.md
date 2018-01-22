# Reactaroid

A Polaroid-style image component that implements [CSSGram](https://github.com/una/CSSgram) for Instagram-style filters.

## Usage

```
<Reactaroid alt="A bear" caption="A bear" src="https://placebear.com/600/600" />
```

## Props

```
alt: string // required
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