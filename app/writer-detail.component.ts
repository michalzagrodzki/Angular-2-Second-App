/**
 * Created by michalzagrodzki on 23/01/16.
 */

import {Component} from 'angular2/core';
import {Writer} from './writer';

@Component({
    /** html selector **/
    selector: 'my-writer-detail',

    /** html template for presenting data **/
    template: `
    <div *ngIf="writer">
        <h2>{{writer.name}} details</h2>
        <div><label>id: </label>{{writer.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)] = "writer.name" placeholder="name"/>
        </div>
    </div>
    `,
    inputs: ['writer']
})

export class WriterDetailComponent {

    public writer: Writer;

}
