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
  @Column()
  first_name: string;
  
  @Field()
  @Column()
  last_name: string;
  
  @Field(type => Date)
 date_of_birth(): Date {
   return new Date(this.date_of_birth_col)
 }


  @Column({type: "date" })
  date_of_birth_col: Date;

  

  @Field(type => [Article])
  @OneToMany(() => Article, article => article.author)
  articles?: Article[];
}
