/* eslint-disable no-console */
import pf from 'quick-primefactors'

const a = Date.now()
// pf(20 * 1000 * 1000) // ~2s
// pf(10 * 1000 * 1000) // ~1s
// pf(3 * 1000 * 1000) // ~350ms
// pf(2 * 1000 * 1000) /7
// pf(1 * 1000 * 1000) /7

const b = Date.now()

console.log('> duration:', b - a)
