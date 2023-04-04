import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerEmailFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }

    return value.filter((val: any) => {
      console.log(val)
      // let rVal = (val.name.toLowerCase().includes(args.toLowerCase()));
      // console.log(rVal)
      // return rVal;

      return (
        val.name.toLowerCase().includes(args.toLowerCase()) || val.email.toLowerCase().includes(args.toLowerCase()) ||
        val.address.toLowerCase().includes(args.toLowerCase()) || val.empID?.toLowerCase().includes(args.toLowerCase())
      )
    })

  }

}