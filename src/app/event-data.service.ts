import { Injectable } from '@angular/core';
import { Event } from "../types/Event";

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  eventData: Event = {
    id: '',
    name: '',
    type: '',
    venue: '',
    hostName: '',
    startDt: '',
    endDt: '',
    limit: undefined,
    description: '',
    participants: {}
  };

  constructor() { }

  public createEventData(data: any) {
    this.eventData = {
    id: data['id'],
    name: data['name'],
    type: data['type'],
    venue: data['venue'],
    hostName: data['hostName'],
    startDt: data['startDt'],
    endDt: data['startDt'],
    limit: data['limit'],
    description: data['description'],
    participants: data['participants']
    }
  }
}