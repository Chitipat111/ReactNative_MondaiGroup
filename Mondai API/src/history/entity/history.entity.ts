import { Users } from '../../users/entity/users.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Generated,
} from 'typeorm';

@Entity()
export class History {
  //generate PK & auto increse
  @PrimaryColumn({ type: Number })
  @Generated('increment')
  historyId: number;

  @Column()
  userId: number;

  @Column({ length: 30, nullable: true })
  hisLanguage: string;

  //Generate column
  @Column({ length: 30 })
  hisChapter: string;

  @Column()
  hisScore: number;

}
