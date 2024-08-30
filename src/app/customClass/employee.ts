export class Employee {
  constructor(
    public _id: number = 0,
    public name: string = '',
    public joiningDate = new Date(),
    public email: string = '',
    public address: string = '',
    public profilePic: string = 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2151',
    public dept: string = 'software developer',
    public salary: number = 2000
  ) {}
}
