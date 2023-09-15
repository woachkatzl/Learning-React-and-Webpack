import TaskItem from './domain/model/task';
import { Button } from './presentation/ui-kit/button';

const task1 = new TaskItem('task1', 'My first task');

function testButton() {
    console.log('Success!');
}
const button = new Button(testButton, 'Кнопка!');

document.body.appendChild(button.render());