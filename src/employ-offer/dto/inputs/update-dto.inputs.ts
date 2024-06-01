import { Field, Float, InputType, Int } from "@nestjs/graphql";
import {IsInt, IsOptional, IsString, MaxLength } from "class-validator";

@InputType()
export class updateEmployOfferInputs {
    @Field(() => Int)
    @IsInt()
    id: number;

    @Field(() => String, {nullable: true})
    @IsString()
    @IsOptional()
    @MaxLength(30)
    title?: string;

    @Field(() => Int, {nullable: true})
    @IsInt()
    @IsOptional()
    yearsOfExperience?: number;

    @Field(() => String, {nullable: true})
    @IsString()
    @IsOptional()
    @MaxLength(30)
    modality?: string;

    @Field(() => String, {nullable: true})
    @IsString()
    @IsOptional()
    @MaxLength(30)
    type?: string;


    @Field(() => Int, {nullable:true})
    @IsInt()
    @IsOptional()
    salary?: number;

    @Field(() => String, {nullable: true})
    @IsString()
    @IsOptional()
    @MaxLength(30)
    hiringDate?: string;


}