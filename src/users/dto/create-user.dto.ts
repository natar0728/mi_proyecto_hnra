import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'usuario@correo.com',
  })
  email: string;

  @ApiPropertyOptional({
    example: 'Usuario Prueba',
  })
  name?: string;

  @ApiProperty({
    example: '123456',
  })
  password: string;

  @ApiPropertyOptional({
    example: '88887777',
  })
  telephone?: string;

  @ApiProperty({
    example: 1,
    description: 'ID del tenant al que pertenece el usuario',
  })
  tenantId: number;
}