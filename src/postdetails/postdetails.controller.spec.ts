import { Test, TestingModule } from '@nestjs/testing';
import { PostdetailsController } from './postdetails.controller';
import { PostdetailsService } from './postdetails.service';

describe('PostdetailsController', () => {
  let controller: PostdetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostdetailsController],
      providers: [PostdetailsService],
    }).compile();

    controller = module.get<PostdetailsController>(PostdetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
