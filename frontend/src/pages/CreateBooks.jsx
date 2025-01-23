import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Layout from '../components/Layout/Layout';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const validateFields = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!author.trim()) newErrors.author = 'Author is required.';
    if (!publishYear.trim() || isNaN(publishYear) || publishYear < 1000 || publishYear > new Date().getFullYear()) {
      newErrors.publishYear = 'Enter a valid publish year.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveBook = () => {
    if (!validateFields()) {
      enqueueSnackbar('Please fill in all required fields correctly.', { variant: 'warning' });
      return;
    }

    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);
    axios
      .post('https://book-store-wzvn.onrender.com/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book created successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error occurred. Please try again.', { variant: 'error' });
        console.error(error);
      });
  };

  return (
    <Layout>
      <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
    >
      <div className="p-8 bg-white text-gray-700 shadow-lg rounded-xl w-[90%] max-w-lg">
        <BackButton />
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Create Book
        </h1>
        {loading && <Spinner />}
        <div className="flex flex-col">
          {/* Title Input */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter book title"
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
          </div>

          {/* Author Input */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.author ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.author && <p className="text-red-500 text-sm mt-2">{errors.author}</p>}
          </div>

          {/* Publish Year Input */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Publish Year</label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              placeholder="Enter publish year"
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.publishYear ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.publishYear && (
              <p className="text-red-500 text-sm mt-2">{errors.publishYear}</p>
            )}
          </div>

          {/* Save Button */}
          <button
            className={`w-full py-3 text-lg font-semibold rounded-lg ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500'
            } text-white transition-all duration-300`}
            onClick={handleSaveBook}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default CreateBooks;

