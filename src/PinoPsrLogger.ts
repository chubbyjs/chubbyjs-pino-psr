import AbstractLogger from '@chubbyjs/psr-log/dist/AbstractLogger';
import LogLevel from '@chubbyjs/psr-log/dist/LogLevel';
import { Logger } from 'pino';

class PinoPsrLogger extends AbstractLogger {
    constructor(private pino: Logger) {
        super();
    }

    public log(level: LogLevel, message: string, context: Record<string, any>): void {
        if (level === LogLevel.DEBUG) {
            this.pino.debug(context, message);

            return;
        }

        if (level === LogLevel.INFO) {
            this.pino.info(context, message);

            return;
        }

        if (level === LogLevel.NOTICE || level === LogLevel.WARNING) {
            this.pino.warn(context, message);

            return;
        }

        if (level === LogLevel.ERROR) {
            this.pino.error(context, message);

            return;
        }

        this.pino.fatal(context, message);
    }
}

export default PinoPsrLogger;
