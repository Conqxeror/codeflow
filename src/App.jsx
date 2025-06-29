import React, { useState, useEffect } from "react";
import {
  Play,
  Github,
  Calendar,
  User,
  Twitter,
  Linkedin,
  Link,
  Star,
  GitFork,
  Radio,
  Clock,
  Eye,
  Users,
  Layers,
  MessageSquare,
  Search,
  Filter,
  Plus,
  Rss,
  Tv,
  Lightbulb,
  XCircle,
  Sun,
  Moon,
  Home,
  Info,
  Mail,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";

// Utility function to get a random color for skill badges (purely aesthetic)
const getRandomColor = () => {
  const colors = [
    "bg-purple-800 text-purple-100",
    "bg-blue-800 text-blue-100",
    "bg-green-800 text-green-100",
    "bg-red-800 text-red-100",
    "bg-yellow-800 text-yellow-100",
    "bg-indigo-800 text-indigo-100",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Main App component for the coding streamer profile page
function App() {
  const [activeTab, setActiveTab] = useState("live"); // State to manage active tab
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [theme, setTheme] = useState("dark"); // 'dark' or 'light'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Show a mock notification on initial load
  useEffect(() => {
    setIsNotificationVisible(true);
    const timer = setTimeout(() => {
      setIsNotificationVisible(false);
    }, 5000); // Hide after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top functionality for the back-to-top button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Enhanced mock data for the streamer's profile
  const streamerData = {
    name: "EZSnippet",
    handle: "@ezsnippet",
    profilePic: "/pfp.png", // Placeholder image
    isLive: true,
    followers: "15.7K",
    totalViews: "2.1M",
    lastOnline: "2 hours ago",
    currentStream: {
      title: "Building a Full-Stack E-commerce",
      category: "Web Development",
      viewers: "2,543",
      thumbnail: "/thumbnail images/thumbnail-1.jpg", // Placeholder thumbnail
      streamLink: "https://twitch.tv/codeflowlive", // Mock stream link
    },
    bio: "Hey there! I'm EZSnippet, your guide through the exciting world of software development. I stream live coding sessions, focusing on modern web technologies, open-source contributions, and practical project builds. Join the flow!",
    skills: [
      { name: "JavaScript", proficiency: 90 },
      { name: "React", proficiency: 95 },
      { name: "Node.js", proficiency: 85 },
      { name: "Python", proficiency: 80 },
      { name: "Go", proficiency: 70 },
      { name: "Docker", proficiency: 75 },
      { name: "AWS", proficiency: 65 },
      { name: "Tailwind CSS", proficiency: 98 },
      { name: "Next.js", proficiency: 92 },
      { name: "Supabase", proficiency: 78 },
      { name: "GraphQL", proficiency: 70 },
      { name: "TypeScript", proficiency: 88 },
      { name: "Vue.js", proficiency: 60 },
      { name: "Kubernetes", proficiency: 55 },
    ],
    socialLinks: [
      { name: "GitHub", url: "https://github.com/codeflowlive", icon: Github },
      {
        name: "Twitter",
        url: "https://twitter.com/codeflowlive",
        icon: Twitter,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/codeflowlive",
        icon: Linkedin,
      },
      { name: "Website", url: "https://codeflow.dev", icon: Link },
    ],
    projects: [
      {
        id: 1,
        name: "OpenSource Portfolio",
        description:
          "A customizable developer portfolio template built with React and Tailwind CSS. Perfect for showcasing your work!",
        language: "JavaScript",
        stars: "1.2k",
        forks: "300",
        githubUrl: "https://github.com/codeflowlive/opensource-portfolio",
        tags: ["React", "Tailwind CSS", "Portfolio", "Open Source"],
        lastCommit: "2 days ago",
      },
      {
        id: 2,
        name: "Realtime Chat App",
        description:
          "A real-time chat application featuring user authentication, public/private rooms, and real-time messaging using websockets.",
        language: "Python",
        stars: "850",
        forks: "150",
        githubUrl: "https://github.com/codeflowlive/realtime-chat-app",
        tags: ["Python", "Flask", "WebSockets", "Realtime"],
        lastCommit: "1 week ago",
      },
      {
        id: 3,
        name: "ML Model Deployment Guide",
        description:
          "A comprehensive guide and boilerplate for deploying machine learning models to the cloud with FastAPI and Docker.",
        language: "Python",
        stars: "620",
        forks: "100",
        githubUrl: "https://github.com/codeflowlive/ml-deployment-guide",
        tags: ["Python", "Machine Learning", "Docker", "Deployment", "AWS"],
        lastCommit: "3 days ago",
      },
      {
        id: 4,
        name: "Serverless Todo API",
        description:
          "A simple serverless API for managing todo lists, deployed on AWS Lambda with API Gateway. Lightweight and scalable.",
        language: "Go",
        stars: "410",
        forks: "75",
        githubUrl: "https://github.com/codeflowlive/serverless-todo-api",
        tags: ["Go", "Serverless", "AWS Lambda", "API"],
        lastCommit: "4 days ago",
      },
      {
        id: 5,
        name: "GraphQL API Boilerplate",
        description:
          "A robust boilerplate for building GraphQL APIs with Node.js and Apollo Server, including authentication.",
        language: "JavaScript",
        stars: "350",
        forks: "60",
        githubUrl: "https://github.com/codeflowlive/graphql-api-boilerplate",
        tags: ["Node.js", "GraphQL", "Apollo", "Authentication"],
        lastCommit: "2 weeks ago",
      },
      {
        id: 6,
        name: "CI/CD Pipeline Examples",
        description:
          "Collection of CI/CD pipeline configurations for various projects using GitHub Actions and GitLab CI.",
        language: "YAML",
        stars: "280",
        forks: "50",
        githubUrl: "https://github.com/codeflowlive/cicd-pipeline-examples",
        tags: ["DevOps", "CI/CD", "GitHub Actions", "GitLab CI"],
        lastCommit: "1 month ago",
      },
    ],
    schedule: [
      {
        day: "Monday",
        time: "7:00 PM IST",
        topic: "Live Coding: Front-end Refactor (React & Tailwind)",
        icon: Layers,
        calendarLink: "#add-to-calendar",
      },
      {
        day: "Wednesday",
        time: "8:00 PM IST",
        topic: "Algorithm & Data Structures Deep Dive (Python)",
        icon: GitFork,
        calendarLink: "#add-to-calendar",
      },
      {
        day: "Friday",
        time: "6:30 PM IST",
        topic: "Build with Me: Open Source Contribution",
        icon: Github,
        calendarLink: "#add-to-calendar",
      },
      {
        day: "Sunday",
        time: "3:00 PM IST",
        topic: "Q&A + Community Project Showcase",
        icon: MessageSquare,
        calendarLink: "#add-to-calendar",
      },
    ],
    recentActivity: [
      {
        type: "stream",
        description: 'Streamed "Optimizing React Performance"',
        time: "1 day ago",
      },
      {
        type: "project_update",
        description: "Updated `OpenSource Portfolio` with dark mode",
        time: "3 days ago",
      },
      {
        type: "stream",
        description: 'Streamed "Deep Dive into Docker Compose"',
        time: "5 days ago",
      },
      {
        type: "project_update",
        description: "Added new feature to `Realtime Chat App`",
        time: "1 week ago",
      },
      {
        type: "stream",
        description: 'Streamed "Serverless API Deployment Walkthrough"',
        time: "1 week ago",
      },
    ],
    vods: [
      {
        id: 1,
        title: "Optimizing React Performance",
        duration: "2:15:30",
        views: "15.2K",
        date: "June 20, 2025",
        thumbnail: "/thumbnail images/7CC-EovSPPM-HD.jpg",
      },
      {
        id: 2,
        title: "Deep Dive into Docker Compose",
        duration: "1:45:00",
        views: "12.8K",
        date: "June 18, 2025",
        thumbnail: "/thumbnail images/91x1wf3uDWY-HD.jpg",
      },
      {
        id: 3,
        title: "Building a GraphQL API with Node.js",
        duration: "3:05:10",
        views: "9.5K",
        date: "June 15, 2025",
        thumbnail: "/thumbnail images/loXnxBKGKbg-HD.jpg",
      },
      {
        id: 4,
        title: "Introduction to WebSockets with Python",
        duration: "1:30:00",
        views: "7.1K",
        date: "June 12, 2025",
        thumbnail: "/thumbnail images/m8GrEkAFnTM-HD.jpg",
      },
    ],
    blogPosts: [
      {
        id: 1,
        title: "5 Tips for Efficient React Development",
        date: "June 22, 2025",
        snippet:
          "Boost your React workflow with these essential tips, covering hooks, context, and performance optimizations.",
        readTime: "5 min read",
        link: "#blog-post-1",
      },
      {
        id: 2,
        title: "Understanding CI/CD Pipelines for Beginners",
        date: "June 19, 2025",
        snippet:
          "A comprehensive guide to Continuous Integration and Continuous Deployment, and why it matters for your projects.",
        readTime: "8 min read",
        link: "#blog-post-2",
      },
      {
        id: 3,
        title: "Serverless Architectures: A Practical Introduction",
        date: "June 10, 2025",
        snippet:
          "Explore the benefits and challenges of building serverless applications with AWS Lambda and API Gateway.",
        readTime: "7 min read",
        link: "#blog-post-3",
      },
    ],
    testimonials: [
      {
        quote:
          "CodeFlow's streams are incredibly insightful and helped me level up my React skills faster than any course!",
        author: "Alice, Web Developer",
      },
      {
        quote:
          "Their project breakdowns on GitHub are a goldmine. Always learn something new from their clean code.",
        author: "Bob, Software Engineer",
      },
      {
        quote:
          "The best part is the live Q&A. CodeFlow answers all questions patiently and clearly.",
        author: "Charlie, Student",
      },
    ],
    sponsors: [
      {
        name: "Meta",
        logo: "https://penji.co/wp-content/uploads/2021/05/pepsico.jpg.webp",
        link: "https://about.meta.com/",
      },
      {
        name: "Google",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRxJQMsXPvxSmAxjDlQ9cSEobP9dkOaRprA&s",
        link: "https://about.google/",
      },
      {
        name: "Apple",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQ2ECTfs7_kf5DM0Bov_EAV0p9KB1D5mZvKwwebSKFKsy2eFcG85LPOuRMAPjJ8o3GA&usqp=CAU",
        link: "https://www.apple.com/",
      },
      {
        name: "Microsoft",
        logo: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/microsoft-logo.jpg?auto=format&q=60&fit=max&w=930",
        link: "https://www.microsoft.com/",
      },
      ,
    ],
    subscriberTiers: [
      {
        name: "Tier 1",
        price: "$4.99/month",
        benefits: ["Ad-free viewing", "Subscriber badge", "Exclusive emotes"],
      },
      {
        name: "Tier 2",
        price: "$9.99/month",
        benefits: ["All Tier 1 benefits", "Discord role", "Priority Q&A"],
      },
      {
        name: "Tier 3",
        price: "$24.99/month",
        benefits: [
          "All Tier 2 benefits",
          "Monthly code review",
          "Early access to projects",
        ],
      },
    ],
  };

  const commonClasses = {
    panel: `${
      theme === "dark"
        ? "bg-gray-800 bg-opacity-70 backdrop-blur-sm border border-purple-800/30"
        : "bg-white bg-opacity-90 backdrop-blur-sm border border-purple-200/30"
    } p-4 rounded-3xl shadow-2xl mb-8 md:p-6`,
    card: `${
      theme === "dark"
        ? "bg-gray-900 border border-gray-700"
        : "bg-gray-100 border border-gray-300"
    } p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1`,
    textPrimary: theme === "dark" ? "text-white" : "text-gray-800",
    textSecondary: theme === "dark" ? "text-gray-300" : "text-gray-600",
    textMuted: theme === "dark" ? "text-gray-400" : "text-gray-500",
    accentColor: theme === "dark" ? "text-purple-400" : "text-purple-600",
    buttonPrimary:
      "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-[5px] px-[10px] rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 flex align-center justify-center items-center md:py-3 md:px-7",
    buttonSecondary: `${
      theme === "dark"
        ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
        : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
    } font-semibold py-2 px-5 rounded-full transition duration-300 ease-in-out`,
  };

  return (
    <div
      className={`min-h-screen font-inter ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-950 to-gray-800 text-gray-100"
          : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800"
      }`}
    >
      {/* Mock Notification */}
      {isNotificationVisible && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-xl flex items-center justify-between ${
            theme === "dark"
              ? "bg-purple-600 text-white"
              : "bg-purple-500 text-white"
          } animate-fade-in-down`}
        >
          <span>
            EzSnippet is LIVE! Tune in now to "Building a Full-Stack E-commerce
            App"!
          </span>
          <button
            onClick={() => setIsNotificationVisible(false)}
            className="ml-4 text-white hover:text-gray-200"
          >
            <XCircle size={20} />
          </button>
        </div>
      )}
      {/* Theme Toggle Button (outside main content flow for fixed position) */}
      <button
        onClick={toggleTheme}
        className={`fixed bottom-6 right-6 z-50 p-3 mb-20 rounded-full shadow-xl transition-all duration-300 md:mb-0 ${
          theme === "dark"
            ? "bg-gray-700 hover:bg-gray-600 text-white"
            : "bg-white hover:bg-gray-100 text-gray-800"
        }`}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 p-3 mb-20 rounded-full shadow-xl transition-all duration-300 md:mb-0 ${
          theme === "dark"
            ? "bg-purple-600 hover:bg-purple-700 text-white"
            : "bg-purple-500 hover:bg-purple-600 text-white"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
      {/* Main Navigation Bar (Navbar) */}
      <nav
        className={`sticky top-0 z-40 ${
          theme === "dark"
            ? "bg-gray-900 bg-opacity-90 backdrop-blur-md border-b border-gray-700"
            : "bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-200"
        } py-4 px-6 sm:px-8 lg:px-10 shadow-lg`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <a
            href="#"
            className={`text-2xl font-extrabold ${commonClasses.textPrimary}`}
          >
            <span className={`${commonClasses.accentColor}`}>Code</span>Flow
          </a>
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex items-center gap-6">
              <li>
                <a
                  href="#"
                  className={`${commonClasses.textSecondary} hover:${commonClasses.accentColor} transition-colors flex items-center`}
                >
                  <Home size={18} className="mr-1" /> Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setActiveTab("about")}
                  className={`${commonClasses.textSecondary} hover:${commonClasses.accentColor} transition-colors flex items-center`}
                >
                  <Info size={18} className="mr-1" /> About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setActiveTab("about")}
                  className={`${commonClasses.textSecondary} hover:${commonClasses.accentColor} transition-colors flex items-center`}
                >
                  <Mail size={18} className="mr-1" /> Contact
                </a>
              </li>
            </ul>
            {/* Social links or other global actions can go here */}
            <div className="flex items-center gap-4">
              {streamerData.socialLinks.slice(0, 2).map(
                (
                  link,
                  index // Show first two social links in navbar
                ) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${commonClasses.textMuted} hover:${commonClasses.accentColor} transition-colors`}
                  >
                    <link.icon size={22} />
                  </a>
                )
              )}
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} className={commonClasses.textPrimary} />
              ) : (
                <Menu size={24} className={commonClasses.textPrimary} />
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className={`md:hidden fixed inset-0 z-50 ${
                theme === "dark" ? "bg-gray-950" : "bg-white"
              } bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center`}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} className={commonClasses.textPrimary} />
              </button>
              <ul className="flex flex-col items-center gap-8 text-2xl font-bold">
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      setActiveTab("live");
                      setIsMobileMenuOpen(false);
                    }}
                    className={`${commonClasses.textPrimary} hover:${commonClasses.accentColor} transition-colors flex items-center`}
                  >
                    <Home size={28} className="mr-2" /> Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => {
                      setActiveTab("about");
                      setIsMobileMenuOpen(false);
                    }}
                    className={`${commonClasses.textPrimary} hover:${commonClasses.accentColor} transition-colors flex items-center`}
                  >
                    <Info size={28} className="mr-2" /> About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => {
                      setActiveTab("about");
                      setIsMobileMenuOpen(false);
                    }}
                    className={`${commonClasses.textPrimary} hover:${commonClasses.accentColor} transition-colors flex items-center`}
                  >
                    <Mail size={28} className="mr-2" /> Contact
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-6 mt-8">
                {streamerData.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${commonClasses.textPrimary} hover:${commonClasses.accentColor} transition-colors`}
                  >
                    <link.icon size={32} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Page Content */}
      <div className="p-4 pb-20 sm:p-6 lg:p-8 md:pb-8">
        {" "}
        {/* Added padding to main content */}
        {/* Header Section */}
        <header
          className={`${commonClasses.panel} flex flex-col md:flex-row items-center justify-between gap-6 mt-8 text-center md:text-left`}
        >
          {" "}
          {/* Added mt-8 for spacing below navbar */}
          <div className="flex flex-col md:flex-row items-center gap-6 flex-wrap justify-center md:justify-start">
            <div className="relative">
              <img
                src={streamerData.profilePic}
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-purple-500 shadow-xl transition-transform duration-300 hover:scale-105"
              />
              {streamerData.isLive && (
                <span className="absolute bottom-1 right-1 bg-red-600 border-2 border-gray-900 h-7 w-7 rounded-full flex items-center justify-center animate-pulse text-xs font-bold">
                  <Radio size={18} className="text-white" />
                </span>
              )}
            </div>
            <div className="text-center md:text-left">
              <h1
                className={`text-4xl sm:text-5xl font-extrabold ${commonClasses.textPrimary} leading-tight`}
              >
                {streamerData.name}
              </h1>
              <p
                className={`text-xl font-medium mt-1 ${commonClasses.accentColor}`}
              >
                {streamerData.handle}
              </p>
              <div
                className={`flex flex-col sm:flex-row items-center justify-center md:justify-start mt-3 gap-4 ${commonClasses.textSecondary}`}
              >
                <span className="flex items-center text-lg">
                  <Users
                    size={20}
                    className={`mr-2 ${commonClasses.accentColor}`}
                  />{" "}
                  {streamerData.followers} Followers
                </span>
                <span className="flex items-center text-lg">
                  <Eye
                    size={20}
                    className={`mr-2 ${commonClasses.accentColor}`}
                  />{" "}
                  {streamerData.totalViews} Total Views
                </span>
              </div>
            </div>
          </div>
          <button className={commonClasses.buttonPrimary}>
            <div>
              <Play size={20} />{" "}
            </div>
            <div className="ml-2">
              {streamerData.isLive ? "Watch Live" : "Subscribe"}
            </div>
          </button>
        </header>
        {/* Navigation Tabs */}
        {/* Navigation Tabs */}
        <nav
          className={`fixed bottom-0 left-0 right-0 z-50 md:static md:mb-8
          ${
            theme === "dark"
              ? "bg-gray-900 bg-opacity-90 backdrop-blur-md border-t border-gray-700"
              : "bg-white bg-opacity-90 backdrop-blur-md border-t border-gray-200"
          } py-2 px-2 sm:px-4 md:p-0 md:border-none shadow-lg md:shadow-none`}
        >
          <ul
            className={`flex justify-around md:justify-center w-full
            ${commonClasses.panel.replace(
              "mb-8",
              ""
            )} p-0 md:p-2 sm:p-4 md:border-b md:border-gray-700/50`}
          >
            {["live", "projects", "schedule", "vods", "blog", "about"].map(
              (tab) => (
                <li
                  key={tab}
                  className="flex-grow text-center group pl-1 md:pl-2"
                >
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`w-full py-2 px-2 sm:px-4 md:py-3 md:px-6 rounded-xl text-sm md:text-lg font-semibold transition duration-300 ease-in-out transform flex flex-col items-center justify-center
                    ${
                      activeTab === tab
                        ? `${commonClasses.accentColor
                            .replace("text-", "bg-")
                            .replace("400", "600")} ${
                            commonClasses.textPrimary
                          } shadow-lg scale-100`
                        : `${commonClasses.textSecondary} ${
                            theme === "dark"
                              ? "hover:bg-gray-700"
                              : "hover:bg-gray-200"
                          } ${commonClasses.textPrimary.replace(
                            "text-white",
                            "text-gray-200"
                          )} group-hover:scale-105`
                    }`}
                  >
                    <span className="md:hidden block">
                      {tab === "live" && <Radio size={20} />}
                      {tab === "projects" && <Github size={20} />}
                      {tab === "schedule" && <Calendar size={20} />}
                      {tab === "vods" && <Tv size={20} />}
                      {tab === "blog" && <Rss size={20} />}
                      {tab === "about" && <User size={20} />}
                    </span>
                    <span className="hidden md:inline-block mr-2">
                      {tab === "live" && <Radio size={20} />}
                      {tab === "projects" && <Github size={20} />}
                      {tab === "schedule" && <Calendar size={20} />}
                      {tab === "vods" && <Tv size={20} />}
                      {tab === "blog" && <Rss size={20} />}
                      {tab === "about" && <User size={20} />}
                    </span>
                    <span className="capitalize hidden md:inline-block">
                      {tab}
                    </span>
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
        {/* Content Sections based on activeTab */}
        <main className={commonClasses.panel}>
          {activeTab === "live" && (
            <section className="live-stream-section">
              <h2
                className={`text-3xl font-bold ${
                  commonClasses.textPrimary
                } mb-6 border-b ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } pb-3`}
              >
                Live Stream & Recent Activity
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Stream Video Placeholder */}
                <div
                  className={`md:col-span-2 ${
                    theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                  } rounded-xl overflow-hidden shadow-lg border ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  {streamerData.isLive ? (
                    <div className="relative aspect-video">
                      <img
                        src={streamerData.currentStream.thumbnail}
                        alt="Live Stream Thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 text-white">
                        <Radio className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 animate-pulse mb-1" />
                        <p className="text-sm sm:text-base font-bold mb-1 text-center line-clamp-2">
                          {streamerData.currentStream.title}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-200 mb-1 text-center">
                          {streamerData.currentStream.category}
                        </p>
                        <div className="flex items-center text-xs sm:text-sm text-gray-100 mb-1">
                          <Users size={12} className="mr-1 text-purple-300" />{" "}
                          {streamerData.currentStream.viewers} Viewers
                        </div>
                        <a
                          href={streamerData.currentStream.streamLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${commonClasses.buttonPrimary} text-[10px] py-1 px-2 sm:py-1.5 sm:px-3`}
                        >
                          <Play size={10} className="mr-1" /> Join Stream
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`aspect-video flex flex-col items-center justify-center p-6 ${
                        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                      } rounded-xl`}
                    >
                      <Play className="w-16 h-16 sm:w-20 sm:h-20 text-gray-500 mb-4" />
                      <p
                        className={`text-lg sm:text-xl ${commonClasses.textSecondary} mb-2`}
                      >
                        Stream is currently offline.
                      </p>
                      <p className={`text-sm ${commonClasses.textMuted} mt-2`}>
                        Last online: {streamerData.lastOnline}
                      </p>
                      <p className={`text-sm ${commonClasses.textMuted} mt-2`}>
                        (Come back later or check the schedule!)
                      </p>
                    </div>
                  )}

                  {/* Mock Video Controls */}
                  <div
                    className={`p-2 sm:p-4 ${
                      theme === "dark" ? "bg-gray-950" : "bg-gray-200"
                    } flex items-center justify-between flex-nowrap w-full overflow-x-auto`}
                  >
                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                      <button
                        className={commonClasses.buttonSecondary.replace(
                          "py-2 px-5",
                          "p-1 sm:p-2"
                        )}
                      >
                        <Play size={16} sm:size={20} />
                      </button>
                    </div>
                    <input
                      type="range"
                      className="flex-grow h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer mx-1 sm:mx-2 min-w-[60px]"
                      value={0}
                    />
                    <span
                      className={`${commonClasses.textMuted} text-xs sm:text-sm flex-shrink-0`}
                    >
                      0:00 / 0:00
                    </span>
                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-auto">
                      <button
                        className={commonClasses.buttonSecondary.replace(
                          "py-2 px-5",
                          "p-1 sm:p-2"
                        )}
                      >
                        <Layers size={16} sm:size={20} />
                      </button>
                      <button
                        className={commonClasses.buttonSecondary.replace(
                          "py-2 px-5",
                          "p-1 sm:p-2"
                        )}
                      >
                        <Eye size={16} sm:size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recent Activity & Mock Chat */}
                <div
                  className={`flex flex-col ${
                    theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                  } rounded-xl p-6 shadow-lg border ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold ${commonClasses.textPrimary} mb-4 flex items-center`}
                  >
                    <Clock
                      size={20}
                      className={`mr-2 ${commonClasses.accentColor}`}
                    />{" "}
                    Recent Activity
                  </h3>
                  <ul className="space-y-4 flex-grow overflow-y-auto max-h-64 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-gray-800">
                    {streamerData.recentActivity.map((activity, index) => (
                      <li
                        key={index}
                        className={`${
                          theme === "dark" ? "bg-gray-800" : "bg-white"
                        } p-4 rounded-lg shadow-inner`}
                      >
                        <div className="flex items-start">
                          {activity.type === "stream" ? (
                            <Radio
                              size={20}
                              className="text-red-500 mr-3 mt-1 flex-shrink-0"
                            />
                          ) : (
                            <Github
                              size={20}
                              className="text-green-500 mr-3 mt-1 flex-shrink-0"
                            />
                          )}
                          <div>
                            <p
                              className={`${commonClasses.textSecondary} font-medium`}
                            >
                              {activity.description}
                            </p>
                            <p className={`${commonClasses.textMuted} text-sm`}>
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-gray-700 pt-4 text-center">
                    <h3
                      className={`text-xl font-bold ${commonClasses.textPrimary} mb-3`}
                    >
                      Live Chat (Mock)
                    </h3>
                    <div
                      className={`${
                        theme === "dark" ? "bg-gray-800" : "bg-white"
                      } p-4 rounded-lg h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-gray-800 flex flex-col justify-end`}
                    >
                      <div className="text-left">
                        <p>
                          <span
                            className={`${commonClasses.accentColor} font-semibold`}
                          >
                            Viewer1:
                          </span>{" "}
                          Hello CodeFlow!
                        </p>
                        <p>
                          <span className="text-blue-400 font-semibold">
                            DevFan:
                          </span>{" "}
                          Awesome stream today!
                        </p>
                        <p>
                          <span className="text-green-400 font-semibold">
                            CodeGuru:
                          </span>{" "}
                          What framework are you using?
                        </p>
                        <p>
                          <span
                            className={`${commonClasses.accentColor} font-semibold`}
                          >
                            Viewer1:
                          </span>{" "}
                          Love the new dark mode for the portfolio!
                        </p>
                        <p>
                          <span className="text-blue-400 font-semibold">
                            DevFan:
                          </span>{" "}
                          Any plans for a Python machine learning stream?
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className={`flex-grow p-3 rounded-lg ${
                          theme === "dark"
                            ? "bg-gray-700 text-white"
                            : "bg-gray-200 text-gray-800"
                        } border ${
                          theme === "dark"
                            ? "border-gray-600"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      />
                      <button
                        className={commonClasses.buttonSecondary.replace(
                          "py-2 px-5",
                          "p-3"
                        )}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === "projects" && (
            <section className="projects-section">
              <h2
                className={`text-3xl font-bold ${
                  commonClasses.textPrimary
                } mb-6 border-b ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } pb-3`}
              >
                My Projects
              </h2>

              {/* Search and Filter */}
              <div
                className={`mb-8 p-4 rounded-xl shadow-inner ${
                  theme === "dark" ? "bg-gray-900" : "bg-gray-100"
                } border ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } flex flex-col sm:flex-row gap-4 items-center`}
              >
                <div className="relative flex-grow w-full sm:w-auto">
                  <Search
                    size={20}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 ${commonClasses.textMuted}`}
                  />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className={`w-full p-3 pl-10 rounded-lg ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800"
                    } border ${
                      theme === "dark" ? "border-gray-600" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                </div>
                <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                  <button
                    className={`${commonClasses.buttonSecondary} flex items-center`}
                  >
                    <Filter size={18} className="mr-2" /> Filter By
                  </button>
                  <button className={commonClasses.buttonSecondary}>
                    React
                  </button>
                  <button className={commonClasses.buttonSecondary}>
                    Python
                  </button>
                  <button className={commonClasses.buttonSecondary}>
                    DevOps
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {streamerData.projects.map((project) => (
                  <div key={project.id} className={commonClasses.card}>
                    <div>
                      <h3
                        className={`text-2xl font-semibold ${commonClasses.textPrimary} mb-2`}
                      >
                        {project.name}
                      </h3>
                      <p
                        className={`${commonClasses.textMuted} text-sm mb-4 line-clamp-3`}
                      >
                        {project.description}
                      </p>
                      <div
                        className={`${commonClasses.textMuted} text-sm mb-4`}
                      >
                        <span className="mr-4 flex items-center">
                          <span className="inline-block h-3 w-3 rounded-full bg-blue-400 mr-1"></span>
                          {project.language}
                        </span>
                        <span className="flex items-center mr-4">
                          <Star size={16} className="mr-1 text-yellow-400" />{" "}
                          {project.stars}
                        </span>
                        <span className="flex items-center">
                          <GitFork size={16} className="mr-1 text-gray-400" />{" "}
                          {project.forks}
                        </span>
                        <span className="flex items-center mt-2">
                          <Clock size={16} className="mr-1 text-gray-400" />{" "}
                          Last commit: {project.lastCommit}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      {project.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`${getRandomColor()} text-xs font-medium px-3 py-1 rounded-full shadow-inner`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center ${commonClasses.accentColor} hover:underline font-medium transition duration-300`}
                      >
                        <Github size={18} className="mr-2" /> View on GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <button className={commonClasses.buttonPrimary}>
                  <Plus size={20} className="mr-2" /> Load More Projects
                </button>
              </div>
            </section>
          )}

          {activeTab === "schedule" && (
            <section className="schedule-section">
              <h2
                className={`text-3xl font-bold ${
                  commonClasses.textPrimary
                } mb-6 border-b ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } pb-3`}
              >
                Stream Schedule
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {streamerData.schedule.map((session, index) => (
                  <div
                    key={index}
                    className={`${commonClasses.card} flex items-start gap-4`}
                  >
                    <session.icon
                      size={28}
                      className={`${commonClasses.accentColor} flex-shrink-0 mt-1`}
                    />
                    <div>
                      <h3
                        className={`text-xl font-semibold ${commonClasses.textPrimary} mb-1`}
                      >
                        {session.day}
                      </h3>
                      <p
                        className={`${commonClasses.textMuted} flex items-center mb-1`}
                      >
                        <Clock
                          size={16}
                          className={`mr-2 ${commonClasses.textMuted}`}
                        />{" "}
                        {session.time}
                      </p>
                      <p className={commonClasses.textSecondary}>
                        {session.topic}
                      </p>
                      <a
                        href={session.calendarLink}
                        className={`${commonClasses.accentColor} text-sm mt-2 inline-flex items-center hover:underline`}
                      >
                        <Calendar size={14} className="mr-1" /> Add to Calendar
                        (Mock)
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`mt-8 text-center ${commonClasses.textMuted} text-sm`}
              >
                All times are approximate and subject to change. Follow on
                social media for real-time updates!
              </div>
            </section>
          )}

          {activeTab === "vods" && (
            <section className="vods-section">
              <h2
                className={`text-3xl font-bold ${
                  commonClasses.textPrimary
                } mb-6 border-b ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } pb-3`}
              >
                Past Streams (VODs) & Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {streamerData.vods.map((vod) => (
                  <div key={vod.id} className={commonClasses.card}>
                    <img
                      src={vod.thumbnail}
                      alt={vod.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3
                      className={`text-xl font-semibold ${commonClasses.textPrimary} mb-2 line-clamp-2`}
                    >
                      {vod.title}
                    </h3>
                    <div
                      className={`${commonClasses.textMuted} text-sm flex items-center gap-4`}
                    >
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" /> {vod.duration}
                      </span>
                      <span className="flex items-center">
                        <Eye size={14} className="mr-1" /> {vod.views} views
                      </span>
                    </div>
                    <p className={`${commonClasses.textMuted} text-xs mt-2`}>
                      Streamed on: {vod.date}
                    </p>
                    <button
                      className={`${commonClasses.buttonPrimary.replace(
                        "py-3 px-8",
                        "py-2 px-4"
                      )} text-sm mt-4 w-full`}
                    >
                      Watch VOD
                    </button>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <button className={commonClasses.buttonPrimary}>
                  <Tv size={20} className="mr-2" /> Load More VODs
                </button>
              </div>
            </section>
          )}

          {activeTab === "blog" && (
            <section className="blog-section">
              <h2
                className={`text-3xl font-bold ${
                  commonClasses.textPrimary
                } mb-6 border-b ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } pb-3`}
              >
                Blog Posts & Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {streamerData.blogPosts.map((post) => (
                  <div key={post.id} className={commonClasses.card}>
                    <h3
                      className={`text-2xl font-semibold ${commonClasses.textPrimary} mb-2 line-clamp-2`}
                    >
                      {post.title}
                    </h3>
                    <p className={`${commonClasses.textMuted} text-sm mb-3`}>
                      {post.date} &bull; {post.readTime}
                    </p>
                    <p
                      className={`${commonClasses.textSecondary} mb-4 line-clamp-3`}
                    >
                      {post.snippet}
                    </p>
                    <a
                      href={post.link}
                      className={`inline-flex items-center ${commonClasses.accentColor} hover:underline font-medium transition duration-300`}
                    >
                      Read Article <Play size={16} className="ml-2" />
                    </a>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <button className={commonClasses.buttonPrimary}>
                  <Rss size={20} className="mr-2" /> Load More Articles
                </button>
              </div>
            </section>
          )}

          {activeTab === "about" && (
            <section className="about-section">
              <h2
                className={`text-3xl font-bold ${
                  commonClasses.textPrimary
                } mb-6 border-b ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } pb-3`}
              >
                About Me
              </h2>
              <div className={`${commonClasses.card} mb-8`}>
                <p
                  className={`${commonClasses.textSecondary} leading-relaxed text-lg`}
                >
                  {streamerData.bio}
                </p>
              </div>

              {/* Skills & Technologies with Proficiency */}
              <h3
                className={`text-2xl font-bold ${commonClasses.textPrimary} mb-4`}
              >
                Skills & Technologies
              </h3>
              <div className={`${commonClasses.card} mb-8`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {streamerData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span
                        className={`w-32 font-medium ${commonClasses.textSecondary}`}
                      >
                        {skill.name}
                      </span>
                      <div className="flex-grow bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-purple-600 h-3 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                      <span className={`${commonClasses.textMuted} text-sm`}>
                        {skill.proficiency}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connect with Me */}
              <h3
                className={`text-2xl font-bold ${commonClasses.textPrimary} mb-4`}
              >
                Connect with Me
              </h3>
              <div className={`${commonClasses.card} mb-8`}>
                <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
                  {streamerData.socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center ${commonClasses.accentColor} hover:underline font-medium text-lg transition duration-300 transform hover:scale-105`}
                    >
                      <link.icon size={28} className="mr-2" /> {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <h3
                className={`text-2xl font-bold ${commonClasses.textPrimary} mb-4`}
              >
                What Viewers Say
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {streamerData.testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`${commonClasses.card} italic text-center`}
                  >
                    <p
                      className={`${commonClasses.textSecondary} text-lg mb-3`}
                    >
                      "{testimonial.quote}"
                    </p>
                    <p className={`${commonClasses.accentColor} font-semibold`}>
                      - {testimonial.author}
                    </p>
                  </div>
                ))}
              </div>

              {/* Subscriber Tiers */}
              <h3
                className={`text-2xl font-bold ${commonClasses.textPrimary} mb-4`}
              >
                Support CodeFlow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {streamerData.subscriberTiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`${commonClasses.card} text-center`}
                  >
                    <h4
                      className={`text-xl font-bold ${commonClasses.accentColor} mb-2`}
                    >
                      {tier.name}
                    </h4>
                    <p
                      className={`text-2xl font-extrabold ${commonClasses.textPrimary} mb-3`}
                    >
                      {tier.price}
                    </p>
                    <ul className="list-disc list-inside text-left mx-auto max-w-[200px] space-y-1">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className={commonClasses.textSecondary}>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`${commonClasses.buttonPrimary.replace(
                        "py-3 px-8",
                        "py-2 px-6"
                      )} text-sm mt-5 w-full`}
                    >
                      Select Tier
                    </button>
                  </div>
                ))}
              </div>

              {/* Sponsors */}
              <h3
                className={`text-2xl font-bold ${commonClasses.textPrimary} mb-4`}
              >
                Our Valued Sponsors
              </h3>
              <div
                className={`${commonClasses.card} flex flex-wrap justify-center items-center gap-8`}
              >
                {streamerData.sponsors.map((sponsor, index) => (
                  <a
                    key={index}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-12 object-contain"
                    />
                  </a>
                ))}
              </div>

              {/* Contact Form (Mock) */}
              <h3
                className={`text-2xl font-bold ${commonClasses.textPrimary} mt-8 mb-4`}
                id="contact"
              >
                Contact Me
              </h3>
              <div className={commonClasses.card}>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${commonClasses.textSecondary} mb-1`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full p-3 rounded-lg ${
                        theme === "dark"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-200 text-gray-800"
                      } border ${
                        theme === "dark" ? "border-gray-600" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${commonClasses.textSecondary} mb-1`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full p-3 rounded-lg ${
                        theme === "dark"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-200 text-gray-800"
                      } border ${
                        theme === "dark" ? "border-gray-600" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium ${commonClasses.textSecondary} mb-1`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className={`w-full p-3 rounded-lg ${
                        theme === "dark"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-200 text-gray-800"
                      } border ${
                        theme === "dark" ? "border-gray-600" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button type="submit" className={commonClasses.buttonPrimary}>
                    Send Message
                  </button>
                </form>
              </div>
            </section>
          )}
        </main>
      </div>{" "}
      {/* End of main content padding div */}
      {/* Footer */}
      <footer
        className={`${
          theme === "dark"
            ? "bg-gray-900 border-t border-gray-700"
            : "bg-white border-t border-gray-200"
        } py-8 px-6 sm:px-8 lg:px-10 mt-10 shadow-inner`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h3
              className={`text-xl font-extrabold ${commonClasses.textPrimary} mb-4`}
            >
              <span className={`${commonClasses.accentColor}`}>Code</span>Flow
            </h3>
            <p className={commonClasses.textMuted}>
              Your guide to live coding, open-source, and software development.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              {streamerData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${commonClasses.textSecondary} hover:${commonClasses.accentColor} transition-colors`}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg font-semibold ${commonClasses.textPrimary} mb-4`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`${commonClasses.textMuted} hover:${commonClasses.accentColor} transition-colors`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setActiveTab("about")}
                  className={`${commonClasses.textMuted} hover:${commonClasses.accentColor} transition-colors`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setActiveTab("projects")}
                  className={`${commonClasses.textMuted} hover:${commonClasses.accentColor} transition-colors`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  onClick={() => setActiveTab("schedule")}
                  className={`${commonClasses.textMuted} hover:${commonClasses.accentColor} transition-colors`}
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={() => setActiveTab("blog")}
                  className={`${commonClasses.textMuted} hover:${commonClasses.accentColor} transition-colors`}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setActiveTab("about")}
                  className={`${commonClasses.textMuted} hover:${commonClasses.accentColor} transition-colors`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Policies */}
          <div>
            <h3
              className={`text-lg font-semibold ${commonClasses.textPrimary} mb-4`}
            >
              Legal & Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`${commonClasses.textMuted} hover:${commonClasses.accentColor} transition-colors`}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${commonClasses.textMuted} hover:${commonClasses.accentColor} transition-colors`}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${commonClasses.textMuted} hover:${commonClasses.accentColor} transition-colors`}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${commonClasses.textMuted} hover:${commonClasses.accentColor} transition-colors`}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`mt-8 pt-6 border-t ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          } text-center ${commonClasses.textMuted} text-sm`}
        >
          <p>
            &copy; {new Date().getFullYear()} CodeFlow. All rights reserved.
          </p>
          <p className="mt-2">
            Designed and Developed with ❤️ using React and Tailwind CSS.
          </p>
        </div>
      </footer>
      {/* Tailwind CSS custom keyframes for animation */}
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.5s ease-out forwards;
        }

        /* Basic scrollbar styling for mock chat/activity */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: ${
            theme === "dark" ? "#374151" : "#E5E7EB"
          }; /* gray-700 / gray-200 */
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: ${
            theme === "dark" ? "#8B5CF6" : "#6D28D9"
          }; /* purple-500 / purple-700 */
          border-radius: 10px;
          border: 2px solid ${
            theme === "dark" ? "#1F2937" : "#F9FAFB"
          }; /* gray-900 / white */
        }
      `}</style>
    </div>
  );
}

export default App;
