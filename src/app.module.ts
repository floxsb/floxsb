import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { DanteModule } from './dante/dante.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [ProductosModule, DanteModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
