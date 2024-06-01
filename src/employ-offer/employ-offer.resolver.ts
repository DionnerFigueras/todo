import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmployOffer } from './entity/emply-offer.entity';
import { EmployOfferService } from './employ-offer.service';
import { createEmployOfferInputs } from './dto/inputs/create-dto.inputs';
import { updateEmployOfferInputs } from './dto/inputs/update-dto.inputs';

@Resolver()
export class EmployOfferResolver {
    
    constructor(private employOfferService: EmployOfferService) {}

    @Query(() => [EmployOffer], {name: 'employOffers'})
    findAll() {
        return this.employOfferService.findAll();
    }

    @Query(() => EmployOffer, {name: 'findEmployOfferById'})
    findOne(@Args('id', {type: () => Int}) id: number ) {
        return this.employOfferService.findEmployOfferById(id);
    }

    @Mutation(() => EmployOffer, {name:'createEmployOffer'})
    createEmployOffer(@Args('employOffer') employOffer: createEmployOfferInputs){
        return this.employOfferService.createEmployOffer(employOffer);
    }

    @Mutation(() => EmployOffer, {name:'updateEmployOffer'})
    updateEmployOffer(@Args('updateEmployOffer') updateEmployOffer: updateEmployOfferInputs){
        return this.employOfferService.updateEmployoffer(updateEmployOffer.id, updateEmployOffer);
    }

    @Mutation(() => String, {name: 'removeEmployOffer'})
    deleteEmployOffer(@Args('id', {type: () => Int}) id: number){
        this.employOfferService.removeEmployOffer(id)
        return 'Employ Offer Deleted';
    }
}
