export enum TRUCK_STATUS {
  UNSCHEDULED = 'unscheduled',
  SCHEDULED = 'scheduled',
  IN_TRANSIT = 'in-transit',
  ARRIVED_ON_TIME = 'arrived-on-time',
  DELAYED = 'delayed',
}

export interface ITruck {
  id: number
  unitNumber: number | string
  driver: string
  status: TRUCK_STATUS
}

enum PROJECT_STATUS {
  UNPLANNED = 'unplanned',
  IN_PROGRESS = 'in-progress',
  COMPLETED_ON_TIME = 'completed on time',
  DELAYED = 'delayed',
}

export interface IProject {
  id: number
  name: string
  trucks: ITruck[]
  status: PROJECT_STATUS
}
