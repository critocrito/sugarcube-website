---
path: "/sugarcube/plugins/regex_match"
title: "regex_match"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-regex#readme"
tags: ["data","sugarcube","sugarcube-plugin-regex","transformation"]
---
# regex_match plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-regex
```


## Usage

Match the contents of a field against one or more regular expression
queries. The query type is `regex_pattern`. Multiple queries are combined
using logical OR.

**Configuration Options**

-   `regex.field`: Specify the field to match.

```shell
sugarcube -Q google_search:Keith\ Johnstone,regex_pattern:company -p google_search,regex_match,tap_printf --regex.field description
```
