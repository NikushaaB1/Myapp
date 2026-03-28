export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  bio: string;
};

export const users: User[] = [
  {
    id: "1",
    name: "Nino Beridze",
    email: "nino@miniapp.dev",
    role: "Product Manager",
    bio: "Coordinates the roadmap and keeps the dashboard focused on user needs.",
  },
  {
    id: "2",
    name: "Luka Gelashvili",
    email: "luka@miniapp.dev",
    role: "Frontend Developer",
    bio: "Builds clean interfaces and improves the public and dashboard experience.",
  },
  {
    id: "3",
    name: "Mariam Kapanadze",
    email: "mariam@miniapp.dev",
    role: "Backend Engineer",
    bio: "Designs APIs, data flow, and reliable server-side features.",
  },
];
