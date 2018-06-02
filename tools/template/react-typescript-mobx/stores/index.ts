import View from './view';
import { Stores } from '../types'

export function createStores() : Stores{
    return {
        ViewStore : new View()
    }
}
