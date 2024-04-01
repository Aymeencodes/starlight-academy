"use client"
import React, { useState } from 'react'
import PostItem from './PostItem'

import {DUMMY_POSTS} from '../data'

function CategoryPosts() {
  const [posts,setposts] = useState(DUMMY_POSTS)
return (
  <div>
    <section className='mb-7'>
      {posts.length > 0 ? <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3   gap-16 '>
      {
          posts.map(({id,thumbnail,category,title,desc}) => <PostItem key={id} PostID={id} thumbnail={thumbnail} category={category} title={title}
          desc={desc}
          />)
      }
      </div> : <h2 className=' font-bold text-4xl text-center pt-[5rem] '>No Posts Found</h2> }
    </section>
  </div>
)
}

export default CategoryPosts
