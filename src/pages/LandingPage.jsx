import React from 'react'
import SectionsPage from './SectionsPage'
import Section2Page from './Section2Page'
import Section3Page from './Section3Page'
import BenefitsPage from './BenefitsPage'
import DestinationsPage from './DestinationsPage'
import Footer from './Footer'
import AgentDashboard from './AgentDashboard'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='bg-black'>
        <div class="container relative z-10  mx-auto px-4 py-20 md:py-28 lg:py-32" id="el-2316yw6c">
      <div class="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center" id="el-jonhl8iw">
        <div class="order-2 md:order-1" id="el-opxd9jc4">
          <h1 class="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" id="el-811liz7y">
            <span className="block text-white" >Personalized Travel</span>
            <span class="block mt-2 text-blue-400" id="el-s4rk73w2">For Every Explorer</span>
          </h1>
          <p class="mb-8 text-lg text-gray-300 lg:text-xl max-w-lg" id="el-ac9qgd2b">
            Connect directly with local travel agents to create custom adventures that match your unique style, budget, and interests.
          </p>
          
          <div class="flex flex-wrap gap-4" id="el-eia2t7wf">
            <a href="#features" class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" id="el-nfjljem4" target="_self">
              Explore Features
            </a>
            <Link to="/signup" class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" id="el-y20jqp5o" target="_self">
              Sign Up
            </Link>

          </div>
          
          {/* <!-- Tags --> */}
          <div class="mt-10 flex flex-wrap gap-3" id="el-mijzswky">
            <span class="rounded-full bg-blue-900/40 px-3 py-1 text-sm text-blue-200" id="el-tv08h0h8">Real-time Chat</span>
            <span class="rounded-full bg-blue-900/40 px-3 py-1 text-sm text-blue-200" id="el-rtfq60zd">Custom Itineraries</span>
            <span class="rounded-full bg-blue-900/40 px-3 py-1 text-sm text-blue-200" id="el-xonzdxma">Local Expertise</span>
          </div>
        </div>
        
        <div class="order-1 md:order-2 relative" id="el-57lhfe2m">
          {/* <!-- Main image --> */}
          <div class="relative z-10 rounded-lg shadow-xl overflow-hidden border border-neutral-700" id="el-w9ilnqkf">
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8dHJpcCUyQmN1c3RvbWl6YXRpb24lMkJwbGF0Zm9ybXxlbnwwfHx8fDE3NDU5OTU1MDV8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400" alt="Planning for the weekend" class="w-full h-auto rounded-lg" id="el-4vdz5anz" />
          </div>
          
          {/* <!-- Floating elements --> */}
          <div class="absolute -bottom-4 -left-4 z-20 rounded-lg bg-white p-3 shadow-lg md:-left-8" id="el-icfi0vw9">
            <div class="flex items-center gap-3" id="el-4vc3snhw">
              <div class="rounded-full bg-blue-100 p-2" id="el-l2m24kx8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-jy7rhcph">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" id="el-zc0mirtw"></path>
                </svg>
              </div>
              <div id="el-6jqonpdh">
                <p class="font-medium text-neutral-900" id="el-avnelsiy">Live chat with agents</p>
                <p class="text-sm text-neutral-600" id="el-et074895">Get answers instantly</p>
              </div>
            </div>
          </div>
          
          <div class="absolute -top-4 -right-4 z-20 rounded-lg bg-white p-3 shadow-lg md:-right-8" id="el-u31s42q1">
            <div class="flex items-center gap-3" id="el-p9wuuupl">
              <div class="rounded-full bg-green-100 p-2" id="el-onzdch09">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-bj54vy3l">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" id="el-ezdc4qui"></path>
                </svg>
              </div>
              <div id="el-t7uk3z9l">
                <p class="font-medium text-neutral-900" id="el-xxihl4dq">Trusted local experts</p>
                <p class="text-sm text-neutral-600" id="el-rvh3lohe">Verified travel agents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SectionsPage />
    <Section2Page />
    <Section3Page />
    <BenefitsPage />
    <DestinationsPage />
    <Footer />
    </div>
  )
}

export default LandingPage