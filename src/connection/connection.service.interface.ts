export interface ConnectionService {
    handleJoinGame(client: any, payload: any): void;
    handleLeaveGame(client: any, payload: any): void;
    handlePlay(client: any, payload: any): void;
}

