import { Test, TestingModule } from '@nestjs/testing';
import { PosttypesController } from './posttypes.controller';
import { PosttypesService } from './posttypes.service';

describe('PosttypesController', () => {
  let controller: PosttypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PosttypesController],
      providers: [PosttypesService],
    }).compile();

    controller = module.get<PosttypesController>(PosttypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
