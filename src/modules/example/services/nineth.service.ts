import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class NinethService {
    protected demo = 0;

    async add() {
        this.demo++;
    }

    async find() {
        return this.demo;
    }
}
