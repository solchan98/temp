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

  @Column({ type: 'bigint', name: 'conv_value' })
  convValue: number;

  @Column({ type: 'double precision' })
  ctr: number;

  @Column({ type: 'double precision' })
  cvr: number;

  @Column({ type: 'double precision' })
  cpc: number;

  @Column({ type: 'double precision' })
  cpa: number;

  @Column({ type: 'double precision' })
  roas: number;

  @Column({ type: 'date' })
  date: Date;
}
