"use client"
import React, { useState, useContext, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';
import { UserContext } from '../context/userContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const POST_CATEGORIES = [
    "science", "education", "languages", "programming", "business"
];

function Page() {
    const router = useRouter();
    const { currentUser } = useContext(UserContext);
    const token = currentUser?.token;
    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/users/${currentUser?.id}`);
                setIsAdmin(response.data.isAdmin);
                
                // Move the redirection logic here after isAdmin is set
                if (!token || !response.data.isAdmin) {
                    router.push("/login");
                }
            } catch (err) {
                console.log(err);
                router.push("/login"); // Redirect to login page on error
            }
        };
    
        // Call fetchUser only when token and isAdmin changes
        if (token) {
            fetchUser();
        } else {
            router.push("/login"); // Redirect to login page if token is not present
        }
    }, [token, currentUser?.id]);
    
    

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState('');
    const [desc, setDesc] = useState("");
    const [thumbnail, setThumbnail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (value) => {
        setDesc(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        function stripHtmlTags(html) {
            return html.replace(/<[^>]+>/g, '');
        }
        
        const postData = new FormData();
        postData.set('title', title);
        postData.set('category', category);
        postData.set('desc', desc);
        postData.set('thumbnail', thumbnail);
        try {
            const response = await axios.post(`http://localhost:3001/api/posts`, postData, {
                withCredentials: true,
                headers: { Authorization: `Bearer ${token}` }
            });
            

          if (response.status === 201) {
              router.push('/blog');
          }
      } catch (err) {
          setError(err.response.data.message);
      }
    };
    

    return (
        <div>
            <section className='w-[90%] md:w-[50%] mx-auto mb-20'>
                <div>
                    <h2 className='font-bold text-3xl mt-32 mb-10'>Create Post</h2>
                    {error && <p className='text-white font-semibold mb-5 text-xl pl-3 p-2 rounded-lg bg-red-800'>{error}</p>}
                    <form action="/upload" method="POST" enctype="multipart/form-data" onSubmit={handleSubmit} className='flex flex-col gap-6'>
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
