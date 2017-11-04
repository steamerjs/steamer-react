import {
    observable,
    // computed,
    action,
    asFlat
} from 'mobx';

export default class Store {
    @observable msg = '666';

    constructor() {}

    @action
    setMsg(msg) {
        this.msg = msg;
    }
}
