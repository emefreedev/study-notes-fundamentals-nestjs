import {
    ArgumentMetadata,
    Injectable,
    PipeTransform,
    BadRequestException,
} from '@nestjs/common';

/** Para crear un propio PIPE
 * se puede usar el generador de nest de cli para que haga la estructura básica con el comando:
 *  $ nest g pipe common/parse-int
 */

@Injectable()
export class ParseIntPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        /** Ejemplo de pipe */
        const val = parseInt(value, 10);
        if (isNaN(val)) {
            throw new BadRequestException(`${value} is not an number`);
        }
        return value;
    }
}
