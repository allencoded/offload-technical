import { ITruck, PROJECT_STATUS, TRUCK_STATUS } from '@/data/types'

export const getProjectStatus = (trucks: ITruck[]): PROJECT_STATUS => {
  const truckStatuses = trucks.map((truck) => truck.status)
  console.log('truckStatuses: ', truckStatuses)

  if (truckStatuses.every((status) => status === TRUCK_STATUS.UNSCHEDULED)) {
    return PROJECT_STATUS.UNPLANNED
  }

  if (truckStatuses.includes(TRUCK_STATUS.DELAYED)) {
    return PROJECT_STATUS.DELAYED
  }

  if (
    truckStatuses.every((status) => status === TRUCK_STATUS.ARRIVED_ON_TIME)
  ) {
    return PROJECT_STATUS.COMPLETED_ON_TIME
  }

  if (
    truckStatuses.some(
      (status) =>
        status === TRUCK_STATUS.SCHEDULED || status === TRUCK_STATUS.IN_TRANSIT,
    )
  ) {
    return PROJECT_STATUS.IN_PROGRESS
  }

  return PROJECT_STATUS.UNPLANNED // Default case
}
