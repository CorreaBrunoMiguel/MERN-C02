import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { Users } from '../users/user_entity';
import { Tasks } from '../tasks/tasks_entity';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn('uuid')
  comment_id: string;

  @Column({ type: 'text' })
  comments: string;

  @OneToOne(() => Users, userData => userData.user_id)
  @JoinColumn({ name: 'user_id' })
  user_id: string;

  @OneToOne(() => Tasks, taskData => taskData.task_id)
  @JoinColumn({ name: 'task_id' })
  task_id: string;

  @Column('text', { array: true, default: [] })
  supported_files: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
