import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionModule } from './connection/connection.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [ConnectionModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
