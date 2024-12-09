enum TRUCK_STATUS {
  UNSCHEDULED = "unscheduled",
  SCHEDULED = "scheduled",
  IN_TRANSIT = "in-transit",
  ARRIVED_ON_TIME = "arrived-on-time",
  DELAYED = "delayed",
}

export interface ITruck {
  id: number;
  unitNumber: number | string;
  driver: string;
  status: TRUCK_STATUS;
}

export const trucks: ITruck[] = [
  {
    id: 1,
    unitNumber: 12345,
    driver: "John Doe",
    status: TRUCK_STATUS.UNSCHEDULED,
  },
  {
    id: 2,
    unitNumber: "ABC123",
    driver: "Jane Smith",
    status: TRUCK_STATUS.IN_TRANSIT,
  },
  {
    id: 3,
    unitNumber: 67890,
    driver: "Bob Johnson",
    status: TRUCK_STATUS.SCHEDULED,
  },
];
