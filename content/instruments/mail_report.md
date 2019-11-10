---
path: "/instruments/mail_report"
title: "mail_report"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.1"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-mail#readme"
tags: ["data","mail","sugarcube","sugarcube-plugin","transformation"]
---
# mail_report instrument

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-mail
```


## Usage

Mail a report at the end of a pipeline run. The report breaks down per plugin the statistics collected and includes a list of all failures that occurred. The failures are additionally attached as a CSV file. As a default all emails are gpp encrypted. For this you need to import all GPG keys of your recipients into the local keyring. You can opt-out of email encryption by setting the `mail.no_encrypt` to true.

**Configuration:**

-   `mail.recipients`: A list of email addresses that should receive the report.
-   `mail.no_encrypt`: Disable the gpg encryption for this run. Emails will be send in clear text. Every email is encrypted using gpg before sending. The `gpg` binary must be installed and the recipient's public key imported into the users keyring and be trusted. The email won't send if the encryption fails.
-   `mail.from`: Set this email address as sender in the `From:` header.
-   `mail.smtp_user`: Configure the user account for the SMTP server in use.
-   `mail.smtp_password`: Configure the password for the SMTP server in use.
-   `mail.smtp_host`: Configure the host name of the SMTP server in use.
-   `mail.smtp_port`: Configure the port of the SMTP server in use.
