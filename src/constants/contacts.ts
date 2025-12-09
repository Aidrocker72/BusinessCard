import { BlockTypeEnum } from "@/enums/BlocksTypeEnum";
import { IContacts } from "@/interfaces/IContacts";

export const CONTACTS: IContacts[] = [
  {
    id: 1,
    value: 'Проживаю: Казань, Россия',
    icon: '📍',
  },
  {
    id: 2,
    value: 'Email',
    icon: '📧',
    type: BlockTypeEnum.MAIL,
    link: 'aydarmaximov@yandex.ru'
  },
  {
    id: 3,
    value: 'GitHub',
    icon: '💻',
    type: BlockTypeEnum.LINK,
    link: 'https://github.com/Aidrocker'
  },
  {
    id: 4,
    value: 'ВКонтакте',
    icon: '👨‍💻',
    type: BlockTypeEnum.LINK,
    link: 'https://vk.com/id232037611'
  },
]