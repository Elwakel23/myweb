function saveImageAsJpg(name, address) {
              var background = new Image();
              background.src = "http://i.imgur.com/yf6d9SX.jpg";
              var c = document.getElementById("myCanvas");
              var ctx = c.getContext("2d");
              background.onload = function () {
                  ctx.drawImage(background, 0, 0);
              };
              var a = document.createElement('a');
              a.href = document.getElementById("myCanvas").toDataURL();
              a.download = "wrwrwer";
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
          }

          function GETIMAGES() {
              url = document.getElementById('yt').value;
              if (url.trim() == '') {
                  alert('Please enter a YouTube video URL');
                  return false;
              }
              var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
              var match = url.match(regExp);
              if (match && match[7].length == 11) {
                  document.getElementById('Showdata').style.display = "block";
                  bdea.src = 'http://img.youtube.com/vi/' + match[7] + '/default.jpg';
                  b2.src = 'http://img.youtube.com/vi/' + match[7] + '/1.jpg';
                  b3.src = 'http://img.youtube.com/vi/' + match[7] + '/2.jpg';
                  b4.src = 'http://img.youtube.com/vi/' + match[7] + '/3.jpg';
                  b5.src = 'http://img.youtube.com/vi/' + match[7] + '/hqdefault.jpg';
                  b6.src = 'http://img.youtube.com/vi/' + match[7] + '/mqdefault.jpg';
                  b7.src = 'http://img.youtube.com/vi/' + match[7] + '/maxresdefault.jpg';
                  a5.href = 'http://img.youtube.com/vi/' + match[7] + '/hqdefault.jpg';
                  a6.href = 'http://img.youtube.com/vi/' + match[7] + '/mqdefault.jpg';
                  a7.href = 'http://img.youtube.com/vi/' + match[7] + '/maxresdefault.jpg';
                  a1.href = 'http://img.youtube.com/vi/' + match[7] + '/default.jpg';
                  document.getElementById("s1").value = document.getElementById('a1').href;
                  document.getElementById("s6").value = document.getElementById('a6').href;
                  document.getElementById("s5").value = document.getElementById('a5').href;
                  document.getElementById("s7").value = document.getElementById('a7').href;
              }
              else {
                  document.getElementById('Showdata').style.display = "none";
                  alert('No YouTube video image found at this URL. Please try again...');
                  return false;
              }
          }
