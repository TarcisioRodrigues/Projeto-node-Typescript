
import{Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
@Entity('appoitments')

class Appointment{
@PrimaryGeneratedColumn('uuid')
  id:string;
  @Column()
  provider:string;
  @Column('timestamp with time zone')
  date:Date;

}

export default Appointment;
