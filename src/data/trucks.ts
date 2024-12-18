import { ITruck, TRUCK_STATUS } from './types'

export const trucks: ITruck[] = [
  {
    id: 1,
    unitNumber: 12345,
    driver: 'John Doe',
    status: TRUCK_STATUS.UNSCHEDULED,
  },
  {
    id: 2,
    unitNumber: 'ABC123',
    driver: 'Jane Smith',
    status: TRUCK_STATUS.IN_TRANSIT,
  },
  {
    id: 3,
    unitNumber: 67890,
    driver: 'Bob Johnson',
    status: TRUCK_STATUS.SCHEDULED,
  },
]
