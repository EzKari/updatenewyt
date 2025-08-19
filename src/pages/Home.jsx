import React from "react";

export default function App() {
  return (
    <>
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      <div className="flex bg-gray-50 font-sans min-h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex md:w-24 bg-white min-h-screen p-4 text-black flex-col items-center space-y-6 sticky top-0 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
          {/* Menu Items */}
          <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer w-full">
            <i className="fa-solid fa-bars text-2xl"></i>
          </div>

          <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer w-full">
            <i className="fa-solid fa-house text-2xl"></i>
            <span className="text-[11px] mt-1 text-center">Home</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer w-full">
            <i className="fa-solid fa-bolt text-2xl"></i>
            <span className="text-[11px] mt-1 text-center">Shorts</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer w-full">
            <i className="fa-solid fa-photo-video text-2xl"></i>
            <span className="text-[11px] mt-1 text-center">Subs</span>
          </div>
          <hr className="border-gray-200 w-full" />
          <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer w-full">
            <i className="fa-solid fa-book text-2xl"></i>
            <span className="text-[11px] mt-1 text-center">Library</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer w-full">
            <i className="fa-solid fa-history text-2xl"></i>
            <span className="text-[11px] mt-1 text-center">History</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer w-full">
            <i className="fa-solid fa-download text-2xl"></i>
            <span className="text-[11px] mt-1 text-center">Downloads</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer w-full">
            <i className="fa-solid fa-film text-2xl"></i>
            <span className="text-[11px] mt-1 text-center">Videos</span>
          </div>
          <hr className="border-gray-200 w-full" />
          <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer w-full">
            <i className="fa-solid fa-plus text-2xl"></i>
            <span className="text-[11px] mt-1 text-center">Create</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navbar */}
          <div className="flex items-center justify-between w-full px-4 py-2 bg-white shadow-md sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <i className="fa-brands fa-youtube text-3xl text-red-600"></i>
              <span className="text-xl font-bold tracking-tight">YouTube</span>
            </div>

            {/* Search */}
            <div className="hidden sm:flex flex-1 max-w-xl mx-4">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gray-100 px-4 rounded-r-full hover:bg-gray-200">
                <i className="fa-solid fa-magnifying-glass text-gray-600"></i>
              </button>
              <button className="ml-2 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <i className="fa-solid fa-microphone text-gray-600"></i>
              </button>
            </div>

            {/* Profile */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-gray-100 px-4 py-1 rounded-full hover:bg-gray-200 font-medium text-sm">
                + Create
              </button>
              <button className="hidden md:block p-2 rounded-full hover:bg-gray-100">
                <i className="fa-solid fa-bell text-gray-600"></i>
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold cursor-pointer">
                P
              </div>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="flex-1 p-4 sm:p-6 bg-gray-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
              {/* Video Card */}
              <div className="flex flex-col cursor-pointer">
                
                <img
                  src="public/image/thumbnail/I Gave $500,000 To Random People - MrBeast.jpg"
                  className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg"
                  alt="Video thumbnail"
                  
                />
                
                <div className="flex items-start mt-2">
                  <img
                    src="public/image/logo/mrbeast.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="MrBeast Logo"
                  />
                  <div className="ml-3 flex flex-col">
                    <span className="font-medium text-sm leading-snug line-clamp-2">
                      I Gave $500,000 To Random People - MrBeast
                    </span>
                    <span className="text-gray-500 text-xs truncate">
                      MrBeast • 12M views • 2 days ago
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <img src="public/image/thumbnail/Minecraft But I Can't Break Blocks - LazarBeam.jpg" className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg" alt="Video thumbnail" />
                <div className="flex items-start mt-2">
                  <img
                    src="public/image/logo/lazarbeam.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="LazarBeam Logo"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">Minecraft But I Can't Break Blocks - LazarBeam</span>
                    <span className="text-gray-500 text-xs">LazarBeam • 3M views • 1 week ago</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <img src="public/image/thumbnail/Sidemen Try Not To Laugh Challenge.jpg" className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg" alt="Video thumbnail" />
                <div className="flex items-start mt-2">
                  <img
                    src="public/image/logo/sidemen.png"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Sidemen Logo"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">Sidemen Try Not To Laugh Challenge</span>
                    <span className="text-gray-500 text-xs">Sidemen • 4.5M views • 3 days ago</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <img src="public/image/thumbnail/Cocomelon Nursery Rhymes - Wheels on the Bus.jpg" className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg" alt="Video thumbnail" />
                <div className="flex items-start mt-2">
                  <img
                    src="public/image/logo/cocomelon.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Cocomelon Logo"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">Cocomelon Nursery Rhymes - Wheels on the Bus</span>
                    <span className="text-gray-500 text-xs">Cocomelon • 20M views • 1 day ago</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <img src="public/image/thumbnail/I Bought Everything In A Store - MrBeast.jpg" className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg" alt="Video thumbnail" />
                <div className="flex items-start mt-2">
                  <img
                    src="public/image/logo/mrbeast.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="MrBeast Logo"
                  />
                  
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">I Bought Everything In A Store - MrBeast</span>
                    <span className="text-gray-500 text-xs">MrBeast • 9M views • 5 days ago</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <img src="public/image/thumbnail/Fortnite Funny Moments - LazarBeam.jpg" className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg" alt="Video thumbnail" />
                <div className="flex items-start mt-2">
                  <img
                    src="public/image/logo/lazarbeam.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="LazarBeam Logo"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">Fortnite Funny Moments - LazarBeam</span>
                    <span className="text-gray-500 text-xs">LazarBeam • 2M views • 4 days ago</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <img src="public/image/thumbnail/Sidemen Challenge - Last to Leave Wins.jpg" className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg" alt="Video thumbnail" />
                <div className="flex items-start mt-2">
                  <img
                    src="public/image/logo/sidemen.png"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Sidemen Logo"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">Sidemen Challenge - Last to Leave Wins</span>
                    <span className="text-gray-500 text-xs">Sidemen • 6M views • 1 week ago</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <img src="public/image/thumbnail/Cocomelon ABC Songs - Learn Alphabet.jpg" className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg" alt="Video thumbnail" />
                <div className="flex items-start mt-2">
                  <img
                    src="public/image/logo/cocomelon.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Cocomelon Logo"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">Cocomelon ABC Songs - Learn Alphabet</span>
                    <span className="text-gray-500 text-xs">Cocomelon • 18M views • 2 days ago</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <img src="public/image/thumbnail/lastone.jpg" className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg" alt="Video thumbnail" />
                <div className="flex items-start mt-2">
                  <img
                    src="public/image/logo/lazarbeam.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="LazarBeam Logo"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">Minecraft But I Can't Break Blocks - LazarBeam</span>
                    <span className="text-gray-500 text-xs">LazarBeam • 3M views • 1 week ago</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
