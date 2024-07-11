import { Test, TestingModule } from '@nestjs/testing';
import { InverntoriesController } from './inventories.controller';
import { InverntoriesService } from './inventories.service';

describe('InverntoriesController', () => {
  let controller: InverntoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InverntoriesController],
      providers: [InverntoriesService],
    }).compile();

    controller = module.get<InverntoriesController>(InverntoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
