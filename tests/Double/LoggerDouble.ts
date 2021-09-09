import { Bindings, LevelChangeEventListener, LevelMapping, LogFn, Logger } from 'pino';

// @ts-ignore
class LoggerDouble implements Logger {
    fatal(msg: string, ...args: any[]): void {
        throw new Error('Method not implemented.');
    }

    error(msg: string, ...args: any[]): void {
        throw new Error('Method not implemented.');
    }

    warn(msg: string, ...args: any[]): void {
        throw new Error('Method not implemented.');
    }

    info(msg: string, ...args: any[]): void {
        throw new Error('Method not implemented.');
    }

    debug(msg: string, ...args: any[]): void {
        throw new Error('Method not implemented.');
    }
}

export default LoggerDouble;
