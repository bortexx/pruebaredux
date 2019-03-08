import {INCREMENTO, DECREMENTO} from './counter-types';

export const incrementar = () => ({
    type: INCREMENTO,
    payload:null
});

export const decrementar = () => ({
    type: DECREMENTO,
    payload:null
})