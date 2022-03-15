import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class Users {
  //generate PK & auto increse
  @PrimaryGeneratedColumn()
  userId: number;

  //Generate column
  @Column({ length: 30, unique: true })
  userName: string;

  @Column()
  userImage: number;

  @Column({ length: 30 })
  userPassword: string;

  // @OneToOne(()=>Password)
  // @JoinColumn()
  // public password : Password;
}
