import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { ObjectSchema } from "joi";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

@Injectable()
export class ValidationPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata) {
        return value
    }
}



@Injectable()
export class JoiValidationPipe implements PipeTransform {

    constructor(private schema: ObjectSchema) { }

    transform(value: any, metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(value);
        if (error) throw new BadRequestException(error);
        return value
    }
}




@Injectable()
export class ClassValidationPipe implements PipeTransform<any> {

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }

    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value
        }
        const object = plainToClass(metatype, value)
        const errors = await validate(object)
        if (errors.length > 0) {
            throw new BadRequestException(errors)
        }
        return value
    }
}