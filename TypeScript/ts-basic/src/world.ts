export default class World {
    message: string;

    constructor(message: string) {
        this.message = message
    }

    public  sayHello(elem: HTMLElement | null) {
        if(elem) {
            return (elem.innerText = this.message)
        } else {
            return
        }
    }
}