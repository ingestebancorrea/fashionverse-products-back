import { Test, TestingModule } from '@nestjs/testing';
import { PosttypesService } from './posttypes.service';

describe('PosttypesService', () => {
  let service: PosttypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosttypesService],
    }).compile();

    service = module.get<PosttypesService>(PosttypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
