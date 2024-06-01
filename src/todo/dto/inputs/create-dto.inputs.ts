import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength} from "class-validator";

@InputType()
export class createTodoInputs {
    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    description: string
}