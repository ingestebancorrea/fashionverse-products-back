import { Test, TestingModule } from '@nestjs/testing';
import { InventorystatesController } from './inventorystates.controller';
import { InventorystatesService } from './inventorystates.service';


describe('InverntorystatesController', () => {
  let controller: InventorystatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventorystatesController],
      providers: [InventorystatesService],
    }).compile();

    controller = module.get<InventorystatesController>(InventorystatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
