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

    ToTwoDigitNumber(num: number): string {
        if (num > 10) return num.toString()
        else return '0' + num.toString()
    }
}