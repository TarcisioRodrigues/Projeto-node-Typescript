import {startOfHour} from 'date-fns';
import {getCustomRepository} from 'typeorm';
import Appointment from '../models/Appointment';
import AppoitmentsRepository from '../repositories/AppointmentsRepository';

interface Request{
  provider:string;
  date:Date;
}
class CreateAppoitmentService{
  public async execute({date,provider}:Request):Promise<Appointment>{
    const appointmentsRepository=getCustomRepository(AppoitmentsRepository);
    const appointmentDate=startOfHour(date);


    const findAppoitmentsInSameDate= await appointmentsRepository.findByDate(
      appointmentDate
    );
    if(findAppoitmentsInSameDate){
      throw Error('This appoitment is booked');
    }
    const appoitment=appointmentsRepository.create({
      provider,
      date:appointmentDate
    });
    await appointmentsRepository.save(appoitment)
    return appoitment;
  }
}

  export default CreateAppoitmentService;



