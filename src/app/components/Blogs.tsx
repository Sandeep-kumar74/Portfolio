import {blogs} from '@/contents/blogs';
import React from 'react'
import Link from 'next/link'

const Blogs = () => {
  return (
    <section className='py-20 container max-w-7xl mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-12 text-center'>Letest Blog Posts</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
            blogs.map((blog) => (
                <article key={blog.slug} className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'>
                    <Link href= {`/blogs/${blog.slug}`} className='flex flex-col gap-4'>
                    <h3 className='text-xl font-semibold md-2 hover:text-primary transition-colors'>{blog.title}</h3>
                    </Link>
                    <p className='text-gray-600 dark:text-gray-300 mb-4'>{blog.excerpt}</p>
                    <div>
                        
                    </div>
                </article>
            ))
        }
      </div>
    </section>
  )
}

export default Blogs
