import { registerPlugin } from '@capacitor/core';
const ThinkerNlbSoftPos = registerPlugin('ThinkerNlbSoftPos', {
    web: () => import('./web').then((m) => new m.ThinkerNlbSoftPosWeb()),
});
export * from './definitions';
export { ThinkerNlbSoftPos };
//# sourceMappingURL=index.js.map