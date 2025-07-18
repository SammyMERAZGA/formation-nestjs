import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDTO } from './dto/create-player.dto';
import { UpdatePlayerDTO } from './dto/update-player.dto';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('/all')
  getAllPlayers() {
    return this.playerService.getAllPlayers();
  }

  @Get('/all/team/:teamId')
  getAllPlayersByTeam(@Param('teamId', ParseIntPipe) teamId: number) {
    return this.playerService.getAllPlayersByTeam(teamId);
  }

  @Get('/all/position/:positionId')
  getAllPlayersByPosition(
    @Param('positionId', ParseIntPipe) positionId: number,
  ) {
    return this.playerService.getAllPlayersByPosition(positionId);
  }

  @Post('/create')
  createPlayer(@Body() data: CreatePlayerDTO) {
    return this.playerService.createPlayer(data);
  }

  @Put('/:id')
  updatePlayer(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePlayerDTO,
  ) {
    return this.playerService.updatePlayer(data, id);
  }

  @Delete('/:id')
  deletePlayer(@Param('id', ParseIntPipe) id: number) {
    return this.playerService.deletePlayer(id);
  }
}
