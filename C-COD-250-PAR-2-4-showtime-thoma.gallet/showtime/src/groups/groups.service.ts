import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Groups, GroupsDocument } from './groups.schema';
import { InjectModel } from '@nestjs/mongoose';
// import { Groups } from './interfaces/groups.interface';

@Injectable()
export class GroupsService {
  constructor(
    // @Inject('groups_MODEL')
    // private groupsModel: Model<Groups>,
    @InjectModel(Groups.name) private groupsModel: Model<GroupsDocument>

  ) {}
  create(createGroupDto: CreateGroupDto): Promise<Groups> {
    return new this.groupsModel(createGroupDto).save();
  }

  async findAll(): Promise<Groups[]> {
    return this.groupsModel.find().exec();
  }

  async findOne(id: string): Promise<Groups> {
    // console.log('one id : ' + id);
    return await this.groupsModel.findById(id).populate("concerts")
  }

  async update(id: string, updateGroupDto: UpdateGroupDto) {
    console.log('the id : ' + id);
    return this.groupsModel.findByIdAndUpdate(id, updateGroupDto);
  }

  async remove(id: string): Promise<string> {
    console.log(id);
    const res: any = await this.groupsModel.findByIdAndRemove(id);
    if (res === null) {
      return 'could not delete';
    }
    return 'Deleted';
  }

  async addConcerts(id: string, CreateGroupDto: CreateGroupDto): Promise<string> {
    return this.groupsModel.findByIdAndUpdate(id, CreateGroupDto);
  }
}
