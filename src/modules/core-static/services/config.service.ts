import { Injectable } from '@nestjs/common';
import { get } from 'lodash';

const config: Record<string, any> = {
    name: '3R 教室',
};
@Injectable()
export class StaticConfigService {
    get<T>(key: string, defaultValue?: T): T | undefined {
        return get(config, key, defaultValue);
    }
}
