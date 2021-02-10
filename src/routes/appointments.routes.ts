import {Router} from 'express';
import {getCustomRepository} from 'typeorm';
import{parseISO} from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppoitmentService from '../services/CreateAppointmentService';

const appointmentsRouter=Router();

appointmentsRouter.get('/',async(request,response)=>{
const appointmentsRepository=getCustomRepository(AppointmentsRepository);
const appoitments= await appointmentsRepository.find();
return response.json(appoitments);
})
appointmentsRouter.post('/',async (request,response)=>{
  try{
    const {provider,date}=request.body;
    const parseDate=parseISO(date);
    const createAppointment=new CreateAppoitmentService();
  const appoitment=await createAppointment.execute({
    date:parseDate,
    provider,
  });

  return response.json(appoitment);
}catch(err){
  return response.status (400).json({error:err.message});
}
});
export default appointmentsRouter;
