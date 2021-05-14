export class Quote { 
  showquotes!:boolean;
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public upvote: number,
    public downvote: number,
    public submitby: string,
    public dateupload: Date,
  ){
    this.showquotes = false;
  }
}
