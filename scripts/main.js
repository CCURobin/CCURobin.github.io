var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'C:\Users\Robin\Desktop\web-projects\test-site\images\hot.png') {
      myImage.setAttribute ('src','C:\Users\Robin\Desktop\web-projects\test-site\images\girl.png');
    } else {
      myImage.setAttribute ('src','C:\Users\Robin\Desktop\web-projects\test-site\images\hot.png');
    }
}


