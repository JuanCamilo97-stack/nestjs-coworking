import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Space } from './../../space/entities/space.entity';

@Entity({ schema: 'coworking', name: "rooms" })
export class Room {
    @PrimaryGeneratedColumn()
    id_room: number;

    @Column()
    name: string;

    @OneToMany(() => Space, space => space.room)
    spaces: Space[];
}
