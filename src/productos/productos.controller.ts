import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateClienteDto } from '../clientes/dto/create-cliente.dto';
import {  UpdateClienteDto } from '../clientes/dto/update-cliente.dto';

@Controller('productos')
export class ProductosController {
   
   //private productos = ['Xiaomi 14 Ultra','Xiaomi 14','Xiaomi 13T pro','Xiaomi 13T','Xiaomi 12T pro','Xiaomi 12'];

    constructor(
        private readonly productosService: ProductosService
    ) {}

    @Get()
    getAllProductos(){
        // return this.productos;
        return this.productosService.findAll();
    }

    @Get(":id")
    getProductosById(@Param("id") id:String){
        // return this.productos[+id];
        return this.productosService.findById(+id);
    }

    @Post()
    crearProducto(@Body() crearDto:CreateClienteDto){
        return this.productosService.create(crearDto);

    }
    @Patch(":id")
    actualizarProducto(
        @Param("id") id:String,
        @Body() updateDto:UpdateClienteDto){
        return this.productosService.update(+id,updateDto);
    }

    @Delete(":id")
    eliminarProducto(@Param("id") id:String){
        return this.productosService.delete(+id);
    }

}