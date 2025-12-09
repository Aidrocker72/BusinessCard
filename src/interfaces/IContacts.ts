import { BlockTypeEnum } from "@/enums/BlocksTypeEnum";
import { IBase } from "@/interfaces/IBase";

export interface IContacts extends IBase{
  icon: string,
  
  type?: BlockTypeEnum,
  link?: string, 
};
