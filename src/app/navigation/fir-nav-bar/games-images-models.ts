export class games_images_model {
    picture: string;
    description:string;
    title :string;

    constructor(picture: string, title: string, description: string) {
        this.picture = picture;
        this.description = description;
        this.title = title;

    }
}
