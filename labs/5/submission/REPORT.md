# Звіт до лабораторної роботи №5
**Тема:** Нормалізація бази даних.
**Мета:** Приведення схеми бази даних до Третьої нормальної форми (3NF) шляхом усунення транзитивних залежностей та аномалій даних.

---

## 1. Аналіз початкового стану

Для аналізу було обрано таблицю `CAR` (Автомобілі), яка мала наступну структуру:
`CAR(car_id, license_plate, brand, model, year, price_per_hour, location_id, status_id)`

### Аналіз функціональних залежностей:
* `car_id` -> `license_plate` (Унікальний ідентифікатор визначає номер).
* `car_id` -> `year`, `price_per_hour`, `location_id`, `status_id`.
* `car_id` -> `model`.
* **`model` -> `brand`** (Проблемна залежність).

### Перевірка нормальних форм :

1.  **1NF :** Виконано.
    * Усі атрибути є атомарними.
    * Відсутні групи, що повторюються.

2.  **2NF :** Виконано.
    * Первинний ключ (`car_id`) є простим.
    * Тому часткові залежності неможливі.

3.  **3NF :** Порушення.
    * Виявлено **транзитивну залежність**. Атрибут `brand` залежить від атрибута `model`, який не є ключем.
    * *Аномалія:* При багаторазовому введенні моделі "Camry" доводиться щоразу дублювати бренд "Toyota". Якщо допустити помилку ("Tayota"), дані стануть неузгодженими.

---

## 2. Процес нормалізації

Для досягнення 3NF було виконано декомпозицію таблиці `CAR` на дві таблиці: `car` (оновлена) та `car_model` (нова).

### Етап 1: Створення довідника моделей
Створено нову таблицю `car_model`, куди винесено залежні атрибути (`brand`, `model_name`).

```sql
CREATE TABLE car_model (
    model_id SERIAL PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    model_name VARCHAR(50) NOT NULL,
    UNIQUE(brand, model_name)
);
```

### Етап 2: Міграція даних
Унікальні пари "Бренд-Модель" перенесено з таблиці `car` у `car_model`.

```sql
INSERT INTO car_model (brand, model_name)
SELECT DISTINCT brand, model FROM car;
```

### Етап 3: Модифікація основної таблиці
До таблиці `car` додано посилання (`model_id`) на нову таблицю, а надлишкові стовпці (`brand`, `model`) видалено.

```sql
-- Додавання FK
ALTER TABLE car ADD COLUMN model_id INTEGER;

-- Лінковка даних
UPDATE car
SET model_id = car_model.model_id
FROM car_model
WHERE car.brand = car_model.brand AND car.model = car_model.model_name;

-- Фінальні обмеження та очищення
ALTER TABLE car 
    ALTER COLUMN model_id SET NOT NULL,
    ADD CONSTRAINT fk_car_model FOREIGN KEY (model_id) REFERENCES car_model(model_id);

ALTER TABLE car DROP COLUMN brand;
ALTER TABLE car DROP COLUMN model;
```

---

## 3. Результати

Схема приведена до 3NF. Кожен факт зберігається лише один раз.

### Оновлена структура:
* **Таблиця `car`:** Тепер містить тільки конкретні характеристики екземпляра авто (`license_plate`, `year`) та посилання на модель.
* **Таблиця `car_model`:** Містить довідникову інформацію про бренди та моделі.

### Скріншоти виконання:


**Вміст нової таблиці `car_model`:**
![Table Car Model](lab5_car_model.png)

**Вміст нормалізованої таблиці `car` (з `model_id`):**
![Table Car Normalized](lab5_car_updated.png)

---

## Висновки
У ході роботи було проаналізовано схему бази даних та виявлено транзитивну залежність у таблиці автомобілів. За допомогою SQL-операцій DDL (`CREATE`, `ALTER`) та DML (`INSERT`, `UPDATE`) проведено нормалізацію до 3NF. Це дозволило усунути дублювання даних брендів та уникнути аномалій при оновленні чи вставці нових моделей авто.