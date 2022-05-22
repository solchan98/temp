import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MediaReport {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: bigint;

  @Column({ type: 'varchar' })
  channel: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'bigint' })
  imp: number;

  @Column({ type: 'bigint' })
  click: number;

  @Column({ type: 'bigint' })
  cost: number;

  @Column({ type: 'bigint', name: 'conv_value' })
  convValue: number;

  @Column({ type: 'numeric' })
  ctr: number;

  @Column({ type: 'numeric' })
  cvr: number;

  @Column({ type: 'numeric' })
  cpc: number;

  @Column({ type: 'numeric' })
  cpa: number;

  @Column({ type: 'numeric' })
  roas: number;
}
