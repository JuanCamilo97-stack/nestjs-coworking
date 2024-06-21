import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingModule } from './meeting/meeting.module';
import { SpacesModule } from './space/space.module';



@Module({
  imports: [
  ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
      extra: {
        ssl: true
      },
    }),
    UsersModule,  
    BookingModule, 
    MeetingModule,
    RoomsModule,
    SpacesModule
  ],
})
export class AppModule {}