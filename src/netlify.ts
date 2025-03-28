import { angularRenderingNetlifyFunction } from '@netlify/angular-runtime';
import bootstrap from './main.server';

export const handler = angularRenderingNetlifyFunction({
  bootstrap: bootstrap,
});
