import React from 'react'
import CodePosts from '../CodePosts/CodePosts';

const FatherPosts = () => {
    const posts = [
        {
          slug: "html-desde-10",
          date: "Fri Oct 06 2023 10:45:00 GMT+0200 (Central European Summer Time)"
        },
        {
          slug: "css-desde-0",
          date: "Thu Feb 17 2022 18:15:00 GMT+0100 (Central European Standard Time)"
        },
        {
          slug: "javascript-desde-0",
          date: "Tue Aug 23 2022 13:21:00 GMT+0200 (Central European Summer Time)"
        }
      ];
  return (
    <div><CodePosts posts={posts}/></div>
  )
}

export default FatherPosts