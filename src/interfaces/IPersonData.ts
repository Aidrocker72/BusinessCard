import { BlockTypeEnum } from "@/enums/BlocksTypeEnum";
import { IBase } from "@/interfaces/IBase";

export interface IPersonData extends IBase  {
  name: string,
  type?: BlockTypeEnum,
};
