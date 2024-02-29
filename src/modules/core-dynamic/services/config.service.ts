import { Injectable } from '@nestjs/common';
import { get } from 'lodash';

@Injectable()
export class DynamicConfigService {
    protected config: RecordAny = {};

    constructor(data: RecordAny) {
        this.config = data;
    }

    get<T>(key: string, defaultValue?: T): T | undefined {
        return get(this.config, key, defaultValue);
    }
}
