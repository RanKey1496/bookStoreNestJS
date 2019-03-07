import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('book')
export class Book {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 150 })
    public title: string;

    @Column({ length: 300 })
    public description: string;

    @Column({ length: 100 })
    public author: string;

}
