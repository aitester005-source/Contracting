import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from '@/components/Button';
import {
  FaChartLine,
  FaComments,
  FaEnvelope,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

export default function Admin() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (adminKey) {
      // Validate key (in production, verify with backend)
      setIsAuthenticated(true);
      setAdminKey('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Admin Dashboard - Hedefy Scaffolding</title>
        </Head>
        <div className="min-h-screen bg-primary-dark text-white flex items-center justify-center p-4">
          <div className="bg-white text-primary-dark rounded-lg shadow-2xl p-8 max-w-md w-full">
            <h1 className="text-3xl font-bold mb-2 text-center">Admin Dashboard</h1>
            <p className="text-gray-600 text-center mb-6">Enter your admin key to access</p>
            <div className="space-y-4">
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Enter admin key"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-dark"
              />
              <button
                onClick={handleLogin}
                className="w-full btn-primary"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - Hedefy Scaffolding</title>
      </Head>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <aside
          className={`bg-primary-dark text-white w-64 h-screen shadow-lg fixed md:relative transition-all duration-300 z-50 ${
            isSidebarOpen ? 'left-0' : '-left-64 md:left-0'
          }`}
        >
          <div className="p-6 border-b border-primary-light">
            <h2 className="text-2xl font-bold">Hedefy Scaffolding Contracting Co. LLC - Admin</h2>
            <p className="text-sm text-gray-300 mt-1">Dashboard</p>
          </div>

          <nav className="mt-6 px-4">
            <Link href="/admin">
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 cursor-pointer transition-colors ${
                  router.pathname === '/admin'
                    ? 'bg-accent text-primary-dark'
                    : 'text-gray-300 hover:bg-primary-light'
                }`}
              >
                <FaChartLine />
                <span>Dashboard</span>
              </div>
            </Link>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 cursor-pointer hover:bg-primary-light text-gray-300 transition-colors">
              <FaEnvelope />
              <span>Inquiries</span>
              <span className="ml-auto bg-accent text-primary-dark text-xs px-2 py-1 rounded">
                12
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 cursor-pointer hover:bg-primary-light text-gray-300 transition-colors">
              <FaComments />
              <span>Messages</span>
              <span className="ml-auto bg-accent text-primary-dark text-xs px-2 py-1 rounded">
                5
              </span>
            </div>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg transition-colors"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="flex items-center justify-between p-4 md:p-6">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden text-primary-dark text-2xl"
              >
                {isSidebarOpen ? <FaTimes /> : <FaBars />}
              </button>
              <div className="flex-1 md:flex-none">
                <h1 className="text-2xl font-bold text-primary-dark">Dashboard</h1>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-4 md:p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600 text-sm">Total Inquiries</p>
                <p className="text-4xl font-bold text-primary-dark mt-2">247</p>
                <p className="text-green-500 text-sm mt-2">↑ 12% this month</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600 text-sm">WhatsApp Leads</p>
                <p className="text-4xl font-bold text-accent mt-2">84</p>
                <p className="text-green-500 text-sm mt-2">↑ 8% this week</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600 text-sm">Chat Conversations</p>
                <p className="text-4xl font-bold text-primary-dark mt-2">156</p>
                <p className="text-green-500 text-sm mt-2">↑ 23% this month</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600 text-sm">Conversion Rate</p>
                <p className="text-4xl font-bold text-primary-dark mt-2">68%</p>
                <p className="text-green-500 text-sm mt-2">↑ 5% this week</p>
              </div>
            </div>

            {/* Recent Inquiries */}
            <section className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Recent Inquiries</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Company</th>
                      <th className="text-left py-3 px-4">Phone</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: 1,
                        name: 'Ahmed Hassan',
                        company: 'A1 Construction',
                        phone: '+971501234567',
                        date: '2024-04-10',
                        status: 'New',
                      },
                      {
                        id: 2,
                        name: 'Fatima Al-Mansouri',
                        company: 'Dubai Builders',
                        phone: '+971509876543',
                        date: '2024-04-09',
                        status: 'Contacted',
                      },
                    ].map((inquiry) => (
                      <tr
                        key={inquiry.id}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 px-4">{inquiry.name}</td>
                        <td className="py-3 px-4">{inquiry.company}</td>
                        <td className="py-3 px-4">{inquiry.phone}</td>
                        <td className="py-3 px-4">{inquiry.date}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              inquiry.status === 'New'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {inquiry.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Messages Section */}
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Recent Messages</h2>
              <div className="space-y-4">
                {[
                  { sender: 'Ahmed Hassan', message: 'Need scaffolding for building project', time: '2 hours ago' },
                  { sender: 'Chatbot', message: 'Please provide project details', time: '1 hour ago' },
                ].map((msg, idx) => (
                  <div key={idx} className="flex gap-4 pb-4 border-b last:border-b-0">
                    <div className="flex-1">
                      <p className="font-semibold text-primary-dark">{msg.sender}</p>
                      <p className="text-gray-600">{msg.message}</p>
                      <p className="text-sm text-gray-500 mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
