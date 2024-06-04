import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    
    readonly id:number;

    readonly nombre:string;

    readonly categoria:string;
}
