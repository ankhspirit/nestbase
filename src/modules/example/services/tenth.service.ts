import { Injectable } from '@nestjs/common';

import { NinethService } from './nineth.service';

@Injectable()
export class TenthService {
    constructor(protected nineth: NinethService) {}

    async echo() {
        await this.nineth.add();
        console.log(`in use service: ${await this.nineth.find()}`);
    }
}
