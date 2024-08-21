const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let postArray = Object.entries(posts);

const postEl = document.getElementById("output");
const postHeaderEl = document.getElementById("user-info");
const postImageEl = document.getElementById("post-image");
const likeCountEl = document.getElementById("like-count");
const usernameCaptionEl = document.getElementById("username-caption");

function createPost(i) {
  // Create the main post card container
  let postCard = document.createElement("div");
  postCard.setAttribute("class", "post-card");

  // Create user info section
  let postHeader = document.createElement("div");
  postHeader.setAttribute("class", "post-header");

  // Avatar image
  let avatarImg = document.createElement("img");
  avatarImg.setAttribute("class", "avatar");
  avatarImg.setAttribute("src", posts[i].avatar);
  postHeader.appendChild(avatarImg);

  // User name and location
  let userInfo = document.createElement("div");
  userInfo.setAttribute("class", "user-info");

  let userName = document.createElement("div");
  userName.textContent = posts[i].name;
  userInfo.appendChild(userName);

  let userLocation = document.createElement("div");
  userLocation.setAttribute("class", "location-text");
  userLocation.textContent = posts[i].location;
  userInfo.appendChild(userLocation);

  postHeader.appendChild(userInfo);
  postCard.appendChild(postHeader);

  // Post image
  let postImg = document.createElement("img");
  postImg.setAttribute("class", "post-image");
  postImg.setAttribute("src", posts[i].post);
  postCard.appendChild(postImg);

  // Icons
  let postIcons = document.createElement("div");
  postIcons.setAttribute("class", "icons");
  postCard.appendChild(postIcons);

  // heart-icon
  let heartIcon = document.createElement("img");
  heartIcon.setAttribute("src", "/images/icon-heart.png");
  postIcons.appendChild(heartIcon);

  // comment-icon
  let commentIcon = document.createElement("img");
  commentIcon.setAttribute("src", "/images/icon-comment.png");
  postIcons.appendChild(commentIcon);

  // dm-icon
  let dmIcon = document.createElement("img");
  dmIcon.setAttribute("src", "/images/icon-dm.png");
  postIcons.appendChild(dmIcon);

  // Likes count
  let likeCount = document.createElement("div");
  likeCount.setAttribute("class", "like-count");
  likeCount.textContent = `${posts[i].likes} likes`;
  postCard.appendChild(likeCount);

  // Username and comment
  let postCaption = document.createElement("div");
  postCaption.setAttribute("class", "post-caption");

  let userCaption = document.createElement("span");
  userCaption.setAttribute("class", "username");
  userCaption.textContent = posts[i].username;

  let commentCaption = document.createElement("span");
  commentCaption.setAttribute("class", "comment");
  commentCaption.textContent = ` ${posts[i].comment}`;

  postCaption.appendChild(userCaption);
  postCaption.appendChild(commentCaption);
  postCard.appendChild(postCaption);

  // Append the post card to the output container
  postEl.appendChild(postCard);
}

// Call createPost for each post in the array
posts.forEach((post, index) => createPost(index));
