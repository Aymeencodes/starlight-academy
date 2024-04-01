"use client"
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'

import {DUMMY_POSTS} from '../data'
import Loading from './Loading'
import axios from 'axios'

function Posts() {
    const [posts,setposts] = useState(DUMMY_POSTS)
    const [isloading,setislodaing] = useState(false)
    useEffect(() => {
      const fetchPosts = async () => {
        setislodaing(true)
        try {
          const response = await axios.get(`http://localhost:3001/api/posts`)
          setposts(response?.data)
        } catch (err) {
          console.log(err)
        }

        setislodaing(false)
      }
      fetchPosts()
    }, [])
    if(isloading){
      return <Loading/>
    }
  return (
    <div>
      <section className='mb-7'>
        {posts.length > 0 ? <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3   gap-16 '>
        {
            posts.map(({_id: id,thumbnail,category,title,desc}) => <PostItem key={id} PostID={id} thumbnail={thumbnail} category={category} title={title}
            desc={desc}
            />)
        }
        </div> : <h2 className=' font-bold text-4xl text-center pt-[5rem] '>No Posts Found</h2> }
      </section>
    </div>
  )
}

export default Posts
