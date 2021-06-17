# Claes Distribution Website [![Build Status](https://img.shields.io/travis/claes-distribution/website/master.svg )](https://travis-ci.org/claes-distribution/website) [![Known Vulnerabilities](https://snyk.io/test/github/claes-distribution/website/badge.svg)](https://snyk.io/test/github/claes-distribution/website) [![dependencies](https://status.david-dm.org/gh/claes-distribution/website.svg)](https://david-dm.org/claes-distribution/website) [![devDepenencies](https://status.david-dm.org/gh/claes-distribution/website.svg?type=dev)](https://david-dm.org/claes-distribution/website?type=dev) [![Maintainability](https://api.codeclimate.com/v1/badges/673debd507b01daa20ea/maintainability)](https://codeclimate.com/github/claes-distribution/website/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/673debd507b01daa20ea/test_coverage)](https://codeclimate.com/github/claes-distribution/website/test_coverage)

Claes distribution public Company website

## Table of contents
  - [Requirements](##-Requirements)
  - [Installation](##-Installation)
  - [Building](##-Building)
  - [Publishing](##-Publishing)

## Requirements
  - Angular 11
  - NodeJS 14

## Installation
  - Clone the repo `git clone git@github.com:claes-distribution/website.git`
  - Install dependencies `npm install`
  - Run test environment `ng serve --port 4200`
  - Run live environment `ng serve --port 4200 --prod`

## Building
  - Build project `ng build --prod`

## Publishing
  - Goto output dir `cd dist/claesdistribution-website/`
  - Connect to SFTP Servers `sftp 172.18.11.14` and `sftp 172.18.11.18`
  - Change working directory `cd /mnt/www/sites/claes-distribution.be/www.claes-distribution.be`
  - Put all files `put -r *`
