// Extracted directly from resume "PROJECTS" section.
export const projects = [
  {
    name: "Banking Web Application",
    description:
      "A responsive banking web application built with a clean, user-friendly interface.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "API integration with dynamic data handling",
      "Form validation and full CRUD operations",
      "React state management with reusable components",
      "Interactive UI elements across application workflows",
    ],
    imageUrl: "/images/projects/banking-app.jpg",
    // HSL values as [h, s%, l%] for easy use in hsla()
    themeH: 38,
    themeS: 80,
    themeL: 50,
    github: "# ADD_GITHUB_URL",
    liveDemo: "# ADD_LIVE_DEMO_URL",
  },
  {
    name: "Travel Booking Website",
    description:
      "A responsive travel booking website inspired by the design and functionality of MakeMyTrip.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    features: [
      "Travel search and booking workflows",
      "Form handling for booking requests",
      "Interactive, reusable React components",
      "Consistent, responsive layouts across pages",
    ],
    imageUrl: "/images/projects/travel-booking.jpg",
    themeH: 195,
    themeS: 80,
    themeL: 40,
    github: "# ADD_GITHUB_URL",
    liveDemo: "# ADD_LIVE_DEMO_URL",
  },
];

// Helper to generate hsla color string from project theme values
export function hsl(project, alpha = 1) {
  return `hsla(${project.themeH}, ${project.themeS}%, ${project.themeL}%, ${alpha})`;
}
