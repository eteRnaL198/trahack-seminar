import World from './world'

const root: HTMLElement | null = document.getElementById('root')
const world = new World('hello world!')
world.sayHello(root)