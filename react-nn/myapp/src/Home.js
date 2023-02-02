import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import Create from './Create';
import useFetch from './useFetch';

const Home = () => {
  // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  /* useState */
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState('mario');

  /* useEffect - use a empty dependency array [] so that the hook's function only runs after the first initial render, if the state changes, it wont run the function again. or expliciately include a specific dependnecy like {name} for example where as useEffect runs ONLY when the name state is updated/changed */

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fecth data');
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {blogs && <BlogList blogs={blogs} title='All Blogs' />}

      <button onClick={() => setName('Luigi')}>Change name</button>
      <p>{name}</p>

      {/* Filters the blogs by author */}
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" />

      <Create />
    </div>
  );
};

export default Home;
