# Звіт до Лабораторної роботи №6
**Тема:** Міграції схем баз даних за допомогою Prisma ORM

---

## 1. Вступ та налаштування
Метою роботи було ознайомлення з технологією ORM на прикладі Prisma та налаштування міграцій для бази даних PostgreSQL.

Спочатку було ініціалізовано проект та отримано існуючу структуру БД за допомогою команди інтроспекції:
`npx prisma db pull`

Це дозволило згенерувати початковий файл `schema.prisma` на основі таблиць з попередніх лабораторних робіт.

---

## 2. Модифікація схеми
Для реалізації нової бізнес-логіки системи у файл `schema.prisma` було внесено зміни.

### А. Модифікація існуючої таблиці (`users`)
До моделі користувача додано булеве поле `is_vip` для реалізації статусу лояльності клієнта (значення за замовчуванням `false`):

```prisma
model users {
  user_id               Int       @id @default(autoincrement())
  name                  String    @db.VarChar(100)
  email                 String    @unique @db.VarChar(150)
  phone_number          String    @db.VarChar(20)
  driver_license_number String    @unique @db.VarChar(50)
  created_at            DateTime? @default(now()) @db.Timestamp(6)
  is_vip                Boolean   @default(false) //new
  rent                  rent[]
  review                review[]
}
```

### Б. Додавання нової таблиці (`maintenance_log`)
Створено нову сутність для ведення журналів технічного обслуговування автомобілів. Налаштовано Foreign Key з таблицею `car`:

```prisma
model maintenance_log {
  log_id      Int      @id @default(autoincrement())
  car_id      Int
  description String
  log_date    DateTime @default(now()) @db.Timestamp(6)
  car         car      @relation(fields: [car_id], references: [car_id], onDelete: Cascade)
}
```

---

## 3. Застосування міграцій
Зміни були зафіксовані та застосовані до бази даних за допомогою команди:
`npx prisma migrate dev --name add_vip_and_logs`

Prisma автоматично згенерувала SQL-код міграції, виконала його в базі даних та оновила Prisma Client.

---

## 4. Перевірка роботи (Скрипт TypeScript)
Для перевірки функціональності був написаний скрипт `test_prisma.ts`, який використовує згенерований клієнт для маніпуляцій з даними.

**Код скрипта (`test_prisma.ts`):**
```typescript
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
```

### Результат виконання
Скрипт було запущено через `npm start` (середовище `tsx`).
Логи виконання підтверджують успішне оновлення запису користувача та створення нового запису в таблиці журналів:

![Скріншот виконання скрипта](console.png)
![Структура БД](res.png)
---

## 5. Висновки
У ході виконання лабораторної роботи №6 було успішно:
1. Налаштовано Prisma ORM у проекті.
2. Модифіковано схему бази даних (Code-First підхід) шляхом редагування `schema.prisma`.
3. Виконано міграцію БД, що додало нові поля та таблиці в PostgreSQL.
4. Написано та протестовано скрипт на TypeScript, який підтвердив коректність роботи нових структур даних.