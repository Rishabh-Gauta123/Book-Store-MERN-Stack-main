import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Layout from '../components/Layout/Layout';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://book-store-wzvn.onrender.com/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check the console.');
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error occurred while editing the book', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <Layout>
       <div className="p-6 bg-gradient-to-r from-blue-200 to-purple-200 min-h-screen" style={{ backgroundColor: '#f3f4f6' }}>
      <BackButton />
      <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="px-6 py-4">
          <h1 className="text-4xl font-semibold text-gray-800 text-center mb-6">Edit Book</h1>
          {loading ? <Spinner /> : ''}
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-600 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-600 mb-2">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-600 mb-2">Publish Year</label>
              <input
                type="number"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={handleEditBook}
              className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-medium focus:outline-none focus:ring focus:ring-blue-300"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default EditBook;


