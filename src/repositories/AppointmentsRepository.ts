
import Appointment from '../models/Appointment';
import {EntityRepository,Repository} from 'typeorm'
@EntityRepository(Appointment)
class  AppointmentsRepository extends Repository <Appointment>{

public async findByDate(date:Date):Promise<Appointment | null>{
 const findAppoitment=await this.findOne({
   where:{date},
 });
  return findAppoitment || null;
}
}
 export default AppointmentsRepository;
