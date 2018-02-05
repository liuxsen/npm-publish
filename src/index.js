import _ from 'lodash'
import './index.css'
import Icon from './icon.png'
import xmlData from './data.xml'
console.log(xmlData)


function component() {
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
	element.classList.add('icon-daojishi');
	element.classList.add('iconfont');

	var myIcon = new Image()

	myIcon.src = Icon

	element.appendChild(myIcon)

	return element;
}

document.body.appendChild(component());