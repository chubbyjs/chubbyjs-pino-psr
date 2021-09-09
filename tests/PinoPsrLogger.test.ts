import Call from '@chubbyjs/chubbyjs-mock/dist/Call';
import MockByCalls from '@chubbyjs/chubbyjs-mock/dist/MockByCalls';
import LogLevel from '@chubbyjs/psr-log/dist/LogLevel';
import { describe, test } from '@jest/globals';
import { Logger } from 'pino';
import PinoPsrLogger from '../src/PinoPsrLogger';
import LoggerDouble from './Double/LoggerDouble';

const mockByCalls = new MockByCalls();

describe('PinoPsrLogger', () => {
    test('emergency', () => {
        const message = 'message';
        const context = { key: 'value' };

        const pino = mockByCalls.create<Logger>(LoggerDouble, [Call.create('fatal').with(context, message)]);

        const logger = new PinoPsrLogger(pino);
        logger.emergency(message, context);
    });

    test('alert', () => {
        const message = 'message';
        const context = { key: 'value' };

        const pino = mockByCalls.create<Logger>(LoggerDouble, [Call.create('fatal').with(context, message)]);

        const logger = new PinoPsrLogger(pino);
        logger.alert(message, context);
    });

    test('critical', () => {
        const message = 'message';
        const context = { key: 'value' };

        const pino = mockByCalls.create<Logger>(LoggerDouble, [Call.create('fatal').with(context, message)]);

        const logger = new PinoPsrLogger(pino);
        logger.critical(message, context);
    });

    test('error', () => {
        const message = 'message';
        const context = { key: 'value' };

        const pino = mockByCalls.create<Logger>(LoggerDouble, [Call.create('error').with(context, message)]);

        const logger = new PinoPsrLogger(pino);
        logger.error(message, context);
    });

    test('warning', () => {
        const message = 'message';
        const context = { key: 'value' };

        const pino = mockByCalls.create<Logger>(LoggerDouble, [Call.create('warn').with(context, message)]);

        const logger = new PinoPsrLogger(pino);
        logger.warning(message, context);
    });

    test('notice', () => {
        const message = 'message';
        const context = { key: 'value' };

        const pino = mockByCalls.create<Logger>(LoggerDouble, [Call.create('warn').with(context, message)]);

        const logger = new PinoPsrLogger(pino);
        logger.notice(message, context);
    });

    test('info', () => {
        const message = 'message';
        const context = { key: 'value' };

        const pino = mockByCalls.create<Logger>(LoggerDouble, [Call.create('info').with(context, message)]);

        const logger = new PinoPsrLogger(pino);
        logger.info(message, context);
    });

    test('debug', () => {
        const message = 'message';
        const context = { key: 'value' };

        const pino = mockByCalls.create<Logger>(LoggerDouble, [Call.create('debug').with(context, message)]);

        const logger = new PinoPsrLogger(pino);
        logger.debug(message, context);
    });

    test('log', () => {
        const message = 'message';
        const context = { key: 'value' };

        const pino = mockByCalls.create<Logger>(LoggerDouble, [Call.create('info').with(context, message)]);

        const logger = new PinoPsrLogger(pino);
        logger.log(LogLevel.INFO, message, context);
    });
});
