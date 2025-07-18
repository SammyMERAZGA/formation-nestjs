import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreatePlayerDTO {
  @ApiProperty({
    description: 'Le prénom du joueur',
    example: 'Cole',
    type: String,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'Le nom du joueur',
    example: 'Palmer',
    type: String,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: "L'id de l'équipe du joueur",
    example: 1,
    type: Number,
  })
  @IsNumber()
  @IsPositive()
  teamId: number;

  @ApiProperty({
    description: "L'id du poste du joueur",
    example: 1,
    type: Number,
  })
  @IsNumber()
  @IsPositive()
  positionId: number;
}
