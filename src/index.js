import _ from 'lodash'
import './index.css'
import Icon from './icon.png'
import xmlData from './data.xml'
console.log(xmlData)

import printMe from './print.js'

function component() {
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
	element.classList.add('icon-daojishi');
	element.classList.add('iconfont');

	var myIcon = new Image()

	myIcon.src = Icon

	var btn = document.createElement('button')
	btn.innerHTML = 'click me'
	btn.onclick = printMe

	element.appendChild(myIcon)
	element.appendChild(btn)

	return element;
}

document.body.appendChild(component());