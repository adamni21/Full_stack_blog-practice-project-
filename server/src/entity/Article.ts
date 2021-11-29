import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
@ObjectType()
export class Article extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    title: string;

    
    @Field()
    @Column()
    content: string;

    @Field()
    preview(): string {
        let preview = this.content.slice(0, 100);
        
        //cuts last character if it's a dash 
        if (preview.slice(-1) === " ") preview = preview.slice(-1)
        //cuts last character if it's a dot (no else if! to cut both: ". " and ".")
        if (preview.slice(-1) === ".") preview = preview.slice(0, -1)
        
        return preview;

    }

    @Field()
    @Column()
    author_name: string;

}