import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PositionService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPositions() {
    return this.prisma.position.findMany();
  }

  async getOnePosition(id: number) {
    const position = await this.prisma.position.findUnique({
      where: { id },
    });

    if (!position) {
      throw new NotFoundException("Aucun poste n'existe avec cet id !");
    }

    return position;
  }

  async createPosition(data) {
    return this.prisma.position.create({
      data,
    });
  }

  async updatePosition(id: number, data) {
    const position = await this.prisma.position.findUnique({
      where: { id },
    });

    if (!position) {
      throw new NotFoundException(
        "Aucun poste n'existe avec cet id, on ne peut pas le modifier !",
      );
    }

    return this.prisma.position.update({
      where: { id },
      data,
    });
  }

  async deletePosition(id: number) {
    const position = await this.prisma.position.findUnique({
      where: { id },
    });

    if (!position) {
      throw new NotFoundException(
        "Aucun poste n'existe avec cet id, on ne peut pas le supprimer !",
      );
    }

    return this.prisma.position.delete({
      where: { id },
    });
  }
}
