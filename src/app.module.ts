import { Module } from '@nestjs/common';
import { ProductosController } from './productos/productos.controller';

@Module({
  imports: [],
  controllers: [ProductosController],
  providers: [],
})
export class AppModule {}
