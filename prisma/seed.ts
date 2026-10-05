import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('123456', 10);

  const tenant = await prisma.tenant.create({
    data: {
      name: 'Tenant Principal',
    },
  });

  await prisma.user.create({
    data: {
      email: 'admin@correo.com',
      name: 'Administrador',
      password: password,
      telephone: '88888888',
      role: Role.ADMIN,
      tenantId: tenant.id,
    },
  });

  console.log('Datos iniciales insertados correctamente');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });