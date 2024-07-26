import { Module } from '@nestjs/common';
import { ConnectionGateway } from './connection.gateway';
import { ConnectionServiceImpl } from './connection.service';

@Module({
    providers: [ConnectionGateway, ConnectionServiceImpl],
})
export class ConnectionModule {}
