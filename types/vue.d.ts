import Vue from 'vue'
import { BenchmarkSettings } from '~/misc/settings'

declare module 'vue/types/vue' {
  interface Vue {
    $settings: BenchmarkSettings;
  }
}
