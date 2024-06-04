import { Module } from '@nestjs/common';
import { DanteController } from './dante.controller';

@Module({
  controllers: [DanteController]
})
export class DanteModule {}
