import _ from 'lodash';
import '../bak/style.css'
import Baidu from '../bak/baidu.png';
import data from '../bak/data.json';
import print from "./print";


function component(){
    let element = document.createElement('div');
    element.innerHTML = _.join(['hello','webpack','你好123ABA',data.url],' ');
    element.classList.add('hello');

    let new_img_baidu = new Image();
    new_img_baidu.src=Baidu;
    element.append(new_img_baidu);

    let btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick=print;
    element.appendChild(btn);

    return element;
}
document.body.appendChild(component());