import { Field, Float, InputType, Int } from "@nestjs/graphql";
import {IsInt, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

@InputType()
export class createEmployOfferInputs {
    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    title: string;

    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    yearsOfExperience: number;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    modality: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    type: string;

    @Field(() => Int)
    @IsInt()
    @IsNotEmpty()
    salary: number;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    hiringDate: string;
}