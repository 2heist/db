-- 1. Створюємо нову таблицю-довідник моделей
CREATE TABLE car_model (
    model_id SERIAL PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    model_name VARCHAR(50) NOT NULL,
    UNIQUE(brand, model_name) 
);

-- 2. Міграція даних: Наповнюємо довідник з існуючої таблиці CAR
INSERT INTO car_model (brand, model_name)
SELECT DISTINCT brand, model
FROM car;

-- 3. Модифікація таблиці CAR: Додаємо колонку для зв'язку
ALTER TABLE car ADD COLUMN model_id INTEGER;

-- 4. Оновлення даних: Проставляємо ID моделей у таблицю CAR
UPDATE car
SET model_id = car_model.model_id
FROM car_model
WHERE car.brand = car_model.brand AND car.model = car_model.model_name;

--5. Робимо поле обов'язковим та створюємо зовнішній ключ
ALTER TABLE car 
    ALTER COLUMN model_id SET NOT NULL,
    ADD CONSTRAINT fk_car_model FOREIGN KEY (model_id) REFERENCES car_model(model_id);

-- 6. Очищення: Видаляємо старі текстові колонки, які більше не потрібні
ALTER TABLE car DROP COLUMN brand;
ALTER TABLE car DROP COLUMN model;

-- 7. Перевірка результату
SELECT * FROM car_model;
SELECT * FROM car;