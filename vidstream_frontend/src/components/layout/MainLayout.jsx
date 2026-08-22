import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 m-1">
      
      <main className="flex-1 w-full">
        <Outlet/>
      </main>
      
    </div>
  );
}


export default MainLayout
