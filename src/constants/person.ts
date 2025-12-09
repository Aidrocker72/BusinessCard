import { BlockTypeEnum } from "@/enums/BlocksTypeEnum";
import { IPersonData } from "@/interfaces/IPersonData";

export const PERSON: IPersonData[] =  [
  {
    id: 1,
    value: 'Максимов Айдар',
    name: 'name',
  },
  {
    id: 2,
    value: 'Frontend-разработчик (Middle)', 
    name: 'position',
  },
  {
    id: 3,
    value: 'aydarmaximov@yandex.ru',
    name: 'Email:',
    type: BlockTypeEnum.LINK,
  },
];