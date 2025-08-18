import React from "react";

export default function VideoPlayer() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black text-white">
      {/* Video Player */}
      <div className="w-full max-w-5xl aspect-video bg-black">
        <video className="w-full h-full rounded-lg" controls autoPlay>
          <source
            src="src/assets/videos/I Gave $500,000 To Random People.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Info */}
      <div className="w-full max-w-5xl mt-4 p-4">
        {/* Title */}
        <h1 className="text-xl font-bold">
          I Gave $500,000 To Random People - MrBeast
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          12,345,678 views • 2 days ago
        </p>

        {/* Channel & Subscribe */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-3">
            <img
              src="src/assets/image/logo/mrbeast.jpg"
              alt="MrBeast Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold">MrBeast</h2>
              <p className="text-gray-400 text-xs">250M subscribers</p>
            </div>
          </div>
          <button className="bg-red-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-red-700">
            Subscribe
          </button>
        </div>

        {/* Video Actions */}
        <div className="flex items-center space-x-4 mt-4">
          <button className="flex items-center bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700">
            👍 <span className="ml-2">1.2M</span>
          </button>
          <button className="flex items-center bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700">
            👎
          </button>
          <button className="flex items-center bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700">
            🔗 Share
          </button>
          <button className="flex items-center bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700">
            ⬇ Download
          </button>
        </div>

        {/* Description */}
        <div className="mt-6 bg-gray-900 p-4 rounded-lg">
          <p className="text-gray-200 text-sm leading-relaxed">
            In this video, I gave $500,000 to random people just to make their
            day better! 🎉  
            <br />
            Make sure to subscribe for more crazy challenges and giveaways!
          </p>
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Comments • 15,678</h3>

          {/* Add Comment Box */}
          <div className="flex items-start space-x-3 mb-6">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              P
            </div>
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 bg-transparent border-b border-gray-600 focus:outline-none text-sm"
            />
          </div>

          {/* Example Comment */}
          <div className="flex items-start space-x-3 mb-4">
            <img
              src="src/assets/image/logo/lazarbeam.jpg"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm">
                <span className="font-semibold">LazarBeam</span>{" "}
                This is insane 😂🔥
              </p>
              <p className="text-gray-400 text-xs mt-1">2.3K likes • 1 day ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 mb-4">
            <img
              src="src/assets/image/logo/sidemen.png"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm">
                <span className="font-semibold">Sidemen</span> Bro just casually
                giving away 500k 😱
              </p>
              <p className="text-gray-400 text-xs mt-1">5.1K likes • 2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
