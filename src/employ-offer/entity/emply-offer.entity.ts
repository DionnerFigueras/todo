import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class EmployOffer {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id:number;

    @Column({type: 'text'})
    @Field(() => String)
    title:string;  

    @Column({type: 'int'})
    @Field(() => Int)
    yearsOfExperience:number;  

    @Column({type: 'text'})
    @Field(() => String)
    modality:string;  

    @Column({type: 'text'})
    @Field(() => String)
    type:string;  

    @Column('float')
    @Field(() => Float)
    salary:number; 

    @Column({type: 'text'})
    @Field(() => String)
    hiringDate:string;  
}