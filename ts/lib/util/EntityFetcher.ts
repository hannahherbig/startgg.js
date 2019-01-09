import log from 'winston'
import request from 'request-promise';
import { format } from 'util'
import * as Common from './Common'

/* Interfaces */
import { ITournament } from '../interfaces/ITournament'
import { IEvent } from '../interfaces/IEvent'
import { IPhase } from '../interfaces/IPhase'
import { IPhaseGroup } from '../interfaces/IPhaseGroup'

/* Types */
import TTournament = ITournament.Tournament
import TEvent = IEvent.Event
import TPhase = IPhase.Phase
import TPhaseGroup = IPhaseGroup.PhaseGroup

import createExpandsString = Common.createExpandsString
import TournamentOptions = ITournament.Options
import TournamentData = ITournament.Data;
import EventOptions = IEvent.Options
import EventData = IEvent.EventData
import PhaseOptions = IPhase.Options
import PhaseData = IPhase.Data
import PhaseGroupOptions = IPhaseGroup.Options
import PhaseGroupData = IPhaseGroup.Data

import parseTournamentOptions = ITournament.parseOptions;
import parseEventOptions = IEvent.parseOptions;

const TOURNAMENT_URL = 'https://api.smash.gg/tournament/%s?%s';
const EVENT_URL = 'https://api.smash.gg/event/%s?%s';
const PHASE_URL = 'https://api.smash.gg/phase/%s?%s';
const PHASE_GROUP_URL = 'https://api.smash.gg/phase_group/%s?%s';


export async function getTournamentData(tournamentId: string, options: TournamentOptions): Promise<TournamentData>{
    try{
        options = parseTournamentOptions(options);
        let expands: string = createExpandsString(options.expands)
        let url: string = format(TOURNAMENT_URL, tournamentId, expands);
        let data: TournamentData = JSON.parse(await request(url));
        return data;
    } catch(err){
        console.error('Error creating Tournament. For more info, implement Event.on(\'error\')');
        log.error('Event error: %s', err.message);
        throw err;
    }
}

export async function getEventData(eventId: string, options: EventOptions): Promise<EventData>{
    try{
        options = parseEventOptions(options);
        let expands: string = createExpandsString(options.expands)
        let url: string = format(EVENT_URL, eventId, expands);
        let data: EventData = JSON.parse(await request(url));
        return data;
    } catch(err){
        console.error('Error creating Tournament. For more info, implement Event.on(\'error\')');
        log.error('Event error: %s', err.message);
        throw err;
    }
}

export async function getEventDataById(eventId: number, options: EventOptions): Promise<EventData>{
    try{
        options = parseEventOptions(options);
        let expands: string = createExpandsString(options.expands)
        let url: string = format(EVENT_URL, eventId, expands);
        let data: EventData = JSON.parse(await request(url));
        return data;
    } catch(err){
        console.error('Error creating Tournament. For more info, implement Event.on(\'error\')');
        log.error('Event error: %s', err.message);
        throw err;
    }
}

export async function getPhase(phaseId: number, options: PhaseOptions): Promise<PhaseData> {

}

export async function getPhaseGroup(phaseGroupId: number, options: PhaseGroupOptions): Promise<PhaseGroupData> {
    
}