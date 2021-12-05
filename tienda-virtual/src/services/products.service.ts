import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from './../datos/products.datos';

/** En el servicio se administran los datos */
@Injectable()
export class ProductsService {
    /** Autoincrementador para el id de ejemplo para el mock. Mongo DB ya lo hace en el ObjectId */
    private counterId = 1;
    private products: Product[] = [
        {
            /** Para que dentro de éste array se puedan recibir unica y exclusivamente éstos tipos de datos que se piden
             * se crea una, que para los ejercicios se van a dejar en la carpeta 'entities'
             */
            id: 1,
            name: 'producto 1',
            description: 'asdfasdf',
            price: 1234,
            image: '',
            stock: 9,
        },
    ];

    /** Para operar con los datos obtenidos */

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        return this.products.find((item) => item.id === id);
    }

    create(payload: CreateProductDto) {
        /** Aumento el contador para el mock. Recordar que mongo ya lo hace solo con el ObjectId */
        this.counterId = this.counterId + 1;
        const newProduct = {
            id: this.counterId,
            ...payload,
        };

        /** Después para insertar el dato en el array (mock) */
        this.products.push(newProduct);

        return newProduct;
    }
}
/** Data Transfers Objects
 * Es lo que me permite tipar y validar datos que voy a mandar como info para la consulta a la BD
 *
 */
