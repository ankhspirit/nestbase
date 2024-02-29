import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './modules/content/content.module';
import { DynamicCoreModule } from './modules/core-dynamic/core.module';
import { StaticCoreModule } from './modules/core-static/core.module';
import { ExampleModule } from './modules/example/example.module';

@Module({
    imports: [
        ContentModule,
        ExampleModule,
        StaticCoreModule,
        DynamicCoreModule.forRoot({
            config: {
                name: '3R 教室',
            },
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
