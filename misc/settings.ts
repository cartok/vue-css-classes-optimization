import Vue from 'vue'

const PAGES = {
  NORMAL: {
    primeChallangeEasy: 1 * 1000 * 1000,
    primeChallangeMedium: 2 * 1000 * 1000,
    primeChallangeHard: 6 * 1000 * 1000,
    bestCasePercent: 0.5,
    averageCasePercent: 0.3,
    worstCasePercent: 0.2,
  },
  HEAVY: {
    primeChallangeEasy: 2 * 1000 * 1000,
    primeChallangeMedium: 4 * 1000 * 1000,
    primeChallangeHard: 8 * 1000 * 1000,
    bestCasePercent: 0.2,
    averageCasePercent: 0.3,
    worstCasePercent: 0.5,
  },
}

export interface BenchmarkSettings {
  // conditionalClasses: boolean,
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  componentPrimeComputation: boolean,
  primeChallangeEasy: number,
  primeChallangeMedium: number,
  primeChallangeHard: number,
  thingsAmount: number,
  componentAmount: number,
  bestCasePercent: number,
  averageCasePercent: number,
  worstCasePercent: number,
}

const settings: BenchmarkSettings = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  componentPrimeComputation: true,
  // target: 2700 nodes ~= category page
  thingsAmount: 270,
  componentAmount: 10,
  ...PAGES.HEAVY,
}

Vue.prototype.$settings = settings

export default settings
