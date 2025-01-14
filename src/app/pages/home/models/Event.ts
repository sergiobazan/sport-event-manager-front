export interface Event {
  id: string
  title: string
  description: string
  location: string
  startDate: Date
  endDate: Date
  status: EventStatus
  type: EventType
  category: EventCategory
}

export enum EventStatus {
  AVAILABLE,
  UNAVAILABLE,
  ONGOING,
  CANCELLED,
  COMPLETED,
}

export enum EventType {
  TEAM,
  INDIVIDUAL
}

export interface EventCategory {
  id: string
  name: string
}