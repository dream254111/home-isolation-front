import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UtilService {
    DateToString(input: Date | null | undefined): string {
        if (input == undefined || input == null) return ''

        var year = input.getFullYear() + 543
        var month = this.ToTwoDigitNumber(input.getMonth() + 1)
        var date = this.ToTwoDigitNumber(input.getDate())
        var separator = "/"

        return date + separator + month + separator + year
    }

    DateTimeToString(input: Date | null | undefined): string {
        if (input == undefined || input == null) return ''

        var year = input.getFullYear() + 543
        var month = this.ToTwoDigitNumber(input.getMonth() + 1)
        var date = this.ToTwoDigitNumber(input.getDate())
        var separator_date = "/"
        var hour = input.getHours() 
        var minute = input.getMinutes()
        var second = input.getSeconds()
        var separator_time = ":"

        return date + separator_date + month + separator_date + year + " " + 
        hour + separator_time + minute + separator_time + second

    }

    ToTwoDigitNumber(num: number): string {
        if (num > 10) return num.toString()
        else return '0' + num.toString()
    }
}