import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployOffer } from './entity/emply-offer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createEmployOfferInputs } from './dto/inputs/create-dto.inputs';
import { updateEmployOfferInputs } from './dto/inputs/update-dto.inputs';

@Injectable()
export class EmployOfferService {

    constructor(@InjectRepository(EmployOffer) private employOfferRepository: Repository<EmployOffer>) { }

    async findAll(): Promise<EmployOffer[]> {
        return this.employOfferRepository.find();
    }

    async findEmployOfferById(id: number): Promise<EmployOffer> {
        return this.employOfferRepository.findOne({ where: { id } }); 
    }

    createEmployOffer(employOffer: createEmployOfferInputs): Promise<EmployOffer> {
        const newEmployOffer = this.employOfferRepository.create(employOffer);
        return this.employOfferRepository.save(newEmployOffer);
    }

    async updateEmployoffer(id: number, input: updateEmployOfferInputs): Promise<EmployOffer> {
        const employOffer = await this.employOfferRepository.findOne({where: {id}});

        if(! employOffer) throw new NotFoundException(`Todo with id ${id} not found`);

        if(input.title) employOffer.title = input.title;
        if(input.yearsOfExperience !== undefined) employOffer.yearsOfExperience = input.yearsOfExperience;
        if(input.modality) employOffer.modality = input.modality;
        if(input.type) employOffer.type = input.type;
        if(input.salary !== undefined) employOffer.salary = input.salary;
        if(input.hiringDate) employOffer.hiringDate = input.hiringDate;
        
        return await this.employOfferRepository.save({...employOffer, ...input});
    }

    async removeEmployOffer(id: number){
        const employOffer = await this.employOfferRepository.findOne({where: {id}});
        if(!employOffer) throw new NotFoundException(`Todo with id ${id} not found`);
        return await this.employOfferRepository.remove(employOffer);
    }
}
