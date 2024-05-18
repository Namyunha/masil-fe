import { setupServer } from 'msw/node';
import { ServerHandlers } from './serverHandlers';

export const server = setupServer(...ServerHandlers);
