export enum TRUCK_STATUS {
  UNSCHEDULED = 'unscheduled',
  SCHEDULED = 'scheduled',
  IN_TRANSIT = 'in-transit',
  ARRIVED_ON_TIME = 'arrived-on-time',
  DELAYED = 'delayed',
}

export enum PROJECT_STATUS {
  UNPLANNED = 'Unplanned',
  IN_PROGRESS = 'In Process',
  COMPLETED_ON_TIME = 'Completed on Time',
  DELAYED = 'Delayed',
}

export interface IProject {
  id: number | string
  name: string
  trucks: ITruck[]
  status: PROJECT_STATUS
}

export interface ITruck {
  id: number
  unitNumber: number | string
  driver: string
  status: TRUCK_STATUS
}
