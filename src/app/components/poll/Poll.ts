export interface Poll {
  _id: string;
  question: string;
  createdDate: Date;
  isActive: Boolean,
  votedUsers: Array<string>;
  answers: Array<Object>;
}