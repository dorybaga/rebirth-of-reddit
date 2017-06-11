/*jshint esversion: 6 */

var rReq = new XMLHttpRequest();
  rReq.addEventListener('load', reqListener);
  rReq.open('GET', `https://www.reddit.com/r/travel.json`);
  rReq.send();


function reqListener(){
  var res = JSON.parse(this.responseText);
  // console.log(res);
  // console.log(res.data);
  // console.log(res.data.children);
  console.log(res.data.children[0]);
  console.log(res.data.children[0].kind);
  // console.log(res.data.children.length);

  // if(res.data.children.data.url !== null){



  // }

  for (var i = 1; i < res.data.children.length; i++){
    // console.log(res.data.children[i]);


    // if (res.data.children[i].kind === t3){
    //   if (res.data.children[i].)
    // }
    var boardBox = document.createElement("div");
    boardBox.className = "board";
    main.appendChild(boardBox);

    var imgBox = document.createElement("img");
    imgBox.className = "img";
    // console.log(res.data.children[i].data.url);
    imgBox.src = res.data.children[i].data.url;
    boardBox.appendChild(imgBox);

    var titleBox = document.createElement("h3");
    titleBox.className = "title";
    // console.log(res.data.children[i].data.title);
    titleBox.innerHTML = res.data.children[i].data.title;
    boardBox.appendChild(titleBox);

    var subtitleBox = document.createElement("h4");
    subtitleBox.className = "subtitle";
    boardBox.appendChild(subtitleBox);

    var userNameBox = document.createElement("div");
    userNameBox.className = "username";
    // console.log(res.data.children[i].data.author);
    userNameBox.innerHTML = "by: " + res.data.children[i].data.author;
    subtitleBox.appendChild(userNameBox);

    var dateBox = document.createElement("div");
    dateBox.className = "date";
    // console.log(res.data.children[i].data.created);
    var timeStamp = new Date(res.data.children[i].data.created * 1000);
    // console.log(timeStamp);
    var hours = timeStamp.getHours();
    // console.log(hours);
    dateBox.innerHTML = hours + " hours ago";
    subtitleBox.appendChild(dateBox);

    var numViews = document.createElement("div");
    numViews.className = "views";
    numViews.innerHTML = res.data.children[i].data.score + " views";
    subtitleBox.appendChild(numViews);

    var textBox = document.createElement("div");
    textBox.className = "text";
    console.log(res.data.children[i].data.selftext);
    textBox.innerHTML = res.data.children[i].data.selftext;
    boardBox.appendChild(textBox);

  }
}
