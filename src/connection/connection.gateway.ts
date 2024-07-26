import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ConnectionServiceImpl } from './connection.service';

@WebSocketGateway()
export class ConnectionGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(  
    private readonly gameService: ConnectionServiceImpl
  ) {};

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  handleConnection(@ConnectedSocket() client: any) : void {
    console.log('Client connected');
    console.log(this.server);
    this.server.socketsJoin('game');
    this.gameService.handleJoinGame(client, { gameId: 'game' });
    console.log("🚀 ~ ConnectionService ~ handleConnection ~ this.server.adapter.arguments:", this.server.sockets.adapter.rooms)
  }

  handleDisconnect() : void {
    console.log('Client disconnected');
  }

  @SubscribeMessage('joinGame')
  handleJoinGame(@ConnectedSocket() client: any, @MessageBody() payload: any) : string {
    return '';
  }
  
  @SubscribeMessage('leaveGame')
  handleLeaveGame() : string {
    return '';
  }

  @SubscribeMessage('play')
  handlePlay() : string {
    return '';
  }
}
