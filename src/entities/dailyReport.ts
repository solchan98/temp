import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DailyReport {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: bigint;

  @Column({ type: 'bigint' })
  imp: number;

  @Column({ type: 'bigint' })
  click: number;

  @Column({ type: 'bigint' })
  cost: number;

  @Column({ type: 'bigint' })
  conv: number;

  @Column({ type: 'bigint' })
  convValue: number;

  @Column({ type: 'bigint' })
  ctr: number;

  @Column({ type: 'bigint' })
  cvr: number;

  @Column({ type: 'bigint' })
  cpc: number;

  @Column({ type: 'bigint' })
  cpa: number;

  @Column({ type: 'bigint' })
  roas: number;

  @Column({ type: 'date' })
  date: Date;
}
