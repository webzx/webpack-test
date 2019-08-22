//import _ from 'lodash';
//import print from "./print.js";
//import './styles.css'
import {cube} from './math.js'

function component(){
    let element = document.createElement('pre');
    element.innerHTML = ['Hello webpack','5 cubed is equal to '+cube(5)].join('\n\n');
    return element;


   /* let element = document.createElement('div');
    element.innerHTML = _.join(['hello','webpack'],' ');

    let btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick=print;
    element.appendChild(btn);

    return element;*/
}
document.body.appendChild(component());

/*
if(module.hot){
    module.hot.accept('./print.js', function () {
        console.log('Accpeting the updated printMe module!');
        print();
    })
}*/
