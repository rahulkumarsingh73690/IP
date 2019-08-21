var request = require('request');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  } 


  request('https://us-central1-ip-checker-7ecce.cloudfunctions.net/getIP', function (error, response, body) {
    replaceText(`ip`,error)
    replaceText(`ip`, body)
  });
})
