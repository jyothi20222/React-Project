import React, {useState, useEffect } from 'react'
import axios from 'axios';


const Crud=()=> {
    const initialPost={id:null,title:'',body:''};
    const [posts,setPosts]=useState([]);
    const[currentPost,setCurrentPost]=useState(initialPost);
    const [loading,setLoading]=useState(false);
    const[error,setError]=useState(null);
    useEffect(()=>{
        fetchData();
    }, []);


    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        
        .then(response=>{
            setPosts(response.data);
        })
        .catch(error=>{
            console.error('Error fetching posts:',error);
        });
    };
    const handleSubmit=event=>{
        event.preventDefault();

        if(currentPost.id) {
            updatePost();
        } else{
            createPost();
        }
    };
    const createPost = () => {
        setLoading(true);
        axios.post('https://jsonplaceholder.typicode.com/posts', currentPost)
        .then(response => {
        console.log('Post created:', response.data);
        setPosts([...posts, response.data]);
        setLoading(false);
        setCurrentPost(initialPost);
        setError(null);
        })
        .catch(error => {
        console.error('Error creating post:', error);
        setLoading(false);
        setError('Error creating post. Please try again.');
        });
        };
        const updatePost = () => {
            setLoading(true);
            axios.put(`https://jsonplaceholder.typicode.com/posts/${currentPost.id}`,
           currentPost)
            .then(response => {
            console.log('Post updated:', response.data);
            setPosts(posts.map(post => (post.id === currentPost.id ? response.data :
           post)));
            setLoading(false);
            setCurrentPost(initialPost);
            setError(null);
            })
            .catch(error => {
            console.error('Error updating post:', error);
            setLoading(false);
            setError('Error updating post. Please try again.');
            });
            };

            const deletePost = id => {
                setLoading(true);
                axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(() => {
                console.log('Post deleted:', id);
                setPosts(posts.filter(post => post.id !== id));
                setLoading(false);
                setCurrentPost(initialPost);
                setError(null);
                })
                .catch(error => {
                console.error('Error deleting post:', error);
                setLoading(false);
                setError('Error deleting post. Please try again.');
                });
                };
                const handleEdit = post => {
                    setCurrentPost({ id: post.id, title: post.title, body: post.body });
                    };
                    const handleChange = event => {
                    const { name, value } = event.target;
                    setCurrentPost({ ...currentPost, [name]: value });
                    };
                    return (
                        <div className="container mt-4">
                        <h1>Create or Update a Post</h1>
                        <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={currentPost.title}
                        onChange={handleChange}
                        required
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="body" className="form-label">Body</label>
                        <textarea
                        id="body"
                        name="body"
                        value={currentPost.body}
                        onChange={handleChange}
                        required
                        />
                        </div>
                        {error && <p className="text-danger">{error}</p>}
                        <button type="submit" className="btn btn-primary me-2" disabled={loading}>
                        {loading ? 'Submitting...' : currentPost.id ? 'Update Post' : 'Create Post'}
                        </button>
                        {currentPost.id && (
                        <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deletePost(currentPost.id)}
                        disabled={loading}
                        >
                        {loading ? 'Deleting...' : 'Delete Post'}
                        </button>
                        )}
                        </form>
                        <h2 className="mt-4">Posts</h2>
                        <ul className="list-group">
                        {posts.map(post => (
                        <li key={post.id} className="list-group-item">
                            <h3>{post.title}</h3>
 <p>{post.body}</p>
 <button
 className="btn btn-warning me-2"
 onClick={() => handleEdit(post)}
 disabled={loading}
 >
 Edit
 </button>
 <button
 className="btn btn-danger"
 onClick={() => deletePost(post.id)}
 disabled={loading}
 >
 Delete
 </button>
 </li>
 ))}
 </ul>
 </div>
 );
};

                                          
                        
           
       

        
    
 


export default Crud