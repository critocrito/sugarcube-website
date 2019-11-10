---
path: "/plugins/test_generate"
title: "test_generate"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-test#readme"
tags: ["data","sugarcube","sugarcube-plugin","transformation"]
---
# test_generate plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-test
```


## Usage

Generate random data using the `data` generator from the `@sugarcube/test`
package.

**Configuration Options:**

-   `test.data_size`: Specify the amount of units to generate. The actual number of units produced can be less than specified because units with duplicate `_sc_id_hash` values are merged.
