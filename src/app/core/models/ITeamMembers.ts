export interface ITeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  description: string;
  technologies?: string[];
  linkedinUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  email?: string;
  featured?: boolean;
}