export class Ad {
  constructor(
    public position: string,
    public location: string,
    public workType: string,
    public aboutFirm: string,
    public content: string,
    public publisher: string,
    public createdDate: Date
  ) { }
}