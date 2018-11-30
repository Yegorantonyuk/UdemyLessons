
let money = prompt("Ваш бюджет на месяц?", '1000'),
    time = prompt("Введите дату в формате YYYY-MM-DD", '2018-11-30');
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {}, //и что нужно передать сюда
    optionalExpenses: {},
    income: [],
    savings: false
};

let q1 = prompt("Введите обязательную статью расходов в этом месяце", 'apartment');
    q2 = prompt("Во сколько обойдется?",'200');
    q3 = prompt("Введите обязательную статью расходов в этом месяце", 'other');
    q4 = prompt("Во сколько обойдется?",'500');

    //не понял что это и за что отвечает
    /* appData.expenses.a1 = a2; 
    appData.expenses.a3 = a4; */

alert(appData.budget / 30);

/* Для удобства я заполнил поля заранее */