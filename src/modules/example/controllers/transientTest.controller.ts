import { Controller, Get } from '@nestjs/common';

import { EleventhService } from '../services/eleventh.service';
import { TwelfthService } from '../services/twelfth.service';

@Controller('transientTest')
export class TransientTestController {
    constructor(
        private eleventh: EleventhService,
        private twelfth: TwelfthService,
    ) {}

    @Get('scope-transient')
    async echoScopeTransient() {
        await this.twelfth.echo();
        await this.eleventh.add();
        console.log(`in controller: ${await this.eleventh.find()}`);
        return `Transient Scope Test`;
    }
}
