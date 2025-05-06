import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center px-4 py-2 bg-white rounded-full shadow-md w-[250px] sm:w-[300px] md:w-[400px] transition-all duration-300"
    >
      <input 
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow px-4 py-2 outline-none bg-transparent text-black placeholder-gray-500"
      />
      <button 
        type="submit"
        className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors duration-300"
      >
        <FaSearch />
      </button>
    </form>
  );
}
