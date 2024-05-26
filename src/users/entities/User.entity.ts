import { ApiProperty } from "@nestjs/swagger"
import { Entity } from "typeorm"

@Entity()
export class User {
    @ApiProperty({
        description: 'User identifier string',
        type: 'string',
    })
    id: string

    @ApiProperty({
        description: 'User email',
        type: 'string',
    })
    email: string

    @ApiProperty({
        description: 'User password',
        type: 'string',
    })
    password: string

    @ApiProperty({
        description: 'User first name',
        type: 'string',
    })
    firstName: string

    @ApiProperty({
        description: 'User last name',
        type: 'string',
    })
    lastName: string
}