import {
    observable,
    computed,
    action
} from 'mobx';

export default class Data {

    @observable data = {};

    @action.bound
    getData(item) {

    }
}
