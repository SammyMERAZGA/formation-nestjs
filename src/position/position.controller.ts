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
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Get('/all')
  getPositions() {
    return this.positionService.getAllPositions();
  }

  @Get('/:id')
  getOnePosition(@Param('id', ParseIntPipe) id: number) {
    return this.positionService.getOnePosition(id);
  }

  @Post('/create')
  createPosition(@Body() data: any) {
    return this.positionService.createPosition(data);
  }

  @Put('/:id')
  updatePosition(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.positionService.updatePosition(id, data);
  }

  @Delete('/:id')
  deletePosition(@Param('id', ParseIntPipe) id: number) {
    return this.positionService.deletePosition(id);
  }
}
