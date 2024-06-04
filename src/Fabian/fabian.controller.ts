import { Controller, Get } from '@nestjs/common';

@Controller('dante')
export class DanteController {
    private productos = ['Xiaomi 14 Ultra','Xiaomi 14','Xiaomi 13T pro','Xiaomi 13T','Xiaomi 12T pro','Xiaomi 12'];
    @Get()
    getAllProductos(){
       return this.productos;
    }
}
