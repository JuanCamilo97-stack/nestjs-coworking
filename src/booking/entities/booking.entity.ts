import { Espacio } from "src/espacios/entities/espacio.entity";
import { Meeting } from "src/meeting/entities/meeting.entity";
import { User } from "src/users/entities/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'coworking', name: "booking" })
export class Booking {
    @PrimaryGeneratedColumn()
    id_booking: number;

    @ManyToOne(() => Espacio, espacio => espacio.booking)
    @JoinColumn({ name: 'id_espacio' })
    espacio: Espacio;

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
