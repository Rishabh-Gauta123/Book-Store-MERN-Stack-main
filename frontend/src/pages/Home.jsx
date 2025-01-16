import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import Layout from '../components/Layout/Layout';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
   <Layout>
     <div className="min-h-screen bg-gradient-to-r from-teal-200 to-blue-300 p-6">
      <div className="flex justify-center items-center gap-x-4 mb-6">
        <button
          className="bg-teal-500 text-white hover:bg-teal-600 px-6 py-2 rounded-lg shadow-md transition duration-300"
          onClick={() => setShowType('table')}
        >
          Table View
        </button>
        <button
          className="bg-teal-500 text-white hover:bg-teal-600 px-6 py-2 rounded-lg shadow-md transition duration-300"
          onClick={() => setShowType('card')}
        >
          Card View
        </button>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-teal-800 text-5xl cursor-pointer hover:text-teal-600 transition duration-300" />
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
   </Layout>
  );
};

export default Home;

