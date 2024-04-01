"use client"
import React, { useState, useContext, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { UserContext } from '@/app/context/userContext';

const POST_CATEGORIES = [
    "science", "education", "languages", "programming", "business"
];

function Page() {
    const router = useRouter();
    const { currentUser } = useContext(UserContext);
    const token = currentUser?.token;

    useEffect(() => {
        if (!token) {
            router.push("/login");
        }
    }, [token, router]);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState('');
    const [desc, setDesc] = useState("");
    const [thumbnail, setThumbnail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (value) => {
        setDesc(value);
    };

    const editPost = async (e) => {
        e.preventDefault();
        
        const postData = new FormData();
        postData.set('title', title);
        postData.set('category', category);
        postData.set('desc', desc);
        postData.set('thumbnail', thumbnail);
        
        // Make API call with postData
        try {
            const pathname = window.location.pathname;
            const id = pathname.split('/').slice(-2, -1)[0]; // Extracting the ID from the URL
            
            const response = await fetch(`http://localhost:3001/api/posts/${id}`, {
                method: 'PATCH',
                body: postData,
                credentials: 'include',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            if (response.ok) {
                router.push('/blog');
            } else {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
        } catch (err) {
            setError(err.message);
        }
    };
    
    useEffect(() => {
      const pathname = window.location.pathname;
      const id = pathname.split('/').slice(-2, -1)[0]; // Extracting the ID from the URL
      
      const getPost = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/posts/${id}`)
            setTitle(response.data.title)
            setDesc(response.data.desc)

        } catch (error) {
            console.log(error)
        }
      }
      getPost()
    }, []
    );

    return (
        <div>
            <section className='w-[90%] md:w-[50%] mx-auto mb-20'>
                <div>
                    <h2 className='font-bold text-3xl mt-32 mb-10'>Edit Post</h2>
                    {error && <p className='text-white font-semibold mb-5 text-xl pl-3 p-2 rounded-lg bg-red-800'>{error}</p>}
                    <form onSubmit={editPost} className='flex flex-col gap-6'>
                        <input  className='p-4 focus:outline-blue-800 border-blue-800 border rounded-xl focus:border-blue-800' type="text" placeholder='Title' autoFocus value={title} onChange={e => setTitle(e.target.value)} />
                        <select  name="category" className='p-4 outline-blue-800 border rounded-xl border-blue-600' value={category} onChange={e => setCategory(e.target.value)}>
                            {POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
                        </select>
                        <ReactQuill value={desc} onChange={handleChange} className='h-80 mb-14' />
                        <input  type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg' />
                        <button type='submit' className='btn rounded-xl bg-purple-800 font-semibold text-white text-xl'>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Page;