import React from 'react'
import Header from '../ui/Header'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 m-1">
      <Header />

      <main className="flex-1 w-full">
        {children}
      </main>
      
    </div>
  );
}


export default MainLayout
