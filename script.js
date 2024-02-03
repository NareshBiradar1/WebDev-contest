let postText = document.querySelector(".text1");
let postBtn = document.querySelector(".post-btn");
let postsInFeed = [];
let postNumber = 1;
let PostArr = document.querySelector(".post-arr");

// if(localStorage.getItem('posts')){
    
//     let stringifiedArr = localStorage.getItem('posts');
    
//     PostArr = JSON.parse(stringifiedArr);

//     console.log(PostArr);
//     // console.log(PostArr);
//     // appendPosts();
// }

postBtn.addEventListener('click',function(){
    
    if(postText.value==""){
        alert("write something in post");
        return;
    }
    generateFeed(postText.value);
    postText.value="";
})

function generateFeed(postValue){
    let Post = document.createElement("div");
    Post.className = "posts";
    Post.id=postNumber;
    postNumber++;
    Post.innerHTML=`<div class="head-div">
                    <div class="user-icon"></div>
                    <div class="user-name">
                        <p class="name">Naresh Biradar</p>
                        <p class="nick-name">@nareshBiradar1</p>
                    </div>
                    <div class="icons">
                        <div class="edit-icon"></div>
                    <div class="delete-icon"></div>
                    </div>
                    </div>
                    <div class="input" contenteditable="true">${postValue}
                    </div>
                    <div class="foot-div">
                        <div class="comment-icon"></div>
                        <div class="like-icon"></div>
                    </div>`


postsInFeed.unshift(Post);
let stringifiedArr = JSON.stringify(postsInFeed);
localStorage.setItem('posts',stringifiedArr);
appendPosts();

}

function appendPosts(){
    for(let i=0;i<postsInFeed.length;i++){
        PostArr.appendChild(postsInFeed[i]);
    }
}

// function updateLocalStorage(){
//     let stringifiedArr = JSON.stringify(postsInFeed);
//     localStorage.setItem('posts',stringifiedArr);
// }



