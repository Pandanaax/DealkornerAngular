export class Deal{
    title: String;
    urlPhoto : [String];
    description : String;
    commentaires : [String];
    lienRedirection : String;
    theme : [String];
    vote : Number;
    dateDeal : Date

    constructor(
    title: String,
    urlPhoto : [String],
    description : String,
    commentaires : [String],
    lienRedirection : String,
    theme : [String],
    vote : Number,
    dateDeal : Date
    ) {
        this.title = title;
        this.urlPhoto = urlPhoto;
        this.description= description;
        this.commentaires = commentaires;
        this.lienRedirection = lienRedirection;
        this.theme = theme;
        this.vote = vote;
        this.dateDeal = dateDeal;
    }
}