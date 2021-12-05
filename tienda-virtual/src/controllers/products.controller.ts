import {
    Controller,
    Get,
    Param,
    Post,
    Put,
    Query,
    Body,
    Delete,
    HttpCode,
    HttpStatus,
    //ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './../services/products.service';
/** Para usar el pipe propio: */
import { ParseIntPipe } from './../common/parse-int.pipe';
import { CreateProductDto } from './../datos/products.datos';

/** Urls del ejercicio:
 * http://localhost:3000/products
 */
/** Los PIPES.
 * Son artefactos que tienen dos principales usos:
 * - Transformar informacion
 * - Validar informacion
 *
 * Y pueden actuar o no de la siguiente manera: la salida de un pipe, puedde ser la entrada de otro.
 *
 * Uno de los Pipes que ya vienen con el framework es 'ParseIntPipe'
 */
/** Para crear un propio PIPE
 * se puede usar el generador de nest de cli para que haga la estructura básica con el comando:
 *  $ nest g pipe common/parse-int
 */

@Controller('products')
export class ProductsController {
    /** Dentro del controlador de Products se inyecta el servicio y sus dependencias con un constructor */
    constructor(private productsService: ProductsService) {}

    @Get(':productId')
    /** Ejemplo de uso del Pipe: Se manda como segundo parametro entre los parametros en '@Param'
     * Y con ésto ya me aseguro que lo que mando como parametro es un numero y no otra cosa
     */
    getProducts(@Param('productId', ParseIntPipe) productId: number) {
        /* return `producto: ${productId}`; */

        /** Entonces, TENIENDO ya el servicio inyectado, se retorna lo que trae el servicio */
        return this.productsService.findAll();

        /** Se pueden usar los metodos del servicio y pasar por parametro los datos que se necesiten. Por ej: */
        //return this.productsService.findOne(parametroValor)
    }

    @Get('')
    getProductosConQuery(
        @Query('limit') limit: 100,
        @Query('offset') offset: 0,
        @Query('brand') brand: string,
    ) {
        return {
            message: `productos: limite ${limit} y salida ${offset} | brand ${brand}`,
        };
    }

    @Post()
    /** En el decorador "Body" se recibe los datos que trae el payload. Cuando 'Body' va vacío es porque puede recibir cualquier json
     * pero si se especifica dentro como por ejemplo 'price' entonces va a esperar un 'price'. Ejemplo: create(@Body('price') price: number)
     */
    create(@Body() payload: number) {
        /** Return ahora puede devolver un json */
        return {
            message: 'mensaje de respuesta',
            payload,
        };
    }

    @Put(':id')
    /** Para agregar un status code se usa el decorador 'HttpStatus */
    @HttpCode(HttpStatus.ACCEPTED)
    /** Ejemplo para Put */
    update(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            payload,
        };
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return id;
    }
}
