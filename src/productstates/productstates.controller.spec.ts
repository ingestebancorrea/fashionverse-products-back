import { Test, TestingModule } from '@nestjs/testing';
import { ProductstatesController } from './productstates.controller';
import { ProductstatesService } from './productstates.service';

describe('ProductstatesController', () => {
  let controller: ProductstatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductstatesController],
      providers: [ProductstatesService],
    }).compile();

    controller = module.get<ProductstatesController>(ProductstatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
