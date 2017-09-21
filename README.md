# Curriculum Vitae #

This project is being used to demonstrate front-end capability using React as well as to explore and finalize a component library and modular development, build, and deploy process.

## Development Principals ##

### Structure ###
#### ./config ####
This is two files, only one of which is tracked in version control.

`production.config.js` expresses all of the values used by the `.ejs` templates to configure the output HTML and should be used to store any variables required by any module.

`local.config.js` is used as in the place of the production version if it exists. The purpse of this is to allow local development to express values without placing those values in the environment.

Although the exact methodology used should be tailored to the applications being build, it is advised that the `local.config.js` file use a pattern like:
```javascript
const productionConfig = require('production.config');
let localConfig = {};
module.exports = {
  global: Object.assign({}, productionConfig.global, localConfig.global)
};
```


#### ./ui/ ####
- `asset`: non-executable static files.
- `component`: generic UI elements. Should have no connection to any outside state. Require all values be passed in.
- `module`: functionally isolated application
- `partial`: sections of pages that may be re-used by several applications. Make minimal use on required outside state.
- `service`: vanilla modules that provide some needed functionality.
- `style`: global or project-wide configuration. Only `global.scss` should be allowed to directly output any CSS. (And this is in debate at the moment.)

#### ./views/ ####
This stores oll of the `.ejs` templates and partials needed to build the application. It is assumed by the build process that `base.ejs` exists as this is the tempalte that is used for freating the various output `.html` files for each Reach module.

Additional require `.html` files can be added to the build process and should 

## Style Development ##

### Colors
Colors are a two layer system intended to provide the most robust expressability plausable with standardized accessors.

First, provide color pallets as follows:

```scss
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

```scss
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
```scss
$fontPalettes: (
  openSansBoldItallic: (
    font-family: 'Open Sans',
    font-style: italic,
    font-weight: 600
  )
);
```

The `$typeSets` structure is intended for usage based rules as follows:
```scss
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
```scss
h1 {
  @include font (openSansBoldItallic);
  @include typeset (mainHeading);
}
```
