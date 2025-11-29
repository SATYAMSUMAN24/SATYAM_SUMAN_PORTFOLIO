
import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [progressVisible, setProgressVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setProgressVisible(true), 500);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const codingSkills = [
    { name: 'JavaScript', icon: 'JS', color: '#F7DF1E', level: 92, experience: '3+ years' },
    { name: 'React', icon: '⚛️', color: '#61DAFB', level: 90, experience: '2.5+ years' },
    { name: 'Java', icon: '☕', color: '#007396', level: 88, experience: '3+ years' },
    { name: 'Python', icon: '🐍', color: '#3776AB', level: 85, experience: '2+ years' },
    { name: 'Node.js', icon: '🟢', color: '#339933', level: 85, experience: '2+ years' },
    { name: 'Express.js', icon: 'ex', color: '#000000', level: 82, experience: '2+ years' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248', level: 80, experience: '1.5+ years' },
    { name: 'HTML/CSS', icon: '🌐', color: '#E34F26', level: 95, experience: '4+ years' },
    { name: 'Tailwind CSS', icon: '🎨', color: '#06B6D4', level: 88, experience: '1.5+ years' },
    { name: 'Git', icon: '📦', color: '#F05032', level: 85, experience: '3+ years' },
    { name: 'MySQL', icon: '🗄️', color: '#4479A1', level: 78, experience: '1.5+ years' },
    { name: 'Bootstrap', icon: 'B', color: '#7952B3', level: 80, experience: '2+ years' },
    { name: 'TypeScript', icon: 'TS', color: '#3178C6', level: 75, experience: '1+ years' },
    { name: 'C/C++', icon: '⚙️', color: '#00599C', level: 80, experience: '2+ years' }
  ];

  const tools = [
    { name: 'VS Code', icon: '💻', color: '#007ACC' },
    { name: 'GitHub', icon: '🐙', color: '#181717' },
    { name: 'IntelliJ IDEA', icon: '🔧', color: '#000000' },
    { name: 'Eclipse', icon: '🌑', color: '#2C2255' },
    { name: 'Figma', icon: '🎨', color: '#F24E1E' },
    { name: 'Vercel', icon: '▲', color: '#000000' },
    { name: 'Postman', icon: '📮', color: '#FF6C37' },
    { name: 'Netlify', icon: '🌐', color: '#00C7B7' }
  ];

  const softSkills = [
    { 
      name: 'Communication', 
      description: 'Effective verbal and written communication skills',
      icon: '💬',
      color: '#3B82F6'
    },
    { 
      name: 'Problem Solving', 
      description: 'Analytical thinking and solution-oriented approach',
      icon: '🧩',
      color: '#8B5CF6'
    },
    { 
      name: 'Team Work', 
      description: 'Collaborative and supportive team player',
      icon: '🤝',
      color: '#10B981'
    },
    { 
      name: 'Leadership', 
      description: 'Ability to guide and motivate teams effectively',
      icon: '👑',
      color: '#F59E0B'
    },
    { 
      name: 'Time Management', 
      description: 'Efficient task prioritization and deadline management',
      icon: '⏰',
      color: '#EF4444'
    },
    { 
      name: 'Creativity', 
      description: 'Innovative thinking and creative problem-solving',
      icon: '🎨',
      color: '#EC4899'
    }
  ];

  const courses = [
    {
      name: 'Java Programming Complete Course',
      icon: '☕',
      color: '#007396',
      link: 'https://www.youtube.com/watch?v=yRpLlJmRo2w',
      description: 'Comprehensive Java programming covering OOP, collections, multithreading, and design patterns',
      instructor: 'Apna College By Shardha Khapra',
      duration: '40+ hours',
      rating: '4.9/5'
    },
    {
      name: 'Data Structures and Algorithms in Java',
      icon: '🧮',
      color: '#4CAF50',
      link: 'https://www.youtube.com/watch?v=CBYHwZcbD-s',
      description: 'Complete DSA course with Java implementation and problem-solving techniques',
      instructor: 'Code With Harry',
      duration: '50+ hours',
      rating: '4.8/5'
    },
    {
      name: 'React.js - The Complete Guide',
      icon: '⚛️',
      color: '#61DAFB',
      link: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
      description: 'Master React.js from basics to advanced concepts including hooks, context, and routing',
      instructor: 'Code With Harry',
      duration: '30 hours',
      rating: '4.8/5'
    },
    {
      name: 'Python Programming Masterclass',
      icon: '🐍',
      color: '#3776AB',
      link: 'https://youtu.be/UrsmFxEIp5k',
      description: 'Complete Python course from beginner to advanced with real projects',
      instructor: 'Code With Harry',
      duration: '35 hours',
      rating: '4.9/5'
    },
    {
      name: 'MERN Stack Development',
      icon: '🌐',
      color: '#68A063',
      link: 'https://www.youtube.com/watch?v=7CqJlxBYj-M',
      description: 'Full MERN stack development with MongoDB, Express.js, React, and Node.js',
      instructor: 'Code With Harry',
      duration: '25 hours',
      rating: '4.8/5'
    },
    {
      name: 'Database Management with MySQL',
      icon: '🗄️',
      color: '#4479A1',
      link: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
      description: 'Complete MySQL course covering database design, queries, and optimization',
      instructor: 'Derek Banas',
      duration: '15 hours',
      rating: '4.7/5'
    },
    {
      name: 'Web Development Bootcamp',
      icon: '💻',
      color: '#E34F26',
      link: 'https://www.youtube.com/watch?v=G3e-cpL7ofc',
      description: 'Complete web development bootcamp covering HTML, CSS, JavaScript, and frameworks',
      instructor: 'freeCodeCamp',
      duration: '40+ hours',
      rating: '4.9/5'
    },
    {
      name: 'Git & GitHub Mastery',
      icon: '📦',
      color: '#F05032',
      link: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
      description: 'Master Git version control, GitHub workflows, and collaborative development',
      instructor: 'Brad Traversy',
      duration: '8 hours',
      rating: '4.8/5'
    },
    {
      name: 'C++ Programming and OOP',
      icon: '⚙️',
      color: '#00599C',
      link: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y',
      description: 'Complete C++ programming with object-oriented programming concepts',
      instructor: 'CodeWithHarry',
      duration: '30 hours',
      rating: '4.7/5'
    }
  ];

  return (
    <div className="py-16 bg-gray-50 sm:py-20 lg:py-24 section-padding" id="skills">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 container">
        
        {/* Technical Skills Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            My <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600">Technologies and tools I work with to bring ideas to life</p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Programming Languages & Frameworks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingSkills.map((skill, index) => (
              <div key={index} className="card-hover bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 text-lg font-bold"
                    style={{ backgroundColor: skill.color + '20', color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-md font-semibold text-gray-900">{skill.name}</h4>
                    <p className="text-xs text-gray-500">{skill.experience}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Proficiency</span>
                    <span className="text-sm font-medium text-indigo-600">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-bar"
                      style={{
                        width: progressVisible ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Development Tools</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div 
                    className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl"
                    style={{ backgroundColor: tool.color + '15' }}
                  >
                    {tool.icon}
                  </div>
                  <h4 className="text-md font-semibold text-gray-900">{tool.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Soft Skills & Personal Attributes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="card-hover bg-white rounded-xl p-6 shadow-lg text-center group">
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: skill.color + '15' }}
                >
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Courses & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="card-hover bg-white rounded-xl shadow-lg overflow-hidden">
                <div 
                  className="w-full h-48 flex items-center justify-center"
                  style={{ backgroundColor: course.color + '15' }}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-2">{course.icon}</div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/80" style={{ color: course.color }}>
                      {course.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-indigo-600">{course.instructor}</span>
                    <span className="text-sm font-medium text-yellow-600">⭐ {course.rating}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{course.name}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  
                  <a 
                    href={course.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    View Course
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
