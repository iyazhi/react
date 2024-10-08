const root = document.querySelector('#root');

const renderElement = {
    type : 'a',
    props : {
        href : "http://www.google.com",
        target : "_blank"
    },
    child :"click me"
}

function createElement(renderElement,root){
    /*
    const element = document.createElement(renderElement.type);
    element.innerHTML = renderElement.child;
    element.setAttribute('href',renderElement.prop['href']);
    element.setAttribute('target',renderElement.prop['target']);
    //
    root.appendChild(element);
    */

    const element = document.createElement('a',renderElement.type);
    element.innerHTML = renderElement.child;
    for (const prop in renderElement.props) {
        //if (prop == 'children') continue;
            element.setAttribute('prop',renderElement.props[prop]);   
        }
    root.appendChild(element);
    }



createElement(renderElement,root);