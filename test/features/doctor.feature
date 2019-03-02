#features/doctor.feature
Feature: Врачи › Страница выдачи врачей: Фильтр "Расписание" на выдаче врачей
    Scenario: Выбор дня
        Given Открыта страница сайта "/doctor"
        Then Отображается кнопка "Расписание (фильтр)"
        Then Заголовок кнопки "Расписание (фильтр)" содержит текст "Расписание на все дни"
        When Нажимаем на кнопку "Расписание (фильтр)"
        Then Отображается элемент "Список значений для выбора даты"
        Then Помечен галочкой пункт "Все дни" в выпадающем списке "Список значений для выбора даты"
        When Нажимаем на пункт "Завтра" в выпадающем списке "Список значений для выбора даты"
        Then Заголовок кнопки "Расписание (фильтр)" содержит текст "Расписание на завтра"
        Then Отображаются врачи, работающие в выбранный день