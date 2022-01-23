import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Article } from "./Article";

@Entity()
@ObjectType()
export class Author extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column({ nullable: true })
  first_name: string;
  
  @Field()
  @Column({ nullable: true })
  last_name: string;
  
  @Field()
  @Column({ nullable: true, type: "date" })
  date_of_birth: Date;

  

  @Field(type => [Article])
  @OneToMany(() => Article, article => article.author)
  articles?: Article[];
}
