# Phae Kit #

This is a component and pattern library in development for React front-end projects.

During development, this was seeded directly from the in-progress Novum-Sidus project with some aspects taken from the deprecated front-end of the Plinth project.

Where possible, the design intention and understandings will be communicated in documentation within the code while more lengthy explanations about large reaching subjects will be explained in specific docuemnts that may be referenced in code comments.

## Architecture ##
First, terminology:

In React, everything is a component, so a collection of 'components' without explanation is rather ambiguous. So, for our purposes, a component is as follows:

###### A small piece of a larger thing that operates without any explicitly provided directly to it. ######

This self imposed restriction is intended to reduce internal complexity of individual components by concentrating that level of logic into the view or partial layers that are application or use specific.

Most components will wrap a base component. The base component is intended to offer universal functionality across a collection of similar components and should never be instantiated directly in a view or partial.

### Folder Structure ###
- `components`: contains all the generic UI elements.
- `partials`: expresses higher level interactive components that may be use-case specific.
- `services`: These are standard JS files that provide some processing assistance or access into external systems like HTTP request and local browser storage.
- `styles`: Being deprecated. The style code should live adjacent to the component.
- `views`: represents the complete pages. This is the highest level within the application and uses URI based routing over state based routing.


## SVG Assets ##
All included SVG assets should be run through an optimizer like the one at `https://simon.html5.org/tools/js/svg-optimizer/`, and use a uniform viewport size.


## Style Development ##

### Colors
Colors are a two layer system intended to provide the most robust expressability plausable with standardized accessors.

First, provide color pallets as follows:

```
$color-palettes: (
  grey: (
    50: #FAFAFA,
    100: #F5F5F5,
    200: #EEEEEE,
    300: #E0E0E0,
    400: #BDBDBD,
    500: #9E9E9E,
    600: #757575,
    700: #616161,
    800: #424242,
    900: #212121
  )
);
```

The idea here is to provide a large number of defined colors to choose from for your needs. Then we reference these colors by usage as follows:

```
$theme-colors: (
  container: (
    background: (grey, 500),
    foreground: (grey, 900),
    highlight: (grey, 50)
  )
);
```

The color can then be accessed using `color(container, background)`.

The thinking behind the design is that the usage of a color will alter over time, while the original color is still in use in other parts of the code. This makes usage of a single layer, or a variable based design, require larger code adjustments over time.

### Typography
There are two typographic structures available for implementing text types. There are no specific restrictions that enforces a that any specific declaration be placed in one structure or the other. It is, however, advised that the declarations be divided into one batch that defines the font and another that defines the usage of the font.

The design intention is to place the definition declarations in the `$fontPallets` structure as follows:
```
$fontPalettes: (
  openSansBoldItallic: (
    font-family: 'Open Sans',
    font-style: italic,
    font-weight: 600
  )
);
```

The `$typeSets` structure is intended for usage based rules as follows:
```
$typeSets: (
  mainHeading: (
    color: #f0f,
    font-size: 72px,
    letter-spacing: -0.5px,
    line-height: 72px
  )
);
```

Actual usage of these two structures is to reference the `font` and `typeset` mixins as follows:
```
h1 {
  @include font (openSansBoldItallic);
  @include typeset (mainHeading);
}
```
