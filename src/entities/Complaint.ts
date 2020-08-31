import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import Whistleblower from './Whistleblower';

@Entity('complaint')
export default class Complaint {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    whistleblower_id: string;

    @ManyToOne(() => Whistleblower)
    @JoinColumn({ name: 'whistleblower_id' })
    whistleblower: Whistleblower;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
