// var xhr = new XMLHttpRequest();
// var postsForm = document.querySelector("#add_post_form");
// var listPostsTable = document.querySelector("#list-posts-table tbody");
// var btnGetPosts = document.querySelector("#get_posts");
// var postname = document.querySelector("#postname");

// function clearFileds() {
//   postsForm.title.value = "";
//   postsForm.full_description.value = "";
//   postsForm.short_description.value = "";
//   postsForm.status.checked = false;
//   postsForm.seo_url.value = "";
// }

// function addPost(post) {
//   var toSend = JSON.stringify(post);

//   var url =
//     "http://blog.api.axenov-it.com/v1/posts?api_key=0341fa9c389dbce7dae6d3af488683d4";

//   xhr.open("POST", url);

//   xhr.responseType = "json";

//   xhr.send(toSend);

//   xhr.onload = function () {
//     if (xhr.response.result) {
//       alert(xhr.response.message);
//       clearFileds();
//     }
//   };
// }

// postsForm.onsubmit = function (e) {
//   e.preventDefault();

//   var post = {
//     title: this.title.value,
//     full_description: this.full_description.value,
//     short_description: this.short_description.value,
//     status: this.status.checked,
//     seo_url: this.seo_url.value,
//   };

//   addPost(post);
// };

// btnGetPosts.onclick = function () {
//   xhr.open(
//     "GET",
//     "http://blog.api.axenov-it.com/v1/posts?limit=20&api_key=0341fa9c389dbce7dae6d3af488683d4"
//   );

//   xhr.responseType = "json";

//   xhr.send();

//   xhr.onload = function () {
//     renderPosts(xhr.response.posts);
//   };
// };

// function renderPosts(posts) {
//   console.log(posts);
//   var html = "";
//   for (var post of posts) {
//     html += `<tr><td>${post.id}</td><td>${post.title}</td><td>${post.seo_url}</td></tr>`;
//   }

//   listPostsTable.innerHTML = html;
// }

var ar = [
  { name: "vasa" },
  { name: "pitya" },
  { name: "anya" },
  { name: "vasa2" },
];

var user = ar[1];

user.name = "andrey";

for (var o of ar) {
  console.log(o.name);
}
