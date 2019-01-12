
// AgcCalvingPercentage: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './agc-calving-percentage.core.js';
import {
  AgcCalvingPercentage,
  AgcCalvingPercentageInputs,
  AgcCalvingPercentageProgress,
  AgcCalvingPercentageResults,
  AgcCalvingPercentageResultsPlaceholder
} from './agc-calving-percentage.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcCalvingPercentage,
    AgcCalvingPercentageInputs,
    AgcCalvingPercentageProgress,
    AgcCalvingPercentageResults,
    AgcCalvingPercentageResultsPlaceholder
  ], opts);
}
