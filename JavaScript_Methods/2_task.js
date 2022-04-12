var HappyBirthday = {
    hDays: [
        {name: "Dave", month: "09", day: "04"},
        {name: "Ann", month: "02", day: "27"},
        {name: "Nik", month: "08", day: "15"},
        {name: "Pul", month: "02", day: "18"},
        {name: "Steven", month: "07", day: "24"},
        {name: "Frank", month: "02", day: "13"},
    ],
    get property() {
        var names = [];
        for (var i = 0; i < this.hDays.length; i++) {
            names.push(this.hDays[i].name);
        }
        return names.join(',')

    },
    set property({name, day}) { //возник вопрос
        for (var i = 0; i < this.hDays.length; i++) {
            if (this.hDays[i].day === day || this.hDays[i].name === name)
                var sec = this.hDays[i];
        }
        return sec
    },
    showDaysOnMonth: function (month) {
        var nam = [];
        for (var i = 0; i < this.hDays.length; i++) {
            if (this.hDays[i].month === month)
                nam.push(this.hDays[i].name);
        }
        return nam.join(',')
    },
};
lg(HappyBirthday.property);
lg("День рождения в Июле(07)");
lg(HappyBirthday.showDaysOnMonth('07'));
lg(" ");