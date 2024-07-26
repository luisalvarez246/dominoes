export interface RoomService {
    handleJoinGame(client: any, payload: any): void;
    handleLeaveGame(client: any, payload: any): void;
}
