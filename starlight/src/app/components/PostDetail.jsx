"use client"
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";
const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {currentUser} = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
      const fetchuser = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/users/${currentUser?.id}`)
          setIsAdmin(response.data.isAdmin)
        } catch (err) {
          console.log(err)
        }

      }
      fetchuser()
    }, [])

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        // Parse the id from the URL
        const url = new URL(window.location.href);
        const postId = url.pathname.split('/').pop();
        const response = await axios.get(`http://localhost:3001/api/posts/${postId}`);
        setPost(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    getPost();


    // Cleanup function
    return () => {
      // Clean up any pending requests or timers
    };
  }, []); // Make sure to pass an empty dependency array to execute this effect only once

  // deleting
 

  // Check if post is null before rendering its properties
  return (
    <div>
      <section className="mx-auto mb-8 p-8 bg-gray-300 pl-16 pr-16 rounded-lg hover:shadow-lg transition-all container w-[90%] md:w-[60%]">
        {post && (
          <div className="   ">
            <div className=" flex justify-between flex-col md:flex-row items-center">
              <h3 className=" mb-5 font-semibold ">15/12/2020</h3>
              {isAdmin? <div className=" flex gap-3">
                <a href={`/posts/${post._id}/edit`} className=" text-white btn bg-blue-800 rounded-full">
                  Edit
                </a>
                <a   className=" text-white btn bg-red-800 rounded-full">
                  Delete
                </a>
              </div>:<></>}
            </div>
            <h1 className="mt-4 ov text-3xl font-bold mb-3">{post.title}</h1>
            <div className=" overflow-hidden  h-64">
              <img className=" w-full h-full object-cover rounded-md mb-6" src={`${post.thumbnail}`} alt="thumbnail" />
            </div>
            <p dangerouslySetInnerHTML={{ __html: post.desc }}></p>
          </div>
        )}
      </section>
    </div>
  );
};

export default PostDetail;
