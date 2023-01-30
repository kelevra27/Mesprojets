import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Concerts } from './interfaces/concerts.interface';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import { Groups, GroupsDocument } from '../groups/groups.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ConcertsService {
  constructor(
    @Inject('concerts_MODEL')
    private concertsModel: Model<Concerts>,
    @InjectModel(Groups.name) private groupsModel: Model<GroupsDocument>

  ) {}
  async create(groupId:string, createConcertDto: CreateConcertDto): Promise<string> {
    const concert : any = await new this.concertsModel(createConcertDto).save();
    const group : any = await this.groupsModel.findById(groupId)
    await group.concerts.push(concert._id)
    await group.save()
    return "Concert ajouté";
   
  }

  async findAll(): Promise<Concerts[]> {
    return this.concertsModel.find().exec();
  }

  async findOne(id: string): Promise<string> {
    console.log('one id : ' + id);
    return await this.concertsModel.findById(id);
  }

  async update(id: string, updateConcertDto: UpdateConcertDto) {
    console.log('the id : ' + id);
    return this.concertsModel.findByIdAndUpdate(id, updateConcertDto);
  }

  async remove(id: string): Promise<string> {
    console.log(id);
    const res: any = await this.concertsModel.findByIdAndRemove(id);
    if (res === null) {
      return 'could not delete';
    }
    return 'Deleted';
  }
}
