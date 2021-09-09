# chubbyjs-pino-psr

[![CI](https://github.com/chubbyjs/chubbyjs-pino-psr/workflows/CI/badge.svg?branch=master)](https://github.com/chubbyjs/chubbyjs-pino-psr/actions?query=workflow%3ACI)
[![Coverage Status](https://coveralls.io/repos/github/chubbyjs/chubbyjs-pino-psr/badge.svg?branch=master)](https://coveralls.io/github/chubbyjs/chubbyjs-pino-psr?branch=master)
[![Infection MSI](https://badge.stryker-mutator.io/github.com/chubbyjs/chubbyjs-pino-psr/master)](https://dashboard.stryker-mutator.io/reports/github.com/chubbyjs/chubbyjs-pino-psr/master)
[![npm-version](https://img.shields.io/npm/v/@chubbyjs/chubbyjs-pino-psr.svg)](https://www.npmjs.com/package/@chubbyjs/chubbyjs-pino-psr)

[![bugs](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-pino-psr&metric=bugs)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-pino-psr)
[![code_smells](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-pino-psr&metric=code_smells)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-pino-psr)
[![coverage](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-pino-psr&metric=coverage)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-pino-psr)
[![duplicated_lines_density](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-pino-psr&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-pino-psr)
[![ncloc](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-pino-psr&metric=ncloc)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-pino-psr)
[![sqale_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-pino-psr&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-pino-psr)
[![alert_status](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-pino-psr&metric=alert_status)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-pino-psr)
[![reliability_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-pino-psr&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-pino-psr)
[![security_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-pino-psr&metric=security_rating)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-pino-psr)
[![sqale_index](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-pino-psr&metric=sqale_index)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-pino-psr)
[![vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-pino-psr&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-pino-psr)

## Description

A brigde from [pino][2] to [psr-log][3].

## Requirements

 * node: 12
 * [@chubbyjs/psr-log][4]: ^1.0.3
 * [@types/pino][5]: ^6.3.11
 * [pino][6]: ^6.13.2

## Installation

Through [NPM](https://www.npmjs.com) as [@chubbyjs/chubbyjs-pino-psr][1].

```sh
npm i @chubbyjs/chubbyjs-pino-psr@1.0.0
```

## Usage

```ts
import PinoPsrLogger from '@chubbyjs/chubbyjs-pino-psr/dist/PinoPsrLogger';
import LogLevel from '@chubbyjs/psr-log/dist/LogLevel';
import * as pino from 'pino';

const pinoPsrLogger = new PinoPsrLogger(
    pino({
        level: 'debug',
    }),
);

pinoPsrLogger.log(LogLevel.INFO, 'message to log', {key: 'value'});
```

## Copyright

Dominik Zogg 2021

[1]: https://www.npmjs.com/package/@chubbyjs/chubbyjs-pino-psr
[2]: https://www.npmjs.com/package/pino
[3]: https://www.npmjs.com/package/@chubbyjs/psr-log
[4]: https://www.npmjs.com/package/@chubbyjs/psr-log
[5]: https://www.npmjs.com/package/@types/pino
[6]: https://www.npmjs.com/package/pino
