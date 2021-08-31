import 'core-js/es/regexp/test'

const div = document.createElement('div')
const text = document.createTextNode('Hello')
div.appendChild(text)
const root = document.getElementById('root')
root.appendChild(div)
