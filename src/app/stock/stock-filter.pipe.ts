import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
     name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

    transform(list: any[], filed: string, keyword: string): any {
        if (!filed || !keyword) {
            return list;
        }
        return list.filter(item => {
            let itemFiledValue = item[filed].toLowerCase();
            return itemFiledValue.indexOf(keyword) >= 0;
        })
    }

}
