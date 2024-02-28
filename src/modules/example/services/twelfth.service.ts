import { Injectable } from '@nestjs/common';

import { EleventhService } from './eleventh.service';

@Injectable()
export class TwelfthService {
    constructor(protected eleventh: EleventhService) {}

    async echo() {
        await this.eleventh.add();
        console.log(`in use service: ${await this.eleventh.find()}`);
    }
}
