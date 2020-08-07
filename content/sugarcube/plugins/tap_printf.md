---
path: "/sugarcube/plugins/tap_printf"
title: "tap_printf"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-tap#readme"
tags: ["data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# tap_printf plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-tap
```


## Usage

```shell
$(npm bin)/sugarcube -c cfg.json -p twitter_feed,tap_printf
```

Prints the whole envelope (i.e. data and queries) and the full configuration
to the screen.

**Configuration**:

-   `tap.select` :: Specify the elements to print to the screen. Defaults to
    `data`. Valid values are `data`, `queries`, `stats`, `cache`, `plugins` and
    `cfg`. Specify multiple values by separating values by a comma.

    Example: Print only data and queries to the screen.

    `$(npm bin)/sugarcube -p tap_printf --tap.select data,queries`

-   `tap.limit` :: Limit the output to X data units.

    Example: Print only 5 units of data.

    `$(npm bin)/sugarcube -c cfg.json -p twitter_feed,tap_printf --tap.limit 5`

-   `tap.exclude` :: Exclude those fields from printing.

    `$(npm bin)/sugarcube -c cfg.json -p http_import,tap_printf --tap.exclude body,_sc_body`
