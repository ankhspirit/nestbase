import { Global, Module } from '@nestjs/common';

import { StaticConfigService } from './services/config.service';

@Global()
@Module({
    providers: [StaticConfigService],
    exports: [StaticConfigService],
})
export class StaticCoreModule {}
