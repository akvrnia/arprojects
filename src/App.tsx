import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, GraduationCap, Briefcase, Award, UserRoundCheck, Lightbulb, ExternalLink, Calendar, Syringe, Gamepad2, NotebookPen, MoonStar, MapPinned, Languages } from 'lucide-react';


function App() {

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;
    const threshold = 400; // Increased threshold for farther pull
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
      if (window.scrollY !== 0 || pulling) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (window.scrollY !== 0 || pulling) return;
      touchEndY = e.touches[0].clientY;
      const pullDistance = touchEndY - touchStartY;

      if (pullDistance > 0 && spinner) {
        if (pullDistance >= threshold / 2) {
          spinner.style.display = 'block';
          spinner.classList.add('visible'); // Add visible class when half of threshold is reached
        } else {
          spinner.classList.remove('visible'); // Hide before reaching half threshold
        }

        spinner.style.transform = `translateX(-50%) translateY(${Math.min(pullDistance / 2, 120)}px)`;
      }
    };

    const handleTouchEnd = () => {
      pulling = false;
      if (spinner) {
        spinner.classList.remove('visible');
        spinner.style.display = 'none';
        spinner.classList.remove('active');
      }

      const pullDistance = touchEndY - touchStartY;
      if (window.scrollY === 0 && pullDistance > threshold) {
        if (spinner) {
          spinner.style.display = 'block';
          spinner.classList.add('active');
        }

        // Add a small delay for the refresh animation
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
      <header className="container mx-auto px-4 pt-20 pb-24 max-w-4xl">
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocL3-UQvVrIX7mtbZSWG8wtD4uOSIfFiUnGm0ryKza6GLbLiYw=s288-c-no"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-md transform hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Ari Kurniadi
          </h1>

          <h2 className="text-2xl text-gray-300">System Administrator</h2>

          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Bekasi, Indonesia</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+62 896 5207 3241</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>akvrnia@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="https://github.com/akvrnia" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ari-kurniadi-117848325/" className="hover:text-blue-400 transition-colors">
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
          <section className="col-span-2 animate-fade-in">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <UserRoundCheck className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400">About Me</h2>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300">
              <div className="space-y-6 text-gray-300">
                <div className="text-justify leading-relaxed tracking-wide">
                  <p className="mb-4">
                    I am a person who is tenacious, disciplined, and has good problem-solving skills. Have a willingness to learn new things and adapt quickly. Have experience as an IT Support, handling hardware and software troubleshooting.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Personal Details Section */}
          <section className="col-span-2 md:col-span-1 md:col-start-1 md:row-start-2 animate-fade-in">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <NotebookPen className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400">Personal Details</h2>
            </div>
            <div className="bg-slate-800/50 py-4 px-4 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300">
              <div className="grid gap-0.5">
                {personalDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group hover:bg-gray-700/30 p-3 rounded-lg transition-colors duration-300"
                  >
                    <detail.icon className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
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
          <section className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-2 animate-fade-in">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <Languages className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400">Languages</h2>
            </div>
            <div className="bg-slate-800/50 pt-7 pb-9 px-7 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300">
              <div className="space-y-5">
                <div>
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-300 dark:text-white">Bahasa Indonesia</h3>
                    <span className="text-sm text-gray-300 dark:text-white">95%</span>
                  </div>
                  <div className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-11/12"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-300 dark:text-white">English</h3>
                    <span className="text-sm text-gray-300 dark:text-white">50%</span>
                  </div>
                  <div className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-1/2"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-300 dark:text-white">Japanese</h3>
                    <span className="text-sm text-gray-300 dark:text-white">25%</span>
                  </div>
                  <div className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Skills Section */}
          <section className="row-span-2 animate-fade-in">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <Lightbulb className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400">Knowladge</h2>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300 space-y-6">
              {Object.entries(skills).map(([key, category]) => (
                <div key={key}>
                  <h3 className="text-lg font-semibold text-gray-300 mb-2">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/20 rounded-full text-sm hover:bg-blue-500/30 transition-colors duration-300"
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
        <section className="max-w-6xl mx-auto animate-fade-in">
          <div className="flex items-center mb-6 justify-center">
            <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-blue-400">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white">Bachelor of Informatics Engineering</h3>
              <p className="text-blue-400">Nusa Mandiri University</p>
              <p className="text-gray-400">2020 - 2022</p>
              <p className="text-gray-300 mt-2">Major in Informatics Engineering</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white">Associate of Computer Technology</h3>
              <p className="text-blue-400">BSI University (Dual Degree)</p>
              <p className="text-gray-400">2017 - 2020</p>
              <p className="text-gray-300 mt-2">Major in Computer Technology</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white">Computer Network Engineering</h3>
              <p className="text-blue-400">SMK Negeri 1 Kota Bekasi</p>
              <p className="text-gray-400">2013 - 2016</p>
              <p className="text-gray-300 mt-2">Major in Computer Networking</p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="max-w-6xl mx-auto animate-fade-in">
          <div className="flex items-center mb-6 justify-center">
            <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-blue-400">Work Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white">System Administrator</h3>
              <p className="text-blue-400">PT. Clarus Innovace Teknologi</p>
              <p className="text-gray-400">2024 - Present</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Engineer Onsite for Maintenance New Core Banking System</li>
                <li>Engineer Onsite for Data Protection System</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-800/70 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white">IT Support</h3>
              <p className="text-blue-400">PT. Dinasti Kurnia Sejahtera</p>
              <p className="text-gray-400">2019 - 2020</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Corrective Maintenance IT Infrastructure</li>
                <li>Access Control Firewall Administrator</li>
                <li>IT Helpdesk</li>
                <li>PC Deployment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="max-w-6xl mx-auto animate-fade-in">
          <div className="flex items-center mb-6 justify-center">
            <Award className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-blue-400">Certifications</h2>
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
      <footer className="container mx-auto px-4 py-8 max-w-5xl border-gray-800">
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} akvrnia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
