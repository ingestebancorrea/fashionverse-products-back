import { Test, TestingModule } from '@nestjs/testing';
import { PostdetailsService } from './postdetails.service';

describe('PostdetailsService', () => {
  let service: PostdetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostdetailsService],
    }).compile();

    service = module.get<PostdetailsService>(PostdetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
