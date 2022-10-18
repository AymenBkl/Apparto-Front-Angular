import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Pipe({
  name: 'searchUsers'
})
export class SearchUsers implements PipeTransform {

  transform(users: User[], ...args: string[]): unknown {
    if (!users){
      return [];
    }
    return users.filter(item => (item.firstName + item.lastName).toLocaleLowerCase().includes(args[0].toLocaleLowerCase()));
  }

}
