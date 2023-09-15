class TaskItem {
    constructor(index, value) {
        this.index = index; // зачения с порядковыми числами, с таким же форматом, как id input-элементов: "task1"
        this.value = value; // текстовое значение элемента с задачей
        this.checked = false; // статус чекбокса элемента с задачей
    }


}

export default TaskItem;