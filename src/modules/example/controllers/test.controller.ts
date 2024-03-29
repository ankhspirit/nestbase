import { Controller, Get, Inject } from '@nestjs/common';

import { PostService } from '@/modules/content/services/post.service';

import { DynamicConfigService } from '@/modules/core-dynamic/services/config.service';
import { StaticConfigService } from '@/modules/core-static/services/config.service';

import { EighthService } from '../services/eighth.service';
import { FifthService } from '../services/fifth.service';
import { FirstService } from '../services/first.service';
import { FourthService } from '../services/fourth.service';
import { NinethService } from '../services/nineth.service';
import { SecondService } from '../services/second.service';
import { SeventhService } from '../services/seventh.service';
import { TenthService } from '../services/tenth.service';

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
        private postService: PostService,
        private staticConfigService: StaticConfigService,
        private dynamicConfigService: DynamicConfigService,
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

    @Get('posts')
    async posts() {
        return this.postService.findAll();
    }

    @Get('name-static')
    async nameStatic() {
        return this.staticConfigService.get('name');
    }

    @Get('name-dynamic')
    async nameDynamic() {
        return this.dynamicConfigService.get('name');
    }
}
