import Time from "./Utils/Time";

export class Main extends Time {
    constructor() {
        super();

        this.on('tick', () => {
            this.update();
        })
    }

    update(): void {
        console.log('update')
    }
}