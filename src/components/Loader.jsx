import React from 'react';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-full max-h-[80vh]">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-300 border-t-transparent"></div>
    </div>
  );
}
