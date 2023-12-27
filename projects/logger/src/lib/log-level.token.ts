import { InjectionToken, ValueProvider } from '@angular/core';
import { LogLevel } from './log-level.enum';

export const logLevelInjectionToken = new InjectionToken<LogLevel>('logLevel');
export const logLevelProvider: ValueProvider = {
  provide: logLevelInjectionToken,
  useValue: (): LogLevel => LogLevel.DEBUG,
};
