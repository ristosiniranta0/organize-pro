/*
Filename: ComplexApplication.js
Description: A complex application demonstrating a simplified version of a social media platform
Author: John Doe
Date: September 20, 2022
*/

// User class representing a user on the platform
class User {
  constructor(userId, name, email) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.friends = [];
    this.posts = [];
  }

  addFriend(user) {
    this.friends.push(user);
  }

  createPost(postContent) {
    const post = new Post(postContent, this);
    this.posts.push(post);
  }

  getFeed() {
    let feed = [];
    for (const friend of this.friends) {
      feed = feed.concat(friend.posts);
    }
    return feed;
  }
}

// Post class representing a post on the platform
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  addComment(commentContent, user) {
    const comment = new Comment(commentContent, user);
    this.comments.push(comment);
  }
}

// Comment class representing a comment on a post
class Comment {
  constructor(content, author) {
    this.content = content;
    this.author = author;
  }
}

// Creating users for testing
const user1 = new User(1, "John", "john@example.com");
const user2 = new User(2, "Jane", "jane@example.com");
const user3 = new User(3, "Mark", "mark@example.com");
const user4 = new User(4, "Emily", "emily@example.com");

// Adding friendships between users
user1.addFriend(user2);
user1.addFriend(user3);
user2.addFriend(user4);

// Creating posts for testing
user1.createPost("Hello, everyone!");
user2.createPost("Having a great day!");
user4.createPost("Feeling excited!");

// Liking and commenting on posts
user2.posts[0].like();
user3.posts[0].like();
user4.posts[0].like();
user4.posts[0].addComment("Nice post!", user1);
user1.posts[0].addComment("Thank you!", user4);

// Simulating retrieving the feed for a user
const userFeed = user1.getFeed();

// Displaying the feed
console.log("User Feed:");
for (const post of userFeed) {
  console.log(`${post.author.name}: ${post.content}`);
  console.log(`Likes: ${post.likes}`);
  console.log(`Comments: ${post.comments.length}`);
}