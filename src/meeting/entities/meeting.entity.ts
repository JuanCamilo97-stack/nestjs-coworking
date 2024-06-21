import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Booking } from "src/booking/entities/booking.entity";  

@Entity({ schema: 'coworking', name: "meeting" })  
export class Meeting {  
    @PrimaryGeneratedColumn()
    id_meeting: number;  

    @Column()
    nombre: string;  

    @OneToMany(() => Booking, booking => booking.meeting)  
    bookings: Booking[];  
}
