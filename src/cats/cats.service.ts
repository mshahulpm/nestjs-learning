import { Injectable } from "@nestjs/common";
import { Cat } from '../interfaces/cat.interface';


@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [
        {
            "name": "lotter",
            "age": 76,
            "breed": "alsation"
        }
    ]

    create(cat: Cat) {
        this.cats.push(cat)
    }

    findAll() {
        return this.cats
    }


}