import { Moment } from 'moment';
import { empty } from 'rxjs';
export class Blog {

    blogPostId: number;
    blogPostType:BlogPostType
    title:string;
    creationDay:Moment;
    description:string;
    fileToupload: File;

}

export enum BlogPostType {
    None = 0,
    Checklists = 1,
    Infographics = 2,
    Interviews = 3,
    GuestBlogging = 4,
    PersonalStories =5
}
