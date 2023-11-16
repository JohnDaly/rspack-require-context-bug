import './render.css'

const assetsContext = require.context(`./assets`, true, /\.js$/iu)

export function render() {
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}