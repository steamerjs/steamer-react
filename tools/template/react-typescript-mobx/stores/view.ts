import { observable, computed, action } from 'mobx';

export default class View {
    @observable show : boolean;
    @observable text : string;

    constructor(){
        this.text = 'hello World'
    }

    @action
    setShow = ( flag : boolean) : void => {
        this.show = flag;
    }

    @action 
    setText = (text : string) : void => {
        this.text = text;
    }
}