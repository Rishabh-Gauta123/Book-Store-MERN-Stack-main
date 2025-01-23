import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import Layout from '../components/Layout/Layout';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://book-store-wzvn.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="p-6 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen">
      <BackButton />
      <h1 className="text-4xl font-semibold text-center text-gray-800 my-6">Book Details</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="my-6">
            <span className="text-lg font-semibold text-gray-600">ID</span>
            <div className="text-gray-800 text-lg">{book._id}</div>
          </div>
          <div className="my-6">
            <span className="text-lg font-semibold text-gray-600">Title</span>
            <div className="text-gray-800 text-lg">{book.title}</div>
          </div>
          <div className="my-6">
            <span className="text-lg font-semibold text-gray-600">Author</span>
            <div className="text-gray-800 text-lg">{book.author}</div>
          </div>
          <div className="my-6">
            <span className="text-lg font-semibold text-gray-600">Publish Year</span>
            <div className="text-gray-800 text-lg">{book.publishYear}</div>
          </div>
          <div className="my-6">
            <span className="text-lg font-semibold text-gray-600">Create Time</span>
            <div className="text-gray-800 text-lg">{new Date(book.createdAt).toLocaleString()}</div>
          </div>
          <div className="my-6">
            <span className="text-lg font-semibold text-gray-600">Last Update Time</span>
            <div className="text-gray-800 text-lg">{new Date(book.updatedAt).toLocaleString()}</div>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default ShowBook;
