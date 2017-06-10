/*jshint esversion: 6 */

var rReq = new XMLHttpRequest();
  rReq.addEventListener('load', reqListener);
  rReq.open('GET', `https://www.reddit.com/r/aww/.json`);
  rReq.send();


function reqListener(){
  var res = JSON.parse(this.responseText);
  // console.log(res);
  // console.log(res.data);
  // console.log(res.data.children);
  // console.log(res.data.children[0]);
  // console.log(res.data.children.length);

  for (var i = 0; i < res.data.children.length; i++){
    // console.log(res.data.children[i]);
    var boardBox = document.createElement("div");
    boardBox.className = "board";
    main.appendChild(boardBox);

    var imgBox = document.createElement("img");
    imgBox.className = "img";
    // console.log(res.data.children[i].data.url);
    imgBox.src = res.data.children[i].data.url;
    boardBox.appendChild(imgBox);

    var titleBox = document.createElement("div");
    titleBox.className = "title";
    // console.log(res.data.children[i].data.title);
    titleBox.innerHTML = res.data.children[i].data.title;
    boardBox.appendChild(titleBox);

    var subtitleBox = document.createElement("div");
    subtitleBox.className = "subtitle";
    boardBox.appendChild(subtitleBox);

    var userNameBox = document.createElement("div");
    userNameBox.className = "username";
    // console.log(res.data.children[i].data.author);
    userNameBox.innerHTML = res.data.children[i].data.author;
    subtitleBox.appendChild(userNameBox);

    var dateBox = document.createElement("div");
    dateBox.className = "date";
    var timeStamp = res.data.children[i].data.created;
    // dateBox.innerHTML =
    subtitleBox.appendChild(dateBox);

    var numViews = document.createElement("div");
    numViews.className = "views";
    numViews.innerHTML = res.data.children[i].data.score;
    subtitleBox.appendChild(numViews);

    var textBox = document.createElement("div");
    textBox.className = "text";
    // textBox.innerHTML =
    boardBox.appendChild(textBox);

  }
}
