import Link from 'next/link'
import React from 'react'

function PostItem({ PostID, category, title, desc, thumbnail }) {
    const shortDescription = desc.length > 145 ? desc.substr(0, 145) + '...' : desc;
    const shortTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;
    const extractPlainText = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };
    return (
        <article className='post overflow-hidden bg-white rounded-3xl cursor-default transition-all hover:shadow-md p-4 pb-[1rem] border-r col-span-1'>
            <div className='rounded-md overflow-hidden h-64'>
                {/* Assuming the thumbnail prop contains the filename only */}
                <img className='w-full h-full object-contain' src={`${thumbnail}`} alt={shortTitle} />
            </div>
            <div className='post-content mt-6'>
                <Link href={`/posts/${PostID}`}>
                    
                        <h3 className='mt-4 text-2xl font-bold mb-3'>{shortTitle}</h3>
                    
                </Link>
                <p>{extractPlainText(shortDescription)}</p>
                <div className='mt-4 w-fit rounded-full p-4 bg-blue-800'>
                    
                        <a  href={`/posts/categories/${category}`} className='text-white font-semibold'>
                            {category}
                        </a>
                    
                </div>
            </div>
        </article>
    )
}

export default PostItem
