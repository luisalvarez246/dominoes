import { Injectable } from '@nestjs/common';
import { RoomService } from './room.service.interface';

@Injectable()
export class RoomServiceImpl implements RoomService {
    handleJoinGame(client: any, payload: any): void {
        throw new Error('Method not implemented.');
    }
    handleLeaveGame(client: any, payload: any): void {
        throw new Error('Method not implemented.');
    }
}
