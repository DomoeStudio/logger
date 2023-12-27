import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerService } from './logger.service';
import { CommonModule } from '@angular/common';
import { LogLevel } from './log-level.enum';
import { logLevelInjectionToken } from './log-level.token';

@NgModule({
  imports: [CommonModule],
  providers: [LoggerService],
})
export class LoggerModule {
  static forRoot(logLevel: LogLevel): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [{ provide: logLevelInjectionToken, useValue: logLevel }],
    };
  }
}
