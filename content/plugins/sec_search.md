---
path: "/plugins/sec_search"
title: "sec_search"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-sec#readme"
tags: ["data","sec","securities and exchange commission","sugarcube","sugarcube-plugin","transformation"]
---
# sec_search plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-sec
```


## Usage

Search the SEC for filings. Currently only SD forms are fetched. The query
type is `sec_search`;

```shell
sugarcube -Q sec_search:"Social Media" -p sec_search,tap_printf
```
