import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MinLength } from 'class-validator';

export class CreateTeamDTO {
  @IsString({
    message: 'Le champ name doit être une chaine de caractères',
  })
  @Length(2, 30, {
    message: 'Le nom doit contenir entre 2 et 30 caractères',
  })
  @ApiProperty({
    description: "Le nom de l'équipe",
    example: 'FC Barcelone',
    minLength: 2,
    maxLength: 30,
    required: true,
  })
  name: string;

  @IsString({
    message: 'Le champ country doit être une chaine de caractères',
  })
  @MinLength(3)
  @ApiProperty({
    description: "Le pays de l'équipe",
    example: 'Espagne',
    minLength: 3,
    required: true,
  })
  country: string;
}
