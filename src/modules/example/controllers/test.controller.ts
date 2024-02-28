import { Controller, Get, Inject } from '@nestjs/common';

import { EighthService } from '../services/eighth.service';
import { EleventhService } from '../services/eleventh.service';
import { FifthService } from '../services/fifth.service';
import { FirstService } from '../services/first.service';
import { FourthService } from '../services/fourth.service';
import { NinethService } from '../services/nineth.service';
import { SecondService } from '../services/second.service';
import { SeventhService } from '../services/seventh.service';
import { TenthService } from '../services/tenth.service';
import { TwelfthService } from '../services/twelfth.service';

@Controller('test')
export class TestController {
    constructor(
        private first: FirstService,
        @Inject('ID-EXAMPLE') private idExp: FirstService,
        @Inject('FACTORY-EXAMPLE') private ftExp: FourthService,
        @Inject('ALIAS-EXAMPLE') private asExp: FirstService,
        @Inject('ASYNC-EXAMPLE') private acExp: SecondService,
        private fifth: FifthService,
        private seventh: SeventhService,
        private eighth: EighthService,
        private nineth: NinethService,
        private tenth: TenthService,
        private eleventh: EleventhService,
        private twelfth: TwelfthService,
    ) {}

    @Get('value')
    async useValue() {
        return this.first.useValue();
    }

    @Get('id')
    async useId() {
        return this.idExp.useId();
    }

    @Get('factory')
    async useFactory() {
        return this.ftExp.getContent();
    }

    @Get('alias')
    async useAlias() {
        return this.asExp.useAlias();
    }

    @Get('async')
    async useAsync() {
        return this.acExp.useAsync();
    }

    @Get('circular')
    async useCircular() {
        return this.fifth.circular();
    }

    @Get('scope-default')
    async echoScopeDefault() {
        await this.eighth.echo();
        await this.seventh.add();
        console.log(`in controller: ${await this.seventh.find()}`);
        return 'Default Scope Test';
    }

    @Get('scope-request')
    async echoScopeRequest() {
        await this.tenth.echo();
        await this.nineth.add();
        console.log(`in controller: ${await this.nineth.find()}`);
        return 'Request Scope Test';
    }

    @Get('scope-transient')
    async echoScopeTransient() {
        await this.twelfth.echo();
        await this.eleventh.add();
        console.log(`in controller: ${await this.eleventh.find()}`);
        return 'Transient Scope Test';
    }
}
