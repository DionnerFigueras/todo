import { Module } from '@nestjs/common';
import { EmployOfferResolver } from './employ-offer.resolver';
import { EmployOfferService } from './employ-offer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployOffer } from './entity/emply-offer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployOffer])],
  providers: [EmployOfferResolver, EmployOfferService]
})
export class EmployOfferModule {}
