import { Injectable } from "@nestjs/common";
import { Dog } from "src/interfaces/dogs";


@Injectable()
export class DogService {

    private readonly dogs: Dog[] = [
        {
            "name": "lotter",
            "age": 76,
            "breed": "alsation",
            "owner": "joe",
            "id": 1
        }
    ]

    create(dog: Dog) {
        this.dogs.push(dog)
    }

    findAll() {
        return this.dogs
    }
}