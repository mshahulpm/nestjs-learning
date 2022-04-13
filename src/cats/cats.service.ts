import { Injectable } from "@nestjs/common";
import { Cat } from '../interfaces/cat.interface';
import { CreateCatDto } from "./dto/cats.dto";


@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [
        {
            "name": "lotter",
            "age": 76,
            "breed": "alsation",
            id: 1
        }
    ]

    create(cat: CreateCatDto) {
        this.cats.push({
            ...cat,
            id: this.cats.length + 1
        })
    }

    findOne(id: number) {
        return (this.cats.find(cat => cat.id === id) || {
            error: 'Not found',
            status: 404
        })
    }

    findAll() {
        return this.cats
    }


}