import { Module } from '@nestjs/common';
import { RoomServiceImpl } from './room.service';

@Module({
  providers: [RoomServiceImpl]
})
export class RoomModule {}
