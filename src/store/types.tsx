export interface User {
  id: number;
  googleId: number;
  vkId: number;
  email: string;
  name: string;
  picture: string;
  lastTicket: Ticket;
  mySubjects: Subject[];
  createdAt: string;
  lastVisit: string;
}

export interface TicketMessage {
  id: number;
  sender: User;
  ticket: Ticket;
  message: string;
  attachmentPaths: string[];
  sentAt: string;
}

export interface Ticket {
  id: number;
  ticketUssuer: User;
  message: string;
  attachmentPaths: string;
  subject: Subject;
}

export interface Subject {
  id: number;
  name: string;
  userList: User[];
  tickets: Ticket[];
}
