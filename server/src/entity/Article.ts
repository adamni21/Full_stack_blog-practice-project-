import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  RelationId,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Author } from "./Author";

@Entity()
@ObjectType()
export class Article extends BaseEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  content: string;

  @Field()
  @CreateDateColumn({nullable: true})
  createdAt: Date

  @Field()
  @UpdateDateColumn({nullable: true})
  updatedAt: Date
  
  @Field((type) => Author)
  @ManyToOne((type) => Author, (author) => author.articles, { nullable: false })
  author: Author;

  @Column()
  @RelationId((article: Article) => article.author)
  authorId: number;

  @Field()
  preview(): string {
    let preview = this.content.slice(0, 100);

    //cuts last character if it's a dash
    if (preview.slice(-1) === " ") preview = preview.slice(0, -1);
    //cuts last character if it's a dot (no else if! to cut both: ". " and ".")
    if (preview.slice(-1) === ".") preview = preview.slice(0, -1);

    return preview;
  }
}
