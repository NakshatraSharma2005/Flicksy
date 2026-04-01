import React from 'react'
import PostLayout from "@/Pages/PostLayout";
import PostCard from "@/Pages/PostCard";


function Feed() {
    const post = JSON.parse(localStorage.getItem("posts"))||[];
  return (
      <PostLayout>
          {post.length === 0 && <h1>No posts yet</h1>}
          <div className="flex flex-col items-center gap-10 py-6">
              {post.map((post) => (
                  <PostCard
                      key={post.id}
                      image={post.image}
                      caption={post.caption}
                  />
              ))}
          </div>
          
      </PostLayout>
  );
}

export default Feed