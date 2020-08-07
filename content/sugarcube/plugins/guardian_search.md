---
path: "/sugarcube/plugins/guardian_search"
title: "guardian_search"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-guardian#readme"
tags: ["data","guardian","news","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# guardian_search plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-guardian
```

### Register for an API key

Browse to the [Sign-Up page](https://bonobo.capi.gutools.co.uk/register/developer). You need to specify a valid Email. The API key will be send to you.


## Usage

This plugin searches the Guardian archive. The query type is `guardian_search`.

**Configuration:**

-   `guardian.key`: The API key you received after signing up.

**Example:**

```shell
$(npm bin)/sugarcube -p guardian_search \
                     -Q guardian_search:Keith\ Johnstone \
                     --guardian.key <your API key>
```
