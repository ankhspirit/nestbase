import { DynamicModule, Module } from '@nestjs/common';

import { DynamicConfigService } from './services/config.service';

@Module({})
export class DynamicCoreModule {
    static forRoot(options: { config: RecordAny }): DynamicModule {
        return {
            module: DynamicCoreModule,
            global: true,
            providers: [
                {
                    provide: DynamicConfigService,
                    useFactory() {
                        return new DynamicConfigService(options.config);
                    },
                },
            ],
            exports: [DynamicConfigService],
        };
    }
}
