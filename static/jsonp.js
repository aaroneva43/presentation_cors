receiver({info: 'something comes from server'});
fetch(`http://127.0.0.1:8778/rest/test?cookie=${window.document.cookie}`)