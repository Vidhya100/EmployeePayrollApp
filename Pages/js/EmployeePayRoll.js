const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});

class EmployeePayrollData{
    get name() { return this._name; }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-z\\]{2,}$')
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect';
    }

    get startDate() { return this._startDate; }
    set startDate(startDate){
        this._startDate = startDate;
    }
}