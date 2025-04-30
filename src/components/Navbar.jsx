import React from 'react'

const Navbar = () => {
  return (
    <div class="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between" id="el-vua8zalh">
          <div class="flex items-center lg:hidden" id="el-ms8xk8by">
            <span class="text-xl font-bold text-gray-800 ml-8" id="el-50g2fw6m">TravelMate</span>
          </div>
          
          <div class="flex items-center space-x-4" id="el-tpvxck1e">
            {/* <!-- Search --> */}
            <div class="hidden md:block relative" id="el-vu0cyx2l">
              <input type="text" placeholder="Search for destinations..." class="w-64 pl-10 pr-4 py-2 rounded-lg border border-neutral-200/40 focus:outline-none focus:border-teal-500" id="el-2ruol0xs" />
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-crxx1les">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" id="el-8hsrhihb"></path>
              </svg>
            </div>
            
            {/* <!-- Notifications --> */}
            <button class="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 relative" id="el-4sgrjuyn">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-kslfjxmo">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" id="el-gzirmv4k"></path>
              </svg>
              <span class="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2" id="el-1brlsrko"></span>
            </button>
            
            {/* <!-- User Menu --> */}
            <div class="relative ml-3" id="el-l3qap80y">
              <button type="button" class="flex items-center space-x-3 focus:outline-none" id="el-67k7xctd">
                <img src="https://avatar.iran.liara.run/public/43" alt="User Avatar" class="w-8 h-8 rounded-full border border-neutral-200/30" id="el-vdtz6r10" />
                <div class="hidden md:block text-left" id="el-cep8aems">
                  <span class="text-sm font-medium" id="el-dg6wbqeg">Sarah Johnson</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-mq87r9ew">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" id="el-93wyo7ql"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
  )
}

export default Navbar