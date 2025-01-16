import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Layout from '../components/Layout/Layout';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <Layout>
      <div className='p-6 bg-gradient-to-r from-pink-200 to-yellow-200 min-h-screen'>
      <BackButton />
      <div className='max-w-xl mx-auto mt-8 bg-white shadow-lg rounded-xl overflow-hidden'>
        <div className='px-8 py-6'>
          <h1 className='text-4xl font-semibold text-gray-800 text-center mb-6'>Delete Book</h1>
          {loading ? <Spinner /> : ''}
          <div className='flex flex-col items-center border-2 border-red-500 rounded-xl p-8 bg-red-50'>
            <h3 className='text-2xl text-gray-700 font-medium mb-6'>Are You Sure You want to delete this book?</h3>
            <button
              className='w-full p-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors'
              onClick={handleDeleteBook}
            >
              Yes, Delete it
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default DeleteBook;

