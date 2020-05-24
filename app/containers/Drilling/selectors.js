import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the drilling state domain
 */

const selectDrillingDomain = state => state.drilling || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Drilling
 */

const makeSelectDrilling = () =>
  createSelector(
    selectDrillingDomain,
    substate => substate,
  );

export default makeSelectDrilling;
export { selectDrillingDomain };
