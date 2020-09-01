import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';

import Complaint from './Complaint';

@Entity('whistleblower')
export default class Whistleblower {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(type => Complaint, whistleblower => Whistleblower)
    complaints: Complaint[];

    @Column()
    name: string;

    @Column()
    cpf: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
