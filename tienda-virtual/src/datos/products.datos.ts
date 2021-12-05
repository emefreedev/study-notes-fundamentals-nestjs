/** DATA TRANSFER OBJECTS -
 *  Aca puedo dejar los datos para definir las clases */

/** Validacion de Parametros -
 * Para esto se usan dependencias que se complementan con los DTO's (DATA TRANSFER OBJECTS)
 * Las dependencias son: npm i class-validator class-transformer.
 * Recordar que para usalras, hay que habilitarlas en el archivo main.ts con el validator pipe
 */

// Importo los validadores que instale
import { IsString, IsNumber, IsUrl, IsNotEmpty } from 'class-validator';

// Libreria para extender el tipado de otra clase
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
    /** readonly viene de typescript y sirve para que el dato sea solo para lectura y no puede ser modificado */
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
}

/** Para reutilizar codigo y no volver a escribir cada decorador se usa una libreria de nest
 * que es: $ npm i @nestjs/mapped-types
 * El ejemplo para la reutilizacion es
 */
export class UpdateProductDtos extends PartialType(CreateProductDto) {}
