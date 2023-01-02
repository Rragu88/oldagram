const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "./images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "./images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "./images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI! test test test test",
        likes: 152
    }
]

const container = document.querySelector('.container');

posts.forEach((post) => {
    const postBox = document.createElement('div');
    postBox.classList.add('box');
    container.appendChild(postBox);
    const header = document.createElement('header');
    postBox.appendChild(header);
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = "./images/logo.png";
    logo.alt = "logo";
    const userPic = document.createElement('img');
    userPic.src = "./images/Ryan_Photo.jpg";
    userPic.alt = "user-pic";
    userPic.classList.add('avatar');
    userPic.classList.add('user');
    header.appendChild(logo);
    header.appendChild(userPic);
    const sectionOne = document.createElement('section');
    sectionOne.classList.add('s-1');
    postBox.appendChild(sectionOne);
    const picContainer = document.createElement('div');
    picContainer.classList.add('picture');
    sectionOne.appendChild(picContainer);
    const profilePic = document.createElement('img');
    profilePic.classList.add('avatar');
    profilePic.src = post.avatar;
    picContainer.appendChild(profilePic);
    const nameContainer = document.createElement('div');
    nameContainer.classList.add('name');
    sectionOne.appendChild(nameContainer);
    const postName = document.createElement('span');
    postName.classList.add('text');
    postName.classList.add('name');
    postName.textContent = post.name;
    nameContainer.appendChild(postName);
    const locContainer = document.createElement('div');
    locContainer.classList.add('location');
    sectionOne.appendChild(locContainer);
    const postLoc = document.createElement('span');
    postLoc.classList.add('text');
    postLoc.classList.add('location');
    postLoc.textContent = post.location;
    locContainer.appendChild(postLoc);
    const sectionTwo = document.createElement('section');
    sectionTwo.classList.add('s-2');
    postBox.appendChild(sectionTwo);
    const postPic = document.createElement('img');
    postPic.classList.add('post');
    postPic.src = post.post;
    postPic.alt = "post-pic";
    sectionTwo.appendChild(postPic);
    const sectionThree = document.createElement('section');
    sectionThree.classList.add('s-3');
    postBox.appendChild(sectionThree);
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icons');
    sectionThree.appendChild(iconContainer);
    const heartIcon = document.createElement('i');

    heartIcon.classList.add('fa-regular');
    heartIcon.classList.add('fa-heart');
    iconContainer.appendChild(heartIcon);
    const commentIcon = document.createElement('i');
    commentIcon.classList.add('fa-regular');
    commentIcon.classList.add('fa-comment');
    iconContainer.appendChild(commentIcon);
    const sendIcon = document.createElement('i');
    sendIcon.classList.add('fa-regular');
    sendIcon.classList.add('fa-paper-plane');
    iconContainer.appendChild(sendIcon);
    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes');
    sectionThree.appendChild(likesContainer);
    const likes = document.createElement('span');
    likes.textContent = `${post.likes} likes`;
    heartIcon.addEventListener('click', () => {
        let newLikes = post.likes++;
        likes.textContent = `${newLikes} likes`;
    });
    likesContainer.appendChild(likes);
    const captionContainer = document.createElement('div');
    captionContainer.classList.add('caption');
    sectionThree.appendChild(captionContainer);
    const username = document.createElement('span');
    username.classList.add('username');
    username.textContent = post.username;
    const message = document.createElement('span');
    message.classList.add('message');
    message.textContent = post.comment;
    captionContainer.appendChild(username);
    captionContainer.appendChild(message);
});

