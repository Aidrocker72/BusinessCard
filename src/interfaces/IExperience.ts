import { IStack } from "@/interfaces/IStack";

export interface IExperience {
  id: number,
  title: string,
  period: string,
  position: string,
  stack: IStack [],
}