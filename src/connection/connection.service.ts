import { Injectable } from '@nestjs/common';
import { ConnectionService } from './connection.service.interface';

@Injectable()
export class ConnectionServiceImpl implements ConnectionService {
    handleJoinGame(client: any, payload: any): void {
        console.log('injection works');
    }
    handleLeaveGame(client: any, payload: any): void {
        throw new Error('Method not implemented.');
    }
    handlePlay(client: any, payload: any): void {
        throw new Error('Method not implemented.');
    }
}
