export class Quote { 
  showquotes!:boolean;
  constructor(
    public id: number,
    public title: string,
    public quoteline: string,
    public author: string,
    public upvote: number,
    public downvote: number,
    public subBywho: string,
    public dateupload: Date,
  ){
    this.showquotes = false;
  }
}
