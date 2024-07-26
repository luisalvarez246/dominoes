import { Test, TestingModule } from '@nestjs/testing';
import { ConnectionServiceImpl } from './connection.service';

describe('ConnectionServiceImpl', () => {
  let service: ConnectionServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectionServiceImpl],
    }).compile();

    service = module.get<ConnectionServiceImpl>(ConnectionServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
