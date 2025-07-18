import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdatePlayerDTO {
  @ApiProperty({
    description: 'Le prénom du joueur',
    example: 'Cole',
    type: String,
  })
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({
    description: 'Le nom du joueur',
    example: 'Palmer',
    type: String,
  })
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiProperty({
    description: "L'id de l'équipe du joueur",
    example: 1,
    type: Number,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  teamId: number;

  @ApiProperty({
    description: "L'id du poste du joueur",
    example: 1,
    type: Number,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  positionId: number;
}
