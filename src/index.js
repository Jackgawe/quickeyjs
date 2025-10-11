export * from './string.js';
export * from './array.js';
export * from './number.js';
export * from './object.js';

// THIS IS THE DEMO SECTION
if (typeof window === 'undefined') {
  (async () => {
    const qk = await import('./index.js');
    console.log('--- quickey demo ---');
    // String demos
    console.log('capitalize:', qk.capitalize('hello'));
    console.log('reverse:', qk.reverse('quickey'));
    console.log('truncate:', qk.truncate('This is a long sentence.', 10));
    // Array demos
    console.log('unique:', qk.unique([1, 2, 2, 3, 4, 4]));
    console.log('chunk:', qk.chunk([1, 2, 3, 4, 5], 2));
    console.log('flatten:', qk.flatten([1, [2, [3, 4]], 5]));
    // Number demos
    console.log('clamp:', qk.clamp(10, 1, 5));
    console.log('randomInt:', qk.randomInt(1, 5));
    console.log('average:', qk.average(1, 2, 3, 4));
    // Object demos
    console.log('merge:', qk.merge({ a: 1, b: { c: 2 } }, { b: { d: 3 }, e: 4 }));
    console.log('isEmpty:', qk.isEmpty({}));
    console.log('clone:', qk.clone({ x: 1, y: [2, 3, { z: 4 }] }));
    process.exit(0);
  })();
}
