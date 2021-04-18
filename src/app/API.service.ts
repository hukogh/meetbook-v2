/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateEventInput = {
  id?: string | null;
  name: string;
  type: string;
  venue: string;
  hostName: string;
  startDt: string;
  endDt: string;
  limit?: number | null;
  description?: string | null;
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null;
  type?: ModelStringInput | null;
  venue?: ModelStringInput | null;
  hostName?: ModelStringInput | null;
  startDt?: ModelStringInput | null;
  endDt?: ModelStringInput | null;
  limit?: ModelIntInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Event = {
  __typename: "Event";
  id?: string;
  name?: string;
  type?: string;
  venue?: string;
  hostName?: string;
  startDt?: string;
  endDt?: string;
  limit?: number | null;
  description?: string | null;
  participants?: ModelEventParticipantConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelEventParticipantConnection = {
  __typename: "ModelEventParticipantConnection";
  items?: Array<EventParticipant | null> | null;
  nextToken?: string | null;
};

export type EventParticipant = {
  __typename: "EventParticipant";
  id?: string;
  eventId?: string;
  event?: Event;
  userName?: string;
  comments?: ModelCommentConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items?: Array<Comment | null> | null;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id?: string;
  eventParticipantId?: string;
  eventParticipant?: EventParticipant;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateEventInput = {
  id: string;
  name?: string | null;
  type?: string | null;
  venue?: string | null;
  hostName?: string | null;
  startDt?: string | null;
  endDt?: string | null;
  limit?: number | null;
  description?: string | null;
};

export type DeleteEventInput = {
  id?: string | null;
};

export type CreateEventParticipantInput = {
  id?: string | null;
  eventId: string;
  userName: string;
  createdAt?: string | null;
};

export type ModelEventParticipantConditionInput = {
  eventId?: ModelIDInput | null;
  userName?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelEventParticipantConditionInput | null> | null;
  or?: Array<ModelEventParticipantConditionInput | null> | null;
  not?: ModelEventParticipantConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateEventParticipantInput = {
  id: string;
  eventId?: string | null;
  userName?: string | null;
  createdAt?: string | null;
};

export type DeleteEventParticipantInput = {
  id?: string | null;
};

export type CreateCommentInput = {
  id?: string | null;
  eventParticipantId: string;
  content: string;
  createdAt?: string | null;
};

export type ModelCommentConditionInput = {
  eventParticipantId?: ModelIDInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type UpdateCommentInput = {
  id: string;
  eventParticipantId?: string | null;
  content?: string | null;
  createdAt?: string | null;
};

export type DeleteCommentInput = {
  id?: string | null;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  type?: ModelStringInput | null;
  venue?: ModelStringInput | null;
  hostName?: ModelStringInput | null;
  startDt?: ModelStringInput | null;
  endDt?: ModelStringInput | null;
  limit?: ModelIntInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection";
  items?: Array<Event | null> | null;
  nextToken?: string | null;
};

export type ModelEventParticipantFilterInput = {
  id?: ModelIDInput | null;
  eventId?: ModelIDInput | null;
  userName?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelEventParticipantFilterInput | null> | null;
  or?: Array<ModelEventParticipantFilterInput | null> | null;
  not?: ModelEventParticipantFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  eventParticipantId?: ModelIDInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type CreateEventMutation = {
  __typename: "Event";
  id: string;
  name: string;
  type: string;
  venue: string;
  hostName: string;
  startDt: string;
  endDt: string;
  limit?: number | null;
  description?: string | null;
  participants?: {
    __typename: "ModelEventParticipantConnection";
    items?: Array<{
      __typename: "EventParticipant";
      id: string;
      eventId: string;
      userName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEventMutation = {
  __typename: "Event";
  id: string;
  name: string;
  type: string;
  venue: string;
  hostName: string;
  startDt: string;
  endDt: string;
  limit?: number | null;
  description?: string | null;
  participants?: {
    __typename: "ModelEventParticipantConnection";
    items?: Array<{
      __typename: "EventParticipant";
      id: string;
      eventId: string;
      userName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEventMutation = {
  __typename: "Event";
  id: string;
  name: string;
  type: string;
  venue: string;
  hostName: string;
  startDt: string;
  endDt: string;
  limit?: number | null;
  description?: string | null;
  participants?: {
    __typename: "ModelEventParticipantConnection";
    items?: Array<{
      __typename: "EventParticipant";
      id: string;
      eventId: string;
      userName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateEventParticipantMutation = {
  __typename: "EventParticipant";
  id: string;
  eventId: string;
  event?: {
    __typename: "Event";
    id: string;
    name: string;
    type: string;
    venue: string;
    hostName: string;
    startDt: string;
    endDt: string;
    limit?: number | null;
    description?: string | null;
    participants?: {
      __typename: "ModelEventParticipantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      eventParticipantId: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEventParticipantMutation = {
  __typename: "EventParticipant";
  id: string;
  eventId: string;
  event?: {
    __typename: "Event";
    id: string;
    name: string;
    type: string;
    venue: string;
    hostName: string;
    startDt: string;
    endDt: string;
    limit?: number | null;
    description?: string | null;
    participants?: {
      __typename: "ModelEventParticipantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      eventParticipantId: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEventParticipantMutation = {
  __typename: "EventParticipant";
  id: string;
  eventId: string;
  event?: {
    __typename: "Event";
    id: string;
    name: string;
    type: string;
    venue: string;
    hostName: string;
    startDt: string;
    endDt: string;
    limit?: number | null;
    description?: string | null;
    participants?: {
      __typename: "ModelEventParticipantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      eventParticipantId: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  eventParticipantId: string;
  eventParticipant?: {
    __typename: "EventParticipant";
    id: string;
    eventId: string;
    event?: {
      __typename: "Event";
      id: string;
      name: string;
      type: string;
      venue: string;
      hostName: string;
      startDt: string;
      endDt: string;
      limit?: number | null;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userName: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  eventParticipantId: string;
  eventParticipant?: {
    __typename: "EventParticipant";
    id: string;
    eventId: string;
    event?: {
      __typename: "Event";
      id: string;
      name: string;
      type: string;
      venue: string;
      hostName: string;
      startDt: string;
      endDt: string;
      limit?: number | null;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userName: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  eventParticipantId: string;
  eventParticipant?: {
    __typename: "EventParticipant";
    id: string;
    eventId: string;
    event?: {
      __typename: "Event";
      id: string;
      name: string;
      type: string;
      venue: string;
      hostName: string;
      startDt: string;
      endDt: string;
      limit?: number | null;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userName: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type GetEventQuery = {
  __typename: "Event";
  id: string;
  name: string;
  type: string;
  venue: string;
  hostName: string;
  startDt: string;
  endDt: string;
  limit?: number | null;
  description?: string | null;
  participants?: {
    __typename: "ModelEventParticipantConnection";
    items?: Array<{
      __typename: "EventParticipant";
      id: string;
      eventId: string;
      userName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListEventsQuery = {
  __typename: "ModelEventConnection";
  items?: Array<{
    __typename: "Event";
    id: string;
    name: string;
    type: string;
    venue: string;
    hostName: string;
    startDt: string;
    endDt: string;
    limit?: number | null;
    description?: string | null;
    participants?: {
      __typename: "ModelEventParticipantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetEventParticipantQuery = {
  __typename: "EventParticipant";
  id: string;
  eventId: string;
  event?: {
    __typename: "Event";
    id: string;
    name: string;
    type: string;
    venue: string;
    hostName: string;
    startDt: string;
    endDt: string;
    limit?: number | null;
    description?: string | null;
    participants?: {
      __typename: "ModelEventParticipantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      eventParticipantId: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListEventParticipantsQuery = {
  __typename: "ModelEventParticipantConnection";
  items?: Array<{
    __typename: "EventParticipant";
    id: string;
    eventId: string;
    event?: {
      __typename: "Event";
      id: string;
      name: string;
      type: string;
      venue: string;
      hostName: string;
      startDt: string;
      endDt: string;
      limit?: number | null;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userName: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  eventParticipantId: string;
  eventParticipant?: {
    __typename: "EventParticipant";
    id: string;
    eventId: string;
    event?: {
      __typename: "Event";
      id: string;
      name: string;
      type: string;
      venue: string;
      hostName: string;
      startDt: string;
      endDt: string;
      limit?: number | null;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userName: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items?: Array<{
    __typename: "Comment";
    id: string;
    eventParticipantId: string;
    eventParticipant?: {
      __typename: "EventParticipant";
      id: string;
      eventId: string;
      userName: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateEventSubscription = {
  __typename: "Event";
  id: string;
  name: string;
  type: string;
  venue: string;
  hostName: string;
  startDt: string;
  endDt: string;
  limit?: number | null;
  description?: string | null;
  participants?: {
    __typename: "ModelEventParticipantConnection";
    items?: Array<{
      __typename: "EventParticipant";
      id: string;
      eventId: string;
      userName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEventSubscription = {
  __typename: "Event";
  id: string;
  name: string;
  type: string;
  venue: string;
  hostName: string;
  startDt: string;
  endDt: string;
  limit?: number | null;
  description?: string | null;
  participants?: {
    __typename: "ModelEventParticipantConnection";
    items?: Array<{
      __typename: "EventParticipant";
      id: string;
      eventId: string;
      userName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEventSubscription = {
  __typename: "Event";
  id: string;
  name: string;
  type: string;
  venue: string;
  hostName: string;
  startDt: string;
  endDt: string;
  limit?: number | null;
  description?: string | null;
  participants?: {
    __typename: "ModelEventParticipantConnection";
    items?: Array<{
      __typename: "EventParticipant";
      id: string;
      eventId: string;
      userName: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEventParticipantSubscription = {
  __typename: "EventParticipant";
  id: string;
  eventId: string;
  event?: {
    __typename: "Event";
    id: string;
    name: string;
    type: string;
    venue: string;
    hostName: string;
    startDt: string;
    endDt: string;
    limit?: number | null;
    description?: string | null;
    participants?: {
      __typename: "ModelEventParticipantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      eventParticipantId: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEventParticipantSubscription = {
  __typename: "EventParticipant";
  id: string;
  eventId: string;
  event?: {
    __typename: "Event";
    id: string;
    name: string;
    type: string;
    venue: string;
    hostName: string;
    startDt: string;
    endDt: string;
    limit?: number | null;
    description?: string | null;
    participants?: {
      __typename: "ModelEventParticipantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      eventParticipantId: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEventParticipantSubscription = {
  __typename: "EventParticipant";
  id: string;
  eventId: string;
  event?: {
    __typename: "Event";
    id: string;
    name: string;
    type: string;
    venue: string;
    hostName: string;
    startDt: string;
    endDt: string;
    limit?: number | null;
    description?: string | null;
    participants?: {
      __typename: "ModelEventParticipantConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      eventParticipantId: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  eventParticipantId: string;
  eventParticipant?: {
    __typename: "EventParticipant";
    id: string;
    eventId: string;
    event?: {
      __typename: "Event";
      id: string;
      name: string;
      type: string;
      venue: string;
      hostName: string;
      startDt: string;
      endDt: string;
      limit?: number | null;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userName: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  eventParticipantId: string;
  eventParticipant?: {
    __typename: "EventParticipant";
    id: string;
    eventId: string;
    event?: {
      __typename: "Event";
      id: string;
      name: string;
      type: string;
      venue: string;
      hostName: string;
      startDt: string;
      endDt: string;
      limit?: number | null;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userName: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  eventParticipantId: string;
  eventParticipant?: {
    __typename: "EventParticipant";
    id: string;
    eventId: string;
    event?: {
      __typename: "Event";
      id: string;
      name: string;
      type: string;
      venue: string;
      hostName: string;
      startDt: string;
      endDt: string;
      limit?: number | null;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    userName: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateEvent(
    input: CreateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<CreateEventMutation> {
    const statement = `mutation CreateEvent($input: CreateEventInput!, $condition: ModelEventConditionInput) {
        createEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          type
          venue
          hostName
          startDt
          endDt
          limit
          description
          participants {
            __typename
            items {
              __typename
              id
              eventId
              userName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEventMutation>response.data.createEvent;
  }
  async UpdateEvent(
    input: UpdateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<UpdateEventMutation> {
    const statement = `mutation UpdateEvent($input: UpdateEventInput!, $condition: ModelEventConditionInput) {
        updateEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          type
          venue
          hostName
          startDt
          endDt
          limit
          description
          participants {
            __typename
            items {
              __typename
              id
              eventId
              userName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEventMutation>response.data.updateEvent;
  }
  async DeleteEvent(
    input: DeleteEventInput,
    condition?: ModelEventConditionInput
  ): Promise<DeleteEventMutation> {
    const statement = `mutation DeleteEvent($input: DeleteEventInput!, $condition: ModelEventConditionInput) {
        deleteEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          type
          venue
          hostName
          startDt
          endDt
          limit
          description
          participants {
            __typename
            items {
              __typename
              id
              eventId
              userName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEventMutation>response.data.deleteEvent;
  }
  async CreateEventParticipant(
    input: CreateEventParticipantInput,
    condition?: ModelEventParticipantConditionInput
  ): Promise<CreateEventParticipantMutation> {
    const statement = `mutation CreateEventParticipant($input: CreateEventParticipantInput!, $condition: ModelEventParticipantConditionInput) {
        createEventParticipant(input: $input, condition: $condition) {
          __typename
          id
          eventId
          event {
            __typename
            id
            name
            type
            venue
            hostName
            startDt
            endDt
            limit
            description
            participants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          userName
          comments {
            __typename
            items {
              __typename
              id
              eventParticipantId
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEventParticipantMutation>response.data.createEventParticipant;
  }
  async UpdateEventParticipant(
    input: UpdateEventParticipantInput,
    condition?: ModelEventParticipantConditionInput
  ): Promise<UpdateEventParticipantMutation> {
    const statement = `mutation UpdateEventParticipant($input: UpdateEventParticipantInput!, $condition: ModelEventParticipantConditionInput) {
        updateEventParticipant(input: $input, condition: $condition) {
          __typename
          id
          eventId
          event {
            __typename
            id
            name
            type
            venue
            hostName
            startDt
            endDt
            limit
            description
            participants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          userName
          comments {
            __typename
            items {
              __typename
              id
              eventParticipantId
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEventParticipantMutation>response.data.updateEventParticipant;
  }
  async DeleteEventParticipant(
    input: DeleteEventParticipantInput,
    condition?: ModelEventParticipantConditionInput
  ): Promise<DeleteEventParticipantMutation> {
    const statement = `mutation DeleteEventParticipant($input: DeleteEventParticipantInput!, $condition: ModelEventParticipantConditionInput) {
        deleteEventParticipant(input: $input, condition: $condition) {
          __typename
          id
          eventId
          event {
            __typename
            id
            name
            type
            venue
            hostName
            startDt
            endDt
            limit
            description
            participants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          userName
          comments {
            __typename
            items {
              __typename
              id
              eventParticipantId
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEventParticipantMutation>response.data.deleteEventParticipant;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          eventParticipantId
          eventParticipant {
            __typename
            id
            eventId
            event {
              __typename
              id
              name
              type
              venue
              hostName
              startDt
              endDt
              limit
              description
              createdAt
              updatedAt
            }
            userName
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          eventParticipantId
          eventParticipant {
            __typename
            id
            eventId
            event {
              __typename
              id
              name
              type
              venue
              hostName
              startDt
              endDt
              limit
              description
              createdAt
              updatedAt
            }
            userName
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          eventParticipantId
          eventParticipant {
            __typename
            id
            eventId
            event {
              __typename
              id
              name
              type
              venue
              hostName
              startDt
              endDt
              limit
              description
              createdAt
              updatedAt
            }
            userName
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async GetEvent(id: string): Promise<GetEventQuery> {
    const statement = `query GetEvent($id: ID!) {
        getEvent(id: $id) {
          __typename
          id
          name
          type
          venue
          hostName
          startDt
          endDt
          limit
          description
          participants {
            __typename
            items {
              __typename
              id
              eventId
              userName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEventQuery>response.data.getEvent;
  }
  async ListEvents(
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventsQuery> {
    const statement = `query ListEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
        listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            type
            venue
            hostName
            startDt
            endDt
            limit
            description
            participants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEventsQuery>response.data.listEvents;
  }
  async GetEventParticipant(id: string): Promise<GetEventParticipantQuery> {
    const statement = `query GetEventParticipant($id: ID!) {
        getEventParticipant(id: $id) {
          __typename
          id
          eventId
          event {
            __typename
            id
            name
            type
            venue
            hostName
            startDt
            endDt
            limit
            description
            participants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          userName
          comments {
            __typename
            items {
              __typename
              id
              eventParticipantId
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEventParticipantQuery>response.data.getEventParticipant;
  }
  async ListEventParticipants(
    filter?: ModelEventParticipantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventParticipantsQuery> {
    const statement = `query ListEventParticipants($filter: ModelEventParticipantFilterInput, $limit: Int, $nextToken: String) {
        listEventParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            eventId
            event {
              __typename
              id
              name
              type
              venue
              hostName
              startDt
              endDt
              limit
              description
              createdAt
              updatedAt
            }
            userName
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEventParticipantsQuery>response.data.listEventParticipants;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          eventParticipantId
          eventParticipant {
            __typename
            id
            eventId
            event {
              __typename
              id
              name
              type
              venue
              hostName
              startDt
              endDt
              limit
              description
              createdAt
              updatedAt
            }
            userName
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            eventParticipantId
            eventParticipant {
              __typename
              id
              eventId
              userName
              createdAt
              updatedAt
            }
            content
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  OnCreateEventListener: Observable<
    SubscriptionResponse<OnCreateEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEvent {
        onCreateEvent {
          __typename
          id
          name
          type
          venue
          hostName
          startDt
          endDt
          limit
          description
          participants {
            __typename
            items {
              __typename
              id
              eventId
              userName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateEventSubscription>>;

  OnUpdateEventListener: Observable<
    SubscriptionResponse<OnUpdateEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEvent {
        onUpdateEvent {
          __typename
          id
          name
          type
          venue
          hostName
          startDt
          endDt
          limit
          description
          participants {
            __typename
            items {
              __typename
              id
              eventId
              userName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateEventSubscription>>;

  OnDeleteEventListener: Observable<
    SubscriptionResponse<OnDeleteEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEvent {
        onDeleteEvent {
          __typename
          id
          name
          type
          venue
          hostName
          startDt
          endDt
          limit
          description
          participants {
            __typename
            items {
              __typename
              id
              eventId
              userName
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteEventSubscription>>;

  OnCreateEventParticipantListener: Observable<
    SubscriptionResponse<OnCreateEventParticipantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEventParticipant {
        onCreateEventParticipant {
          __typename
          id
          eventId
          event {
            __typename
            id
            name
            type
            venue
            hostName
            startDt
            endDt
            limit
            description
            participants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          userName
          comments {
            __typename
            items {
              __typename
              id
              eventParticipantId
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateEventParticipantSubscription>>;

  OnUpdateEventParticipantListener: Observable<
    SubscriptionResponse<OnUpdateEventParticipantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEventParticipant {
        onUpdateEventParticipant {
          __typename
          id
          eventId
          event {
            __typename
            id
            name
            type
            venue
            hostName
            startDt
            endDt
            limit
            description
            participants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          userName
          comments {
            __typename
            items {
              __typename
              id
              eventParticipantId
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateEventParticipantSubscription>>;

  OnDeleteEventParticipantListener: Observable<
    SubscriptionResponse<OnDeleteEventParticipantSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEventParticipant {
        onDeleteEventParticipant {
          __typename
          id
          eventId
          event {
            __typename
            id
            name
            type
            venue
            hostName
            startDt
            endDt
            limit
            description
            participants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          userName
          comments {
            __typename
            items {
              __typename
              id
              eventParticipantId
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteEventParticipantSubscription>>;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<OnCreateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          eventParticipantId
          eventParticipant {
            __typename
            id
            eventId
            event {
              __typename
              id
              name
              type
              venue
              hostName
              startDt
              endDt
              limit
              description
              createdAt
              updatedAt
            }
            userName
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommentSubscription>>;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<OnUpdateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          eventParticipantId
          eventParticipant {
            __typename
            id
            eventId
            event {
              __typename
              id
              name
              type
              venue
              hostName
              startDt
              endDt
              limit
              description
              createdAt
              updatedAt
            }
            userName
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommentSubscription>>;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<OnDeleteCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          eventParticipantId
          eventParticipant {
            __typename
            id
            eventId
            event {
              __typename
              id
              name
              type
              venue
              hostName
              startDt
              endDt
              limit
              description
              createdAt
              updatedAt
            }
            userName
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommentSubscription>>;
}
