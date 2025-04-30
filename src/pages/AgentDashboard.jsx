import React from 'react'
import AgentNavbar from '../components/AgentNavbar'

const AgentDashboard = () => {
  return (
    
    <div id="dashboard-overview" className="page-section p-4 md:p-6 lg:p-8">
        <AgentNavbar />
                    <div class="mb-6" id="el-lcarssta">
                        <h2 class="text-2xl font-bold text-black mb-2" id="el-q1y8e24k">Agent Dashboard</h2>
                        <p class="text-black" id="el-e8eigbiz">Welcome back, Sarah! Here's what's happening with your travel packages.</p>
                    </div>
                    
                    {/* <!-- Stats Overview --> */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8" id="el-pa8dllzv">
                        <div class="bg-neutral-800 rounded-xl p-5 border border-neutral-700/20" id="el-llxqe7fa">
                            <div class="flex justify-between items-center mb-2" id="el-e97cts4c">
                                <div class="text-neutral-400 text-sm" id="el-5c40s8z9">Total Bookings</div>
                                <div class="bg-teal-500/10 text-teal-400 p-1 rounded" id="el-hpaym3ot">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-csv3gka8">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" id="el-kez0vh4i"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-white" id="el-fx3tve53">124</div>
                            <div class="flex items-center mt-2" id="el-s5d3w79w">
                                <span class="text-green-400 text-sm flex items-center" id="el-kjwfd8j8">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-8sw4hlwq">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" id="el-guegkdjb"></path>
                                    </svg>
                                    12.5%
                                </span>
                                <span class="text-neutral-400 text-xs ml-2" id="el-yuxwj6rq">since last month</span>
                            </div>
                        </div>

                        <div class="bg-neutral-800 rounded-xl p-5 border border-neutral-700/20" id="el-6szjfxif">
                            <div class="flex justify-between items-center mb-2" id="el-4xygpc9c">
                                <div class="text-neutral-400 text-sm" id="el-j8xae0h8">Revenue</div>
                                <div class="bg-green-500/10 text-green-400 p-1 rounded" id="el-s1onyxgm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-8kny9we4">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" id="el-vqy8wkt0"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-white" id="el-mgdnolb6">$24,389</div>
                            <div class="flex items-center mt-2" id="el-m0hgdhts">
                                <span class="text-green-400 text-sm flex items-center" id="el-75ih1x4k">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-vg9f5byt">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" id="el-qek4xduc"></path>
                                    </svg>
                                    8.2%
                                </span>
                                <span class="text-neutral-400 text-xs ml-2" id="el-7sej4zyh">since last month</span>
                            </div>
                        </div>

                        <div class="bg-neutral-800 rounded-xl p-5 border border-neutral-700/20" id="el-mcbdwmg9">
                            <div class="flex justify-between items-center mb-2" id="el-5eyui2j4">
                                <div class="text-neutral-400 text-sm" id="el-32b6zahc">Active Packages</div>
                                <div class="bg-blue-500/10 text-blue-400 p-1 rounded" id="el-tl6z774q">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-13vm1hda">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" id="el-rftg50id"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-white" id="el-dnyc8dbv">12</div>
                            <div class="flex items-center mt-2" id="el-c8eeqiwu">
                                <span class="text-green-400 text-sm flex items-center" id="el-2xox4cl7">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-t23at85x">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" id="el-k7wxoi5m"></path>
                                    </svg>
                                    2 new
                                </span>
                                <span class="text-neutral-400 text-xs ml-2" id="el-zoryjiae">since last week</span>
                            </div>
                        </div>

                        <div class="bg-neutral-800 rounded-xl p-5 border border-neutral-700/20" id="el-qgwnnhp2">
                            <div class="flex justify-between items-center mb-2" id="el-m4fsckk4">
                                <div class="text-neutral-400 text-sm" id="el-cs6lk55a">New Messages</div>
                                <div class="bg-purple-500/10 text-purple-400 p-1 rounded" id="el-8ltovigu">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-ibay3pob">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" id="el-wcycwzu0"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="text-3xl font-bold text-white" id="el-e5u0u7of">18</div>
                            <div class="flex items-center mt-2" id="el-a2ivgs2a">
                                <span class="text-red-400 text-sm flex items-center" id="el-xfa5ritu">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-vo827c7i">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" id="el-k9z0cdok"></path>
                                    </svg>
                                    3 unread
                                </span>
                                <span class="text-neutral-400 text-xs ml-2" id="el-zvfkfn1v">responded within 12h</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Recent Activity & Bookings --> */}
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8" id="el-lygbtgii">
                        {/* <!-- Recent Bookings --> */}
                        <div class="lg:col-span-2 bg-neutral-800 rounded-xl border border-neutral-700/20 overflow-hidden" id="el-07pk5al4">
                            <div class="p-5 border-b border-neutral-700/20" id="el-m7gisij0">
                                <h3 class="text-lg font-medium text-white" id="el-1ev19i7j">Recent Bookings</h3>
                                <p class="text-sm text-neutral-400 mt-1" id="el-vmkdrmop">Latest travel requests and confirmations</p>
                            </div>
                            <div class="overflow-x-auto" id="el-oqrib4q5">
                                <table class="w-full text-sm text-left" id="el-aio8x7im">
                                    <thead class="text-xs text-neutral-400 uppercase bg-neutral-800" id="el-awwqnpmm">
                                        <tr id="el-qc12pj0d">
                                            <th scope="col" class="px-5 py-3" id="el-6ydtqzc3">Customer</th>
                                            <th scope="col" class="px-5 py-3" id="el-kv4rrx2z">Destination</th>
                                            <th scope="col" class="px-5 py-3" id="el-wpj2hm4r">Date</th>
                                            <th scope="col" class="px-5 py-3" id="el-q5fav0vl">Amount</th>
                                            <th scope="col" class="px-5 py-3" id="el-zbh9agk0">Status</th>
                                            <th scope="col" class="px-5 py-3" id="el-8hgy7pow">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="el-gfvjwi7q">
                                        <tr class="border-b border-neutral-700/10 bg-neutral-800 hover:bg-neutral-700/30" id="el-ll1365my">
                                            <td class="px-5 py-4 flex items-center space-x-3 whitespace-nowrap" id="el-x46p9a23">
                                                <img class="w-8 h-8 rounded-full object-cover" src="https://avatar.iran.liara.run/public/boy" alt="Customer" id="el-1pdg7k9u" />
                                                <div id="el-nr3nzlgm">
                                                    <p class="text-white" id="el-h8obmsce">Michael Chen</p>
                                                    <p class="text-neutral-400 text-xs" id="el-9vhur5ob">ID: #3845</p>
                                                </div>
                                            </td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-dtc58uxw">Bali, Indonesia</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-beebkxsa">Jul 14, 2023</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-mp1872c4">$2,450</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-1dq1ods3">
                                                <span class="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400" id="el-p1exfzvm">Confirmed</span>
                                            </td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-1zq3du5t">
                                                <button class="text-blue-400 hover:text-blue-300 text-sm font-medium" id="el-irvhe1h4">Details</button>
                                            </td>
                                        </tr>
                                        <tr class="border-b border-neutral-700/10 bg-neutral-800 hover:bg-neutral-700/30" id="el-pzlz8y86">
                                            <td class="px-5 py-4 flex items-center space-x-3 whitespace-nowrap" id="el-zk9mr65a">
                                                <img class="w-8 h-8 rounded-full object-cover" src="https://avatar.iran.liara.run/public/girl" alt="Customer" id="el-m506rwag" />
                                                <div id="el-uib2kllj">
                                                    <p class="text-white" id="el-31sa50n5">Emma Thompson</p>
                                                    <p class="text-neutral-400 text-xs" id="el-tziad719">ID: #3844</p>
                                                </div>
                                            </td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-luazu4b8">Santorini, Greece</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-xftgkzze">Jul 10, 2023</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-n5aa01h2">$3,200</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-1jdu0cfs">
                                                <span class="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-400" id="el-a4z8ohe2">Pending</span>
                                            </td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-1e5c5top">
                                                <button class="text-blue-400 hover:text-blue-300 text-sm font-medium" id="el-irv4a7pa">Review</button>
                                            </td>
                                        </tr>
                                        <tr class="border-b border-neutral-700/10 bg-neutral-800 hover:bg-neutral-700/30" id="el-dtgocbgi">
                                            <td class="px-5 py-4 flex items-center space-x-3 whitespace-nowrap" id="el-csibhirb">
                                                <img class="w-8 h-8 rounded-full object-cover" src="https://avatar.iran.liara.run/public/man" alt="Customer" id="el-hqj00c3i" />
                                                <div id="el-y5qqim9d">
                                                    <p class="text-white" id="el-8x80oicn">James Wilson</p>
                                                    <p class="text-neutral-400 text-xs" id="el-3vn5orcy">ID: #3843</p>
                                                </div>
                                            </td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-0j8v5vsh">Tokyo, Japan</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-du07g01a">Jul 8, 2023</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-efvfpvw3">$4,100</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-0cubrz5u">
                                                <span class="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400" id="el-f4o1624c">Confirmed</span>
                                            </td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-l8q9fb74">
                                                <button class="text-blue-400 hover:text-blue-300 text-sm font-medium" id="el-x9dkgaar">Details</button>
                                            </td>
                                        </tr>
                                        <tr class="border-b border-neutral-700/10 bg-neutral-800 hover:bg-neutral-700/30" id="el-590oro92">
                                            <td class="px-5 py-4 flex items-center space-x-3 whitespace-nowrap" id="el-2p37ae97">
                                                <img class="w-8 h-8 rounded-full object-cover" src="https://avatar.iran.liara.run/public/woman" alt="Customer" id="el-yb8yr3rg" />
                                                <div id="el-petm366r">
                                                    <p class="text-white" id="el-azwjieuj">Sophia Rodriguez</p>
                                                    <p class="text-neutral-400 text-xs" id="el-y1ttntaq">ID: #3842</p>
                                                </div>
                                            </td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-44011ozh">Barcelona, Spain</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-gle85d9a">Jul 5, 2023</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-kqe5tgn5">$2,800</td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-ibht2z5d">
                                                <span class="px-2 py-1 text-xs rounded-full bg-red-500/10 text-red-400" id="el-ze39radz">Canceled</span>
                                            </td>
                                            <td class="px-5 py-4 whitespace-nowrap" id="el-asuc82cq">
                                                <button class="text-blue-400 hover:text-blue-300 text-sm font-medium" id="el-j7h2eau5">Details</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="p-4 border-t border-neutral-700/10 text-center" id="el-47urxv2s">
                                <a href="#" class="text-sm text-blue-400 hover:text-blue-300 font-medium" id="el-idgbhesg" target="_self">View all bookings</a>
                            </div>
                        </div>

                        {/* <!-- Recent Activity --> */}
                        <div class="bg-neutral-800 rounded-xl border border-neutral-700/20 overflow-hidden" id="el-wsch8ldz">
                            <div class="p-5 border-b border-neutral-700/20" id="el-la6hqtoc">
                                <h3 class="text-lg font-medium text-white" id="el-kdkd25wz">Recent Activity</h3>
                                <p class="text-sm text-neutral-400 mt-1" id="el-e3k6zspe">Latest updates and notifications</p>
                            </div>
                            <div class="p-5" id="el-mlkyauwk">
                                <div class="flow-root" id="el-22y8bd9f">
                                    <ul class="divide-y divide-neutral-700/10" id="el-gdloepiv">
                                        <li class="py-3 sm:py-4" id="el-zod4hwzu">
                                            <div class="flex items-start space-x-4" id="el-ciavs6wx">
                                                <div class="flex-shrink-0" id="el-d9h4qi3x">
                                                    <div class="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400" id="el-zmzodpyl">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-d2pp1zy5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" id="el-8bmuwlxe"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="flex-1 min-w-0" id="el-gu9u0oyp">
                                                    <p class="text-sm font-medium text-white" id="el-296oqsd8">New message from Emma Thompson</p>
                                                    <p class="text-sm text-neutral-400 truncate" id="el-rbk17zeh">Hi, I'd like more information about the Greece package...</p>
                                                    <p class="text-xs text-neutral-500 mt-1" id="el-6ueacbzd">10 minutes ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4" id="el-qyx5vsv4">
                                            <div class="flex items-start space-x-4" id="el-r14vbkme">
                                                <div class="flex-shrink-0" id="el-2x35hr8c">
                                                    <div class="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400" id="el-k6jooois">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-z74ivaq2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" id="el-2edoqr5t"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="flex-1 min-w-0" id="el-tgo8gmwt">
                                                    <p class="text-sm font-medium text-white" id="el-gcj37nly">Booking confirmed</p>
                                                    <p class="text-sm text-neutral-400 truncate" id="el-tmvze775">Michael Chen's booking for Bali has been confirmed</p>
                                                    <p class="text-xs text-neutral-500 mt-1" id="el-ws1hk8sj">45 minutes ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4" id="el-7yl7inbo">
                                            <div class="flex items-start space-x-4" id="el-s8h389pp">
                                                <div class="flex-shrink-0" id="el-et4rews7">
                                                    <div class="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400" id="el-r8ugelo5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-3jy1cz2o">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" id="el-5fofmlq1"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="flex-1 min-w-0" id="el-xeg5tgam">
                                                    <p class="text-sm font-medium text-white" id="el-3rngg6w5">New package created</p>
                                                    <p class="text-sm text-neutral-400 truncate" id="el-eutn39hy">You've created "Tokyo Explorer" package</p>
                                                    <p class="text-xs text-neutral-500 mt-1" id="el-nbrpol6f">2 hours ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4" id="el-ozlr9x9x">
                                            <div class="flex items-start space-x-4" id="el-3ninnken">
                                                <div class="flex-shrink-0" id="el-q4uh9xpg">
                                                    <div class="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400" id="el-tp948x51">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-16qbjdox">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" id="el-ksm2q4s9"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="flex-1 min-w-0" id="el-9hi0cloh">
                                                    <p class="text-sm font-medium text-white" id="el-ec0ft7gd">Booking reminder</p>
                                                    <p class="text-sm text-neutral-400 truncate" id="el-a3il1db3">James Wilson's trip to Tokyo starts in 3 days</p>
                                                    <p class="text-xs text-neutral-500 mt-1" id="el-vcddrqj1">4 hours ago</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4" id="el-4onj9q2n">
                                            <div class="flex items-start space-x-4" id="el-wx751zau">
                                                <div class="flex-shrink-0" id="el-f8eucz2q">
                                                    <div class="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400" id="el-efwmqk4x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="el-eu9qmweq">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" id="el-2axgn7tc"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="flex-1 min-w-0" id="el-jm5p78rk">
                                                    <p class="text-sm font-medium text-white" id="el-xpdwnjjr">Booking canceled</p>
                                                    <p class="text-sm text-neutral-400 truncate" id="el-go6ob5q9">Sophia Rodriguez has canceled her Barcelona trip</p>
                                                    <p class="text-xs text-neutral-500 mt-1" id="el-21iu6to7">Yesterday</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="p-4 border-t border-neutral-700/10 text-center" id="el-2a8c2xqz">
                                <a href="#" class="text-sm text-blue-400 hover:text-blue-300 font-medium" id="el-rd3vj5ac" target="_self">View all activity</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Popular Destinations & Performance --> */}
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" id="el-0ic0rgex">
                        {/* <!-- Popular Destinations --> */}
                        <div class="bg-neutral-800 rounded-xl border border-neutral-700/20 overflow-hidden" id="el-obcbsr61">
                            <div class="p-5 border-b border-neutral-700/20" id="el-ndy9pn37">
                                <h3 class="text-lg font-medium text-white" id="el-2ebbsg3c">Popular Destinations</h3>
                                <p class="text-sm text-neutral-400 mt-1" id="el-u0b16vyv">Most booked destinations this month</p>
                            </div>
                            <div class="p-5" id="el-va5td22e">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="el-w4ssppzc">
                                    <div class="group rounded-lg overflow-hidden relative" id="el-64erld56">
                                        <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8dHJhdmVsJTJCYWdlbnQlMkJkYXNoYm9hcmQlMkJpbnRlcmZhY2V8ZW58MHx8fHwxNzQ1OTk1NTA1fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400" alt="Cappadocia, Turkey" class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" id="el-fdxe0nud" />
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" id="el-6xa8oh2t"></div>
                                        <div class="absolute bottom-0 left-0 p-3" id="el-aaspf6nt">
                                            <h4 class="text-white font-medium" id="el-b4djhfjj">Cappadocia</h4>
                                            <p class="text-neutral-300 text-xs" id="el-o8siputk">32 bookings</p>
                                        </div>
                                    </div>
                                    <div class="group rounded-lg overflow-hidden relative" id="el-kf5c9yd5">
                                        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8dHJhdmVsJTJCYWdlbnQlMkJkYXNoYm9hcmQlMkJpbnRlcmZhY2V8ZW58MHx8fHwxNzQ1OTk1NTA1fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400" alt="Lago di Braies" class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" id="el-kdu9m0j6" />
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" id="el-dnq88z4w"></div>
                                        <div class="absolute bottom-0 left-0 p-3" id="el-b372grt4">
                                            <h4 class="text-white font-medium" id="el-pwzvi7te">Italian Lakes</h4>
                                            <p class="text-neutral-300 text-xs" id="el-y7oes79n">28 bookings</p>
                                        </div>
                                    </div>
                                    <div class="group rounded-lg overflow-hidden relative" id="el-5p6tlxe5">
                                        <img src="https://images.unsplash.com/photo-1476900543704-4312b78632f8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8dHJhdmVsJTJCYWdlbnQlMkJkYXNoYm9hcmQlMkJpbnRlcmZhY2V8ZW58MHx8fHwxNzQ1OTk1NTA1fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400" alt="Majorca Sunset" class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" id="el-31gvz41a" />
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" id="el-zot1sf51"></div>
                                        <div class="absolute bottom-0 left-0 p-3" id="el-fb8fuwx9">
                                            <h4 class="text-white font-medium" id="el-muj0jwlg">Majorca</h4>
                                            <p class="text-neutral-300 text-xs" id="el-9tv4rh30">25 bookings</p>
                                        </div>
                                    </div>
                                    <div class="group rounded-lg overflow-hidden relative" id="el-wj441utb">
                                        <img src="https://images.unsplash.com/photo-1504598318550-17eba1008a68?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8dHJhdmVsJTJCYWdlbnQlMkJkYXNoYm9hcmQlMkJpbnRlcmZhY2V8ZW58MHx8fHwxNzQ1OTk1NTA1fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400" alt="Iceland Road" class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" id="el-44cxlzs7" />
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" id="el-x6bw782q"></div>
                                        <div class="absolute bottom-0 left-0 p-3" id="el-bz8jvof5">
                                            <h4 class="text-white font-medium" id="el-50chxw7t">Iceland</h4>
                                            <p class="text-neutral-300 text-xs" id="el-0ryjrca9">21 bookings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 border-t border-neutral-700/10 text-center" id="el-wctum3n8">
                                <a href="#" class="text-sm text-blue-400 hover:text-blue-300 font-medium" id="el-c4bapppn" target="_self">View all destinations</a>
                            </div>
                        </div>

                        {/* <!-- Agent Performance --> */}
                        <div class="bg-neutral-800 rounded-xl border border-neutral-700/20 overflow-hidden" id="el-9783y73j">
                            <div class="p-5 border-b border-neutral-700/20" id="el-7x3xsex5">
                                <h3 class="text-lg font-medium text-white" id="el-f0sgay8h">Performance Overview</h3>
                                <p class="text-sm text-neutral-400 mt-1" id="el-i0o3jjs1">Your performance metrics and customer ratings</p>
                            </div>
                            <div class="p-5" id="el-q46kyg9u">
                                <div class="grid grid-cols-2 gap-4 mb-6" id="el-9ot0cv6a">
                                    <div class="text-center p-4 bg-neutral-700/30 rounded-lg" id="el-jf4j0wo7">
                                        <div class="text-3xl font-bold text-white" id="el-w5m1ciir">4.8</div>
                                        <div class="flex justify-center my-1" id="el-3nm19vjg">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-yellow-400" id="el-pu0j35bg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" id="el-xda6018k"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-yellow-400" id="el-z4hq9sn1">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" id="el-i3fj4qha"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-yellow-400" id="el-ecca682r">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" id="el-ivsjr07i"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-yellow-400" id="el-pp9wkfre">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" id="el-uhrt85za"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-neutral-400" id="el-xwn8ryj2">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" id="el-qgi57w6u"></path>
                                            </svg>
                                        </div>
                                        <div class="text-neutral-400 text-sm" id="el-tia6w3zk">Average Rating</div>
                                    </div>
                                    <div class="text-center p-4 bg-neutral-700/30 rounded-lg" id="el-esv0pao8">
                                        <div class="text-3xl font-bold text-white" id="el-lk9siwog">98%</div>
                                        <div class="my-1" id="el-xt66z40h">
                                            <span class="inline-block w-16 h-1.5 bg-green-400 rounded" id="el-k1axbwad"></span>
                                        </div>
                                        <div class="text-neutral-400 text-sm" id="el-qc4c8yms">Response Rate</div>
                                    </div>
                                </div>
                                
                                <div class="space-y-4" id="el-e25iq5k1">
                                    <div class="space-y-2" id="el-z1h67nes">
                                        <div class="flex justify-between items-center text-sm" id="el-4m7m5iek">
                                            <span class="text-neutral-300" id="el-wmfp5kwi">Trip Customization</span>
                                            <span class="text-white font-medium" id="el-f2oslizq">94%</span>
                                        </div>
                                        <div class="w-full bg-neutral-700/30 rounded-full h-2" id="el-eua9yjbq">
                                            <div class="bg-blue-500 h-2 rounded-full"  id="el-oqm96dt9"></div>
                                        </div>
                                    </div>
                                    <div class="space-y-2" id="el-7d6c7d0i">
                                        <div class="flex justify-between items-center text-sm" id="el-mjktcq99">
                                            <span class="text-neutral-300" id="el-k4h8t9ep">Customer Satisfaction</span>
                                            <span class="text-white font-medium" id="el-nzuof6t1">92%</span>
                                        </div>
                                        <div class="w-full bg-neutral-700/30 rounded-full h-2" id="el-45ibsa48">
                                            <div class="bg-purple-500 h-2 rounded-full"  id="el-l43cobgu"></div>
                                        </div>
                                    </div>
                                    <div class="space-y-2" id="el-v2xjn46y">
                                        <div class="flex justify-between items-center text-sm" id="el-mj36kop6">
                                            <span class="text-neutral-300" id="el-i9hsh46f">Communication</span>
                                            <span class="text-white font-medium" id="el-2x750gm0">98%</span>
                                        </div>
                                        <div class="w-full bg-neutral-700/30 rounded-full h-2" id="el-eg8btseq">
                                            <div class="bg-green-500 h-2 rounded-full"  id="el-tosb01f6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 border-t border-neutral-700/10 text-center" id="el-ks7qbe6r">
                                <a href="#" class="text-sm text-blue-400 hover:text-blue-300 font-medium" id="el-goid0wet" target="_self">View detailed analytics</a>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default AgentDashboard