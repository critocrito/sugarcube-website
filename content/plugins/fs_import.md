---
path: "/plugins/fs_import"
title: "fs_import"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-fs#readme"
tags: ["data","sugarcube","sugarcube-plugin","transformation"]
---
# fs_import plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-fs
```


## Usage

The query type is `glob_pattern`. It expands the glob pattern and turns every file into an unit. If possible, it extracts the body and meta data from the file using [Apache Tika](https://tika.apache.org/).

**Example:**

```shell
sugarcube -Q glob_pattern:path/to/files/** -p fs_import
```

**Configuration:**

-   `fs.extract_language`: Set the language to use for OCR extraction. The language code must be a [ISO 839-2 3 letter code](https://www.loc.gov/standards/iso639-2/php/code_list.php) and supported by [Tesseract](https://github.com/tesseract-ocr/tesseract/blob/master/doc/tesseract.1.asc#languages). Make sure to install the language pack for Tesseract as well. Example languages are: `eng` for English, `deu` for German and `ara` for Arabic. The default language is `eng`.

**Metrics:**

-   `total`: The total number of files imported.
-   `fail`: The number of files that failed to import.
-   `success`: The number files that succeeded to import.
