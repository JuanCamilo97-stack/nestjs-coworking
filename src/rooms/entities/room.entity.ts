import { Espacio } from "src/espacios/entities/espacio.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'coworking', name: "rooms" })
export class Room {
    @PrimaryGeneratedColumn()
    id_room: number;

    @Column()
    name: string;

    @OneToMany(() => Espacio, espacio => espacio.room)
    espacios: Espacio[]
}
