import { ITruck } from "./trucks";

enum PROJECT_STATUS {
  UNPLANNED = "unplanned",
  IN_PROGRESS = "in-progress",
  COMPLETED_ON_TIME = "completed on time",
  DELAYED = "delayed"
} 

export interface IProject {
  id: number;
  name: string;
  trucks: ITruck[];
  status: PROJECT_STATUS;
}