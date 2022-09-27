import { MockFactory } from 'jasmine-mock-factory';
import { Provider } from '@angular/core';

/**
 * Helper function for mocking jasmine spy services.
 */
export function provideMockService<T extends object>(type: T): Provider {
  return {
    provide: type,
    useValue: MockFactory.create(type),
  };
}
