import { Module } from '@nestjs/common';
//import { AppController } from './app.controller'; // Para que no tome los primeros ejercicios
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';

@Module({
    imports: [],
    /** "controlers": recibe los controladores que se van a estar trabajando */
    //controllers: [AppController, ProductsController, CategoriesController],
    controllers: [ProductsController, CategoriesController],
    /** Los servicios se agregan al array de 'providers' */
    providers: [AppService, ProductsService],
})
export class AppModule {}
