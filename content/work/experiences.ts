import { WorkExperience } from "./types";

export const apple: WorkExperience = {
  id: "apple",
  company: "Apple",
  logo: "/logos/apple.svg",
  role: "Software Engineer",
  url: "https://account.apple.com",
  startDate: { month: 1, year: 2024 },
};

export const atlassian: WorkExperience = {
  id: "atlassian",
  company: "Atlassian",
  logo: "/logos/atlassian.svg",
  role: "Software Engineer",
  url: "https://www.atlassian.com/",
  startDate: { month: 7, year: 2022 },
  endDate: { month: 12, year: 2023 },
};

export const hubspot: WorkExperience = {
  id: "hubspot",
  company: "Hubspot",
  logo: "/logos/hubspot.svg",
  role: "Frontend Engineer Co-op",
  url: "https://www.hubspot.com/",
  startDate: { month: 1, year: 2022 },
  endDate: { month: 6, year: 2022 },
};

export const rubrik: WorkExperience = {
  id: "rubrik",
  company: "rubrik",
  logo: "/logos/rubrik.svg",
  role: "Software Engineer Intern",
  url: "https://www.rubrik.com/",
  startDate: { month: 9, year: 2021 },
  endDate: { month: 12, year: 2021 },
};

export const atlassianIntern: WorkExperience = {
  id: "atlassianIntern",
  company: "Atlassian",
  logo: "/logos/atlassian.svg",
  role: "Frontend Engineer Intern",
  url: "https://www.atlassian.com/",
  startDate: { month: 6, year: 2021 },
  endDate: { month: 9, year: 2021 },
};
