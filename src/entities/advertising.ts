import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Advertising {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar' })
  adType: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'bigint' })
  budget: number;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ type: 'bigint' })
  cost: number;

  @Column({ type: 'bigint' })
  convValue: number;

  @Column({ type: 'bigint' })
  roas: number;
}
