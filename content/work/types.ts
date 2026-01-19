export interface WorkDate {
  month: number; // 1–12
  year: number;
}

export interface WorkExperience {
  id: string;
  company: string;
  logo: string; // public path or external URL
  role: string;
  url: string; // company website
  startDate: WorkDate;
  endDate?: WorkDate;
}
