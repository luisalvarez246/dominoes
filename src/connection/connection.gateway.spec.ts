import { Test, TestingModule } from '@nestjs/testing';
import { Reflector } from '@nestjs/core';
import { ConnectionGateway } from './connection.gateway';
import { ConnectionServiceImpl } from './connection.service';

describe('ConnectionGateway', () => {
  let gateway: ConnectionGateway;
  let reflector: Reflector;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectionGateway, ConnectionServiceImpl],
    }).compile();

    gateway = module.get<ConnectionGateway>(ConnectionGateway);
    reflector = module.get<Reflector>(Reflector);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
    expect(gateway.handleConnection).toBeDefined();
    expect(gateway.handleDisconnect).toBeDefined();
    expect(gateway.handleJoinGame).toBeDefined();
    expect(gateway.handleLeaveGame).toBeDefined();
    expect(gateway.handlePlay).toBeDefined();
    expect(gateway.server).toBeDefined();
  });

  it('should have @SubscribeMessage annotations', () => {
    // arrange
    const methodsWithAnnotations = [
      { methodName: 'handleJoinGame', message: 'joinGame' },
      { methodName: 'handleLeaveGame', message: 'leaveGame' },
      { methodName: 'handlePlay', message: 'play' },
    ]
    // act
    methodsWithAnnotations.forEach(({ methodName, message }) => {
      const metadata = reflector.get('message', gateway[methodName]);
      // assert
      try {
        expect(metadata).toBeDefined();
      }
      catch (e) {
        throw new Error(`Method ${methodName} should have @SubscribeMessage('${message}') annotation`);
      }
      expect(metadata).toBe(message);
    })
  });

  it('joinGame should receive a socket instance and a payload', () => {
    // arrange
    // const parameters = reflector.get('design:paramtypes', gateway.handleJoinGame);
    const parameters = Reflect.getMetadata('design:paramtypes', gateway, 'handleJoinGame');
        
    // act
    // assert
    expect(parameters).toBeDefined();
    expect(parameters).toHaveLength(2);
  });
});
