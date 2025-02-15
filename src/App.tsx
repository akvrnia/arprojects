import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, GraduationCap, Briefcase, Award, UserRoundCheck, Code, ExternalLink, Calendar, Syringe, Gamepad2, Book, NotebookPen, MoonStar, MessagesSquare } from 'lucide-react';

function App() {
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
      skills: ['Windows Server', 'Ubuntu', 'Debian', 'CentOS']
    },
    virtualization: {
      title: 'Virtualization',
      skills: ['VMware', 'Proxmox']
    },
    cloud: {
      title: 'Cloud & DevOps',
      skills: ['Azure', 'Google Cloud']
    },
    pemrograman: {
      title: 'Programming',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'C#']
    },
    networking: {
      title: 'Networking',
      skills: ['MikroTik', 'Cisco Switch', 'OSPF', 'PPTP', 'VLAN']
    },
    robotic: {
      title: 'IoT & Robotic',
      skills: ['Arduino', 'ESP8266', 'ESP32']
    }
  };

  const certifications = [
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
    { icon: Gamepad2, label: 'Hobbies', value: 'Cooking, Badminton, Touring' },
    { icon: MessagesSquare, label: 'Languages', value: 'Bahasa Indonesia, English, Japanese' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Profile Section */}
      <header className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocL3-UQvVrIX7mtbZSWG8wtD4uOSIfFiUnGm0ryKza6GLbLiYw=s288-c-no"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-xl transform hover:scale-105 transition-transform duration-300"
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
      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* About Me and Personal Details Section - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* About Me Section - Full Width */}
          <section className="animate-fade-in">
            <div className="flex items-center mb-6">
              <UserRoundCheck className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400">About Me</h2>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300">
              <div className="space-y-6 text-gray-300">
                <div className="text-justify leading-relaxed tracking-wide">
                  <p className="mb-4">
                  I am a person who is tenacious, disciplined, and has good problem-solving skills. Have a willingness to learn new things and adapt quickly. Have experience as an IT Support, handling hardware and software troubleshooting.
                  </p>
                  <p className="mb-4">
                  Have completed studies with the Informatics Engineering program study and wish to continue my studies to a higher level.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Details Section */}
          <section className="animate-fade-in">
            <div className="flex items-center mb-6">
              <NotebookPen className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400">Personal Details</h2>
            </div>
            <div className="bg-gray-800/40 py-4 px-4 rounded-lg backdrop-blur-sm hover:bg-gray-800/50 transition-colors duration-300">
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
        </div>

        {/* Two Column Layout for Education and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education Section */}
          <section className="animate-fade-in">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white">Bachelor of Informatics Engineering</h3>
                <p className="text-blue-400">Nusa Mandiri University</p>
                <p className="text-gray-400">2020 - 2022</p>
                <p className="text-gray-300 mt-2">Major in Informatics Engineering</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white">Associate of Computer Technology</h3>
                <p className="text-blue-400">BSI University (Dual Degree)</p>
                <p className="text-gray-400">2017 - 2020</p>
                <p className="text-gray-300 mt-2">Major in Computer Technology</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white">Computer Network Engineering</h3>
                <p className="text-blue-400">SMK Negeri 1 Kota Bekasi</p>
                <p className="text-gray-400">2013 - 2016</p>
                <p className="text-gray-300 mt-2">Major in Computer Networking</p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="animate-fade-in">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-400">Skills</h2>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300 space-y-6">
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

        {/* Work Experience Section */}
        <section className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-blue-400">Work Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white">System Administrator</h3>
              <p className="text-blue-400">PT. Clarus Innovace Teknologi</p>
              <p className="text-gray-400">2024 - Present</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Engineer Onsite for Maintenance New Core Banking System</li>
                <li>Engineer Onsite for Data Protection System</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300">
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
        <section className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-blue-400">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => {
              const status = getCertificationStatus(cert.expiryDate);
              return (
                <div key={cert.id} className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300">
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
                  <p className="text-gray-300 mt-2">ID: {cert.id}</p>
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
      <footer className="container mx-auto px-4 py-8 max-w-5xl border-t border-gray-800">
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} akvrnia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
