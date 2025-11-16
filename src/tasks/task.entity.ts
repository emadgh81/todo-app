import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  title!: string;
  @Column({ default: false })
  isDone!: boolean;
  @ManyToOne(() => User, (user) => user.tasks)
  user!: User;
}
