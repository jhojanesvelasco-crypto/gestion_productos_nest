import { Controller, Get, Post, Body } from '@nestjs/common';
import { conexion } from '../db';

@Controller('productos')
export class ProductosController {

    @Get()
    async traerProductos() {
        const [datos] = await conexion.query(
            'SELECT * FROM productos'
        );

        return {
            productos: datos
        };
    }

    @Post()
    async guardarProductos(@Body() dato: any) {
        const res = await conexion.query(
            'INSERT INTO productos(nombre, precio, marca) VALUES (?, ?, ?)',
            [dato.nombre, dato.precio, dato.marca]
        );

        return {
            mensaje: 'productos registrado correctamente',
            dato: res
        };
    }
}
