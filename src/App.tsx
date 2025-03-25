import React, { useEffect, useRef, useState } from 'react';
import { Github, BookMarked, CalendarRange, Building2, Feather, Zap, Linkedin, Mail, MapPin, Phone, GraduationCap, Briefcase, Award, UserRoundCheck, Lightbulb, ExternalLink, Calendar, Syringe, Gamepad2, NotebookPen, MoonStar, MapPinned, Languages } from 'lucide-react';


function App() {
  const languagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    if (languagesContainerRef.current) {
      const cards = languagesContainerRef.current.querySelectorAll('.language-card');
      cards.forEach((card, index) => {
        (card as HTMLElement).style.setProperty('--delay', `${index * 0.1}s`);
        observer.observe(card);
      });
    }

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section, index) => {
      section.classList.add('opacity-0');
      (section as HTMLElement).style.setProperty('--slide-delay', `${index * 0.1}s`);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all sections for slide-up animation
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section, index) => {
      section.classList.add('opacity-0');
      (section as HTMLElement).style.setProperty('--slide-delay', `${index * 0.05}s`);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;
    const threshold = 190;
    let spinner: HTMLDivElement | null = null;
    let pulling = false;

    const createSpinner = () => {
      spinner = document.createElement('div');
      spinner.className = 'pull-to-refresh-spinner';
      spinner.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M23 4V10H17M1 20V14H7M3.51 9C4.01717 7.56678 4.87913 6.2854 6.01547 5.27542C7.1518 4.26543 8.52547 3.55976 10.0083 3.22426C11.4911 2.88875 13.0348 2.93434 14.4952 3.35677C15.9556 3.77921 17.2853 4.56471 18.36 5.64L23 10M1 14L5.64 18.36C6.71475 19.4353 8.04437 20.2208 9.50481 20.6432C10.9652 21.0657 12.5089 21.1112 13.9917 20.7757C15.4745 20.4402 16.8482 19.7346 17.9845 18.7246C19.1209 17.7146 19.9828 16.4332 20.49 15" stroke-width="2"/>
        </svg>
      `;
      document.body.appendChild(spinner);
    };

    createSpinner();

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      pulling = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!pulling) return;

      touchEndY = e.touches[0].clientY;
      const pullDistance = touchEndY - touchStartY;

      if (window.scrollY === 0 && pullDistance > 0 && spinner) {
        e.preventDefault();
        spinner.style.display = 'block';

        const progress = Math.min(pullDistance / threshold, 1);
        const translateY = Math.min(pullDistance / 2, 50);
        const rotation = progress * 360;

        spinner.style.transform = `translateX(-50%) translateY(${translateY}px)`;

        if (progress >= 1) {
          spinner.classList.add('active');
        } else {
          spinner.classList.remove('active');
        }
      }
    };

    const handleTouchEnd = () => {
      pulling = false;
      if (spinner) {
        spinner.style.display = 'none';
        spinner.classList.remove('active');
      }

      const pullDistance = touchEndY - touchStartY;
      if (window.scrollY === 0 && pullDistance > threshold) {
        if (spinner) {
          spinner.style.display = 'block';
          spinner.classList.add('active');
        }

        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      if (spinner && spinner.parentNode) {
        spinner.parentNode.removeChild(spinner);
      }
    };
  }, []);

  const getCertificationStatus = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);

    // Explicitly check for the special date
    if (expiryDate === "-") {
      return "active";
    }

    return today <= expiry ? 'active' : 'inactive';
  };

  const aboutHighlights = [
    {
      icon: Feather,
      title: 'Character & Personality',
      description: 'I am a person who is tenacious, disciplined, and has good problem-solving skills.'
    },
    {
      icon: Zap,
      title: 'Team Collaboration',
      description: 'Have a willingness to learn new things and adapt quickly.'
    }
  ];

  const skills = {
    operatingsystem: {
      title: 'Operating System',
      skills: ['Windows Server', 'Debian', 'CentOS']
    },
    virtualization: {
      title: 'Virtualization',
      skills: ['VMware']
    },
    cloud: {
      title: 'Cloud Computing',
      skills: ['Azure', 'GitHub']
    },
    pemrograman: {
      title: 'Programming',
      skills: ['HTML', 'CSS', 'PHP', 'C#']
    },
    networking: {
      title: 'Networking',
      skills: ['MikroTik', 'Cisco Switch', 'Dell Switch']
    },
    robotic: {
      title: 'Internet of Things',
      skills: ['Arduino', 'ESP8266', 'ESP32']
    }
  };

  const certifications = [
    {
      title: 'Technical Engineer Accreditation',
      organization: 'Progress KEMP',
      id: '-',
      expiryDate: '2027-02-10',
      verifyUrl: 'https://pec.progress.com/achievements/certificate/116891650',
    },
    {
      title: 'SE: Server Credential 2024',
      organization: 'Dell EMC',
      id: '7X63QBSQYJB4QBKK',
      expiryDate: '-',
      verifyUrl: 'https://www.certmetrics.com/dell/public/verification.aspx?',
    },
    {
      title: 'SE: MidRange Storage Credential 2024',
      organization: 'Dell EMC',
      id: '6S3GVQSYQEQ4QV5S',
      expiryDate: '-',
      verifyUrl: 'https://www.certmetrics.com/dell/public/verification.aspx?',
    },
    {
      title: 'SE: High-end Storage Credential 2024',
      organization: 'Dell EMC',
      id: '2PTNQBWQQ1F1QW39',
      expiryDate: '-',
      verifyUrl: 'https://www.certmetrics.com/dell/public/verification.aspx?',
    },
    {
      title: 'SE: Data Protection Credential 2024',
      organization: 'Dell EMC',
      id: 'BVECFTGYY1QE1WG0',
      expiryDate: '-',
      verifyUrl: 'https://www.certmetrics.com/dell/public/verification.aspx?',
    },
  ];

  const personalDetails = [
    { icon: Calendar, label: 'Date of Birth', value: 'Mei 13, 1998' },
    { icon: MoonStar, label: 'Religion', value: 'Islam' },
    { icon: Syringe, label: 'Blood Type', value: 'B' },
    { icon: MapPinned, label: 'Citizenship', value: 'Indonesia' },
    { icon: Gamepad2, label: 'Hobbies', value: 'Cooking, Badminton, Touring' },
  ];

  const languages = [
    { name: 'Bahasa Indonesia', level: 'Native', proficiency: 'Native Speaker', color: '#60a5fa', icon: '🇺🇸' },
    { name: 'English', level: 'Intermediate', proficiency: '-', color: '#c084fc', icon: '🇯🇵' },
    { name: 'Japanese', level: 'Basic', proficiency: '-', color: '#f472b6', icon: '🇪🇸' }
  ];

  const workExperience = [
    {
      title: 'System Administrator',
      company: 'PT Clarus Innovace Teknologi',
      location: 'Jakarta, Indonesia',
      period: '2024 - Present',
      logo: 'https://clarus-it.co.id/wp-content/uploads/2021/12/PT-Clarus-Innovace-Teknologi-1.svg',
      achievements: [
        'Engineer Onsite for Maintenance New Core Banking System',
        'Engineer Onsite for Data Protection System'
      ],
      technologies: ['Dell EMC', 'VMware', 'KEMP Progress', 'Grafana', 'Windows Server']
    },
    {
      title: 'IT Support',
      company: 'PT Dinasti Kurnia Sejahtera',
      location: 'Bekasi, Indonesia',
      period: '2019 - 2020',
      logo: 'https://dinastikurnia.co.id/wp-content/uploads/2019/01/dinasti-kurnia.jpg',
      achievements: [
        'Corrective Maintenance IT Infrastructure',
        'Access Control Firewall Administrator',
        'IT Helpdesk',
        'PC Deployment',
        'Server Storage Deployment (NAS)'
      ],
      technologies: ['Mikrotik', 'QNAP', 'Ubiquiti', 'CISCO Switch']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Informatics Engineering',
      school: 'Nusa Mandiri University',
      period: '2020 - 2022',
      description: 'Major in Informatics Engineering',
    },
    {
      degree: 'Associate of Computer Technology',
      school: 'BSI University (Dual Degree)',
      period: '2017 - 2020',
      description: 'Major in Computer Technology',
    },
    {
      degree: 'Computer Network Engineering',
      school: 'SMK Negeri 1 Kota Bekasi',
      period: '2013 - 2016',
      description: 'Major in Computer Networking',
    }
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      <ul className="circles fixed top-0 left-0 w-full h-full flex flex-wrap">
        <li className="circle circle1"></li>
        <li className="circle circle2"></li>
        <li className="circle circle3"></li>
        <li className="circle circle4"></li>
        <li className="circle circle5"></li>
        <li className="circle circle6"></li>
        <li className="circle circle7"></li>
        <li className="circle circle8"></li>
        <li className="circle circle9"></li>
        <li className="circle circle10"></li>
        <li className="circle circle11"></li>
        <li className="circle circle12"></li>
        <li className="circle circle13"></li>
        <li className="circle circle14"></li>
        <li className="circle circle15"></li>
        <li className="circle circle16"></li>
        <li className="circle circle17"></li>
        <li className="circle circle18"></li>
        <li className="circle circle19"></li>
        <li className="circle circle20"></li>
      </ul>

      {/* Header/Profile Section */}
      <header className="container mx-auto px-4 pt-24 pb-16 max-w-4xl animate-on-scroll">
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

            {/* Profile Image */}
            <div className="relative rounded-full bg-purple p-1">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocL3-UQvVrIX7mtbZSWG8wtD4uOSIfFiUnGm0ryKza6GLbLiYw=s288-c-no"
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto shadow-md transform hover:opacity-100 hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-transform duration-300"
                loading="eager"
              />
            </div>
          </div>

          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 gradient-text">
            Ari Kurniadi
          </h1>

          <h2 className="text-2xl text-gray-300">System Administrator</h2>

          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-indigo-400" />
              <span>Bekasi, Indonesia</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-purple-400" />
              <span>+62 896 5207 3241</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-pink-400" />
              <span>akvrnia@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4 animate-on-scroll">
            <a href="https://github.com/akvrnia" className="glass-card p-3 rounded-full hover:text-indigo-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ari-kurniadi-117848325/" className="glass-card p-3 rounded-full hover:text-purple-400 transition-colorshover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-8 pb-8 space-y-16">
        {/* About Me and Personal Details Section - Two Columns */}
        <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-9 lg:gap-y-9 gap-x-0 md:gap-x-9 max-w-6xl mx-auto">
          {/* About Me Section - Full Width */}
          <section className="col-span-2 animate-on-scroll">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <UserRoundCheck className="w-6 h-6 text-indigo-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400 gradient-text">About Me</h2>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300">
              <div className="space-y-6 text-gray-300 mb-0">
                <div className="text-justify leading-relaxed tracking-wide">
                  {/*<p className="text-gray-300 leading-relaxed">
                    
                  </p>*/}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-0">
                {aboutHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center mb-2">
                      <highlight.icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                      <h3 className="ml-2 text-white font-medium">{highlight.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed tracking-wide">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Personal Details Section */}
          <section className="col-span-2 md:col-span-1 md:col-start-1 md:row-start-2 animate-on-scroll">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <NotebookPen className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400 gradient-text">Personal Details</h2>
            </div>
            <div className="bg-slate-800/50 py-4 px-4 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300">
              <div className="grid gap-0.5">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:bg-gray-700/30 px-3 py-2 rounded-lg transition-colors duration-300">
                    <detail.icon className="w-5 h-5 text-indigo-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="text-gray-400 text-sm">{detail.label}</h3>
                      <p className="text-gray-200">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Language Details Section */}
          <section className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-2 animate-on-scroll">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <Languages className="w-6 h-6 text-indigo-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400 gradient-text">Languages</h2>
            </div>
            <div className="grid grid-cols-1 gap-4" ref={languagesContainerRef}>
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="language-card glass-card p-6 rounded-lg transition-all duration-300"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <h3 className="text-base font-semibold text-white">{language.name}</h3>
                    </div>
                    <div
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{ backgroundColor: `${language.color}20`, color: language.color }}
                    >
                      {language.level}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{language.proficiency}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Skills Section */}
          <section className="row-span-2 animate-on-scroll">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <Lightbulb className="w-6 h-6 text-pink-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400 gradient-text">Knowladge</h2>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300 space-y-6">
              {Object.entries(skills).map(([key, category]) => (
                <div key={key}>
                  <h3 className="text-lg font-semibold text-gray-300 mb-2">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-indigo-400/20 rounded-full text-sm hover:bg-indigo-400/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Education Section */}
        <section className="max-w-6xl mx-auto animate-on-scroll">
          <div className="flex items-center mb-6 justify-center">
            <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-blue-400 gradient-text">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6 rounded-lg transition-all duration-300 hover:transform group">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <div className="flex items-center text-indigo-400">
                    <BookMarked className="w-4 h-4 mr-1" />
                    <span>{edu.school}</span>
                  </div>
                </div>
                <div className="mt-1 md:mt-0 flex items-center text-purple-400">
                  <CalendarRange className="w-4 h-4 mr-1" />
                  <span>{edu.period}</span>
                </div>
                <div>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="max-w-6xl mx-auto animate-on-scroll">
          <div className="flex items-center mb-6 justify-center">
            <Briefcase className="w-6 h-6 text-indigo-400 mr-3" />
            <h2 className="text-2xl font-bold text-blue-400 gradient-text">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="glass-card p-6 rounded-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    {/*<img 
                        src={job.logo} 
                        alt={`${job.company} logo`}
                        className="w-12 h-12 rounded-lg object-contain bg-white p-2"
                      />*/}
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <div className="flex items-center text-indigo-400">
                          <Building2 className="w-4 h-4 mr-1" />
                          <span>{job.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <div className="mt-1 md:mt-0 flex items-center text-purple-400">
                          <CalendarRange className="w-4 h-4 mr-1" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Experience:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-300 group">
                          <span className="inline-block w-2 h-2 mt-2 mr-2 bg-indigo-500 rounded-full transition-colors" />
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-sm rounded-full text-gray-200 bg-white/10 hover:bg-white/20 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="max-w-6xl mx-auto animate-on-scroll">
          <div className="flex items-center mb-6 justify-center">
            <Award className="w-6 h-6 text-pink-400 mr-3" />
            <h2 className="text-2xl font-bold text-blue-400 gradient-text">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => {
              const status = getCertificationStatus(cert.expiryDate);
              return (
                <div key={cert.id} className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${status === 'active'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                      }`}>
                      {status}
                    </span>
                  </div>
                  <p className="text-gray-400">{cert.organization}</p>
                  <p className="text-gray-300 mt-2">ID : {cert.id}</p>
                  <p className="text-gray-300">
                    Expires :{" "}
                    {cert.expiryDate && !isNaN(Date.parse(cert.expiryDate))
                      ? new Date(cert.expiryDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })
                      : '-'}
                  </p>
                  <div className="mt-3">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="mr-1">Verify</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 max-w-5xl border-gray-800 animate-on-scroll">
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} akvrnia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
