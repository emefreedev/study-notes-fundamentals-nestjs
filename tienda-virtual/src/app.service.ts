import { Injectable } from '@nestjs/common';

/** Intro SERVICES
 * Los controladores se conectan a los servicios y los servicios son los que se conectan a los datos
 * para crear informacion o manipularla.
 * Los servicios tienen sus propios decoradores, por ejemplo '@Injectable()' que hace una inyeccion de dependencias
 * Para generarlos se puede usar la herramienta de nest tambien. Ej: $ nest g s services/nombreServicio
 */

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
}
