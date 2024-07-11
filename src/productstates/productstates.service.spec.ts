import { Test, TestingModule } from '@nestjs/testing';
import { ProductstatesService } from './productstates.service';

describe('ProductstatesService', () => {
  let service: ProductstatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductstatesService],
    }).compile();

    service = module.get<ProductstatesService>(ProductstatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
