import { Test, TestingModule } from '@nestjs/testing';
import { RoomServiceImpl } from './room.service';

describe('RoomServiceImpl', () => {
  let service: RoomServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomServiceImpl],
    }).compile();

    service = module.get<RoomServiceImpl>(RoomServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('joinGame should return the name of the room', () => {
    expect(service.handleJoinGame('client', 'payload')).toBe(typeof 'string');
  });
});

