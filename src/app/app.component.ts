import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
	selector: 'app-root',
	template: '<store></store>',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'my-app';
	// model = new Model();

	// getName() {
	// 	return this.model.user;
	// }
	// getTodoItems() {
	// 	return this.model.items.filter(item => !item.done);
	// }
	// addItem(newItem: any) {
	// 	if (newItem !== '') {
	// 		this.model.items.push(new TodoItem(newItem, false));
	// 		console.log(this.model);
	// 	}
	// }
}
