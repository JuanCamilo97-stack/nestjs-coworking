import { Meeting } from "src/meeting/entities/meeting.entity";
import { User } from "src/users/entities/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Space } from 'src/space/entities/space.entity';

@Entity({ schema: 'coworking', name: "booking" })
export class Booking {
    @PrimaryGeneratedColumn()
    id_booking: number;

    @ManyToOne(() => Space, space => space.booking)
    @JoinColumn({ name: 'id_espacio' })
    espacio: Space;

    @ManyToOne(() => User, user => user.bookings)
    @JoinColumn({ name: 'id_user' })
    user: User;

    @ManyToOne(() => Meeting, meeting => meeting.bookings)
    @JoinColumn({ name: 'id_meeting' })
    meeting: Meeting;

    @Column({ type: 'timestamp' })
    booking_date: Date;

    @Column()
    status: string;
}
