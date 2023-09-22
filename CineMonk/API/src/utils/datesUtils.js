export default class datesUtils{
    formatado(dates){
        let resul = [];
        for (let index = 0; index < dates.length; index++) {
            let week = this.dayOfWeek(dates[index].data);
            let day = dates[index].data.split('-')[2];
            let month = this.getMonth(dates[index].data);
            let resp =
            {
                data: dates[index].data,
                month: month,
                week: week,
                day: day
            };
            resul.push(resp)
            
        }
        return resul;
    }

    dayOfWeek(date){
        let result = "-";
        date = date.substr(0,4) + "," + date.substr(5,2) + "," + date.substr(8,2);
        let newDate = new Date(date);
        let day = newDate.getDay();
        switch (day) {
            case 0:
                result = "Domingo";
                break;
            case 1:
                result = "Segunda";
                break;
            case 2:
                result = "Terça";
                break;
            case 3:
                result = "Quarta";
                break;
            case 4:
                result = "Quinta";
                break;
            case 5:
                result = "Sexta";
                break;
            case 6:
                result = "Sádado";
                break;
            default:
                result = "Dia não encontrado"
                break;
        }
        return(result);
    }

    getMonth(date){
        let result = "-";
        date = date.substr(0,4) + "," + date.substr(5,2) + "," + date.substr(8,2);
        let newDate = new Date(date);
        let month = newDate.getMonth();
        switch (month) {
            case 0:
                result = "Janeiro";
                break;
            case 1:
                result = "Fevereiro";
                break;
            case 2:
                result = "Março";
                break;
            case 3:
                result = "Abril";
                break;
            case 4:
                result = "Maio";
                break;
            case 5:
                result = "Junho";
                break;
            case 6:
                result = "Julho";
                break;
            case 7:
                result = "Agosto";
                break;
            case 8:
                result = "Setembro";
                break;
            case 9:
                result = "Outubro";
                break;
            case 10:
                result = "Novembro";
                break;
            case 11:
                result = "Dezembro";
                break;
            default:
                result = "Mês não encontrado"
                break;
        }
        return(result);
    }

    toISO(date) {
        return date.length === 10 ? `${date}T00:00:00.000` : date;
    }

    pad(value) {
        let resp = value.toString().padStart(2, '0');
        return resp
    }

    toISOBRString(date) {
        let a = date.getFullYear()
        let tente = date.getMonth() + 1
        a = a + '-' + this.pad(date.getMonth() + 1)
        a = a + '-' + this.pad(date.getDate())
        a = a + 'T' + this.pad(date.getHours())
        a = a + ':' + this.pad(date.getMinutes())
        a = a + ':' + this.pad(date.getSeconds()) 
        a = a + '.' + (date.getMilliseconds() / 1000).toFixed(3)

        return a
    };
}