import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import MapIcon from '@mui/icons-material/Map';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setTimeout(() => setStatus(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 sm:py-20 lg:py-24">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            Get In <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MessageIcon className="mr-2 text-indigo-600" />
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <PersonIcon className="inline mr-1" fontSize="small" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <EmailIcon className="inline mr-1" fontSize="small" />
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageIcon className="inline mr-1" fontSize="small" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Send Message</span>
                <SendIcon />
              </button>
              {status && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center animate-fadeInUp">
                  {status}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <EmailIcon className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">satyamsuman2003@gmail.com</p>
                  <p className="text-gray-600">chikuss2003@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <LocationOnIcon className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Belari, Samastipur, Bihar</p>
                  <p className="text-gray-600">India</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <PhoneIcon className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600">B.Tech CSE Student</p>
                  <p className="text-gray-600">Gandhi Engineering College</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center">
            <MapIcon className="mr-2 text-indigo-600" />
            Find Me Here
          </h3>
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-indigo-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.6234567890123!2d85.8102212!3d25.8186313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed904cb6b8baa5%3A0xedb154852cae84ad!2sBelari%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Belari, Samastipur, Bihar Location"
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 mb-4 text-lg font-medium flex items-center justify-center">
              <LocationOnIcon className="mr-2 text-indigo-600" />
              Belari, Near Kali Mandir, Samastipur, Bihar, India
            </p>
            <a
              href="https://www.google.com/maps/place/Belari,+Bihar/@25.8186313,85.8102212,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              <MapIcon className="mr-2" />
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;