export type Event = {
    id: string,
    name: string,
    type: string,
    venue: string,
    hostName: string | null,
    startDt: string,
    endDt: string,
    limit?: number,
    description?: string
    participants?: any
}