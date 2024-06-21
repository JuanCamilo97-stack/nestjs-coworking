import { Booking } from "src/booking/entities/booking.entity";  
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'coworking', name: "users" })  
export class User {
    @PrimaryGeneratedColumn()
    id_user: number;  

    @Column()
    name: string;  

    @OneToMany(() => Booking, booking => booking.user)
    bookings: Booking[]; 
}
