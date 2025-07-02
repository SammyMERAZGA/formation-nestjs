import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreatePositionDTO {
  @IsString({
    message: 'Le champ name doit être une chaine de caractères',
  })
  @Length(2, 25, {
    message: 'Le nom du poste doit contenir entre 2 et 30 caractères',
  })
  @ApiProperty({
    description: 'Le poste du joueur',
    example: 'FC Barcelone',
    minLength: 2,
    maxLength: 30,
    required: true,
  })
  name: string;
}
