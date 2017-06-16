/*
 * action types
 */

// OTHERS
export const GET_ACTION = 'GET_ACTION';

/*
 * other constants
 */

/*
 * action creators
 */

export function getAction(value) {
    return { type: GET_ACTION, value };
}