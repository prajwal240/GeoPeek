import React from 'react';

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-white flex justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-600"></div>
      <span className="ml-4 text-xl font-semibold text-emerald-800">Loading...</span>
    </div>
  );
}
