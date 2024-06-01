import { Field, InputType, Int } from "@nestjs/graphql";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

@InputType()
export class updateTodoInputs {
    @Field(() => Int)
    @IsInt()
    id: number;

    @Field(() => String, {nullable: true})
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    @IsOptional()
    description?: string

    @Field(() => Boolean, {nullable:true})
    @IsBoolean()
    @IsOptional()
    done?: boolean;
}