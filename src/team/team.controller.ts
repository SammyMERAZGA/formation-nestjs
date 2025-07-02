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
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get('/all')
  getTeams() {
    return this.teamService.getAllTeams();
  }

  @Get('/:id')
  getOneTeam(@Param('id', ParseIntPipe) id: number) {
    return this.teamService.getOneTeam(id);
  }

  @Post('/create')
  createTeam(@Body() data: any) {
    return this.teamService.createTeam(data);
  }

  @Put('/:id')
  updateTeam(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.teamService.updateTeam(id, data);
  }

  @Delete('/:id')
  deleteTeam(@Param('id', ParseIntPipe) id: number) {
    return this.teamService.deleteTeam(id);
  }
}
