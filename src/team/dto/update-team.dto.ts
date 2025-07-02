import { IsOptional, IsString, Length, MinLength } from 'class-validator';

export class UpdateTeamDTO {
  @IsOptional()
  @IsString({
    message: 'Le champ name doit être une chaine de caractères',
  })
  @Length(2, 30, {
    message: 'Le nom doit contenir entre 2 et 30 caractères',
  })
  name: string;

  @IsOptional()
  @IsString({
    message: 'Le champ country doit être une chaine de caractères',
  })
  @MinLength(3)
  country: string;
}
