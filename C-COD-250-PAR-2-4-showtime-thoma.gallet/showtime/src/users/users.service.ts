import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InjectModel } from '@nestjs/mongoose';
//import { Users } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users, UsersDocument } from './users.schema';

@Injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UsersService {
  addFavorite(id: any, createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return this.usersModel.findByIdAndUpdate(id, createUserDto);
  }
  constructor(
    // @Inject('users_MODEL')
    // private usersModel: Model<Users>,
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  register(createUserDto: CreateUserDto): Promise<Users> {
    return new this.usersModel(createUserDto).save();
  }

  async findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }

  // async findOne(id: string): Promise<String> {
  //   console.log("one id : " + id);
  //   return await this.usersModel.findById(id).populate("booking")

  async findOneB(id: string): Promise<Users> {
    // console.log("one id : " + id);
    // eslint-disable-next-line prettier/prettier
    return await this.usersModel.findById(id).populate("booking")
  }

  async findOne(id: string): Promise<Users> {
    // console.log("one id : " + id);
    // eslint-disable-next-line prettier/prettier
    return await this.usersModel.findById(id).populate("favorite")
  }

  // eslint-disable-next-line prettier/prettier
  async findWithEmail(email: string) : Promise<Users> {
    return await this.usersModel.findOne({ email });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<Users> {
    // console.log("the id : " + id);
    return this.usersModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string): Promise<string> {
    // console.log(id)
    const res: any = await this.usersModel.findByIdAndRemove(id);
    if (res === null) {
      return 'could not delete';
    }
    return 'Deleted';
  }

  async addBooking(id: string, CreateUserDto: CreateUserDto): Promise<string> {
    return this.usersModel.findByIdAndUpdate(id, CreateUserDto);
  }

  async updateEmail(id: string, CreateUserDto: CreateUserDto): Promise<string> {
    console.log(CreateUserDto)
    return this.usersModel.findByIdAndUpdate(id, CreateUserDto);
  }
}
