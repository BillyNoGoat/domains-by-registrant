# domains-by-registrar

A simple CLI which takes a domain registrant and provides all domains for the registrant

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

# Installation

After clone run `npm link` in the working directory and use
`domains-by-registrar` to use the CLI.

# Usage

```$ domains-by-registrar -h
USAGE
  $ domains-by-registrar

OPTIONS
  -h, --help                   show CLI help
  -p, --pretty
  -r, --registrant=registrant  (required)
  -v, --version                show CLI version
```

# Examples

Email example:

```domains-by-registrar -r "accounts@discordapp.com" -p
[
  {
    "domain": "discordapp.com",
    "creation": "2015-02-26",
    "registrar": "NAMECHEAP INC."
  },
  {
    "domain": "discordapp.net",
    "creation": "2015-08-14",
    "registrar": "ENOM, INC."
  }
]
```

Registrant name example:

```
domains-by-registrar -r "Discord, Inc." -p
[
  {
    "domain": "discordapp.com",
    "creation": "2015-02-26",
    "registrar": "NAMECHEAP INC."
  },
  {
    "domain": "discordapp.net",
    "creation": "2015-08-14",
    "registrar": "ENOM, INC."
  }
]
```
