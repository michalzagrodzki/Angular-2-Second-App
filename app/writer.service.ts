/**
 * Created by michalzagrodzki on 23/01/16.
 */

import {WRITERS} from './mock-writers';
import {Injectable} from 'angular2/core';

@Injectable()
export class WriterService {
    getWriters(){
        // asynchronous call for writers array
        return Promise.resolve(WRITERS);
    }
}