import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';
import { MeetingModule } from './meeting/meeting.module';

@Module({
  imports: [BookingModule, RoomsModule, UsersModule, MeetingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
