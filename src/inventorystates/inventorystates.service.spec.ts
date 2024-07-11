import { Test, TestingModule } from '@nestjs/testing';
import { InventorystatesService } from './inventorystates.service';

describe('InventorystatesService', () => {
  let service: InventorystatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventorystatesService],
    }).compile();

    service = module.get<InventorystatesService>(InventorystatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
