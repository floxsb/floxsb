import { Test, TestingModule } from '@nestjs/testing';
import { DanteController } from './dante.controller';

describe('DanteController', () => {
  let controller: DanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanteController],
    }).compile();

    controller = module.get<DanteController>(DanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
