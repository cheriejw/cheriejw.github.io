/**
 * Project Subject is one of three subjects, which contains a list of projects under it.
 */
export class ProjectSubject {
  title: String;
  projectList: Project[];
}

/**
 * An individual project.
 */
export class Project {
  title: String;
  id: String;
  imageURL: String;
}

/**
 * An Employer object.
 * This object is currently depricated; I have decided not to immplenent an Employer's section for now.
 */
export class Employer {
  employerName: String;
  logoURL: String;
  employerLink: String;
}
