export interface Root {
  name: string;
  logo_name: string;
  role: string;
  about: About;
  contacts: Contacts;
  gists: Gists;
  projects: Projects;
}

export interface About {
  sections: Sections;
}

export interface Sections {
  专业常识: GeneratedType;
  "personal-info": PersonalInfo;
  "hobbies-info": HobbiesInfo;
}

export interface GeneratedType {
  title: string;
  icon: string;
  info: Info;
}

export interface Info {
  个人简历: GeneratedType2;
  个人技能: GeneratedType3;
  软件技能: GeneratedType4;
}

export interface GeneratedType2 {
  title: string;
  description: string;
}

export interface GeneratedType3 {
  title: string;
  description: string;
}

export interface GeneratedType4 {
  title: string;
  description: string;
}

export interface PersonalInfo {
  title: string;
  icon: string;
  info: Info2;
}

export interface Info2 {
  bio: Bio;
  interests: Interests;
  education: Education;
}

export interface Bio {
  title: string;
  description: string;
}

export interface Interests {
  title: string;
  description: string;
}

export interface Education {
  title: string;
  description: string;
  files: Files;
}

export interface Files {
  "high-school": string;
  university: string;
}

export interface HobbiesInfo {
  title: string;
  icon: string;
  info: Info3;
}

export interface Info3 {
  sports: Sports;
  "favorite-games": FavoriteGames;
}

export interface Sports {
  title: string;
  description: string;
}

export interface FavoriteGames {
  title: string;
  description: string;
}

export interface Contacts {
  direct: Direct;
  social: Social;
  find_me_also_in: FindMeAlsoIn;
}

export interface Direct {
  title: string;
  sources: Sources;
}

export interface Sources {
  email: string;
  phone: string;
}

export interface Social {
  github: Github;
  facebook: Facebook;
  twitter: Twitter;
}

export interface Github {
  title: string;
  url: string;
  user: string;
}

export interface Facebook {
  title: string;
  url: string;
  user: string;
}

export interface Twitter {
  title: string;
  url: string;
  user: string;
}

export interface FindMeAlsoIn {
  title: string;
  sources: Sources2;
}

export interface Sources2 {
  youtube: Youtube;
  gurushots: Gurushots;
  instagram: Instagram;
  twitch: Twitch;
}

export interface Youtube {
  title: string;
  url: string;
  user: string;
}

export interface Gurushots {
  title: string;
  url: string;
  user: string;
}

export interface Instagram {
  title: string;
  url: string;
  user: string;
}

export interface Twitch {
  title: string;
  url: string;
  user: string;
}

export interface Gists {
  "1": string;
  "2": string;
}

export interface Projects {
  "1": N1;
  "2": N2;
  "3": N3;
  "4": N4;
  "5": N5;
  "6": N6;
}

export interface N1 {
  title: string;
  description: string;
  img: string;
  tech: string[];
  url: string;
}

export interface N2 {
  title: string;
  description: string;
  img: string;
  tech: string[];
  url: string;
}

export interface N3 {
  title: string;
  description: string;
  img: string;
  tech: string[];
  url: string;
}

export interface N4 {
  title: string;
  description: string;
  img: string;
  tech: string[];
  url: string;
}

export interface N5 {
  title: string;
  description: string;
  img: string;
  tech: string[];
  url: string;
}

export interface N6 {
  title: string;
  description: string;
  img: string;
  tech: string[];
  url: string;
}
