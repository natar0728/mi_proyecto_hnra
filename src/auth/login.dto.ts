import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    required: true,
    example: 'admin@correo.com',
  })
  email: string;

  @ApiProperty({
    required: true,
    example: '123456',
  })
  password: string;
}