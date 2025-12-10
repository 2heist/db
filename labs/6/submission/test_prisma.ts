import { PrismaClient } from './prisma/my_prisma_lib/client.js';

const prisma = new PrismaClient();

async function main() {
  console.log( "Запуск TypeScript тесту...");

  try {

    try {
      const updatedUser = await prisma.users.update({
        where: { user_id: 1 },
        data: { is_vip: true },
      });
      console.log(`Статус оновлено: VIP = ${updatedUser.is_vip}`);
    } catch (e) {
      console.log("Юзера ID=1 не знайдено (пропускаємо)");
    }

    const newLog = await prisma.maintenance_log.create({
      data: {
        car_id: 1,
        description: "TypeScript Test Run",
      },
    });
    console.log(`Запис створено: ${newLog.description}`);

  } catch (error) {
    console.error("Помилка:", error);
  }
}

main()
  .finally(async () => await prisma.$disconnect());