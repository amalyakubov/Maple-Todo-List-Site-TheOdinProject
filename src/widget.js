import { completeUncompleteTask } from "./item-constructor";
import { updateTaskDisplay } from "./today";

export function loadWidget(task, taskObject) {
    if (!document.getElementById('widget')) {
        const WIDGET = document.createElement('div');
    WIDGET.id = 'widget';

    const NAV = document.createElement('div');
    NAV.id = 'widget-nav';
    const PROJECT = document.createElement('p');
    PROJECT.textContent = 'Project : X';
    NAV.appendChild(PROJECT);

    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit';

    exitButton.addEventListener('click', () => {
        WIDGET.remove();
        
    })
    NAV.appendChild(exitButton);

    WIDGET.appendChild(NAV);

    const HEADER = document.createElement('div');
    HEADER.id = 'widget-header';

    let title = document.createElement('p');
    console.log(task);
    title.textContent = task.querySelector('p').textContent;

    HEADER.appendChild(createTaskButton(task, taskObject));
    HEADER.appendChild(title);
    WIDGET.appendChild(HEADER);

    const DESCRIPTIONCONTAINER = document.createElement('div');
    const DESCRIPTIONLABEL = document.createElement('label');
    DESCRIPTIONLABEL.for = 'description';
    DESCRIPTIONLABEL.textContent = 'Description';

    const GROWWRAP = document.createElement('div');
    GROWWRAP.id = 'grow-wrap';
    const DESCRIPTIONINPUT = document.createElement('textarea');
    DESCRIPTIONINPUT.id = 'description';
    DESCRIPTIONINPUT.name = 'description';
    DESCRIPTIONINPUT.oninput = "this.parentNode.dataset.replicatedValue = this.value";
    GROWWRAP.appendChild(DESCRIPTIONINPUT);

    DESCRIPTIONCONTAINER.appendChild(DESCRIPTIONLABEL);
    DESCRIPTIONCONTAINER.appendChild(GROWWRAP);
    WIDGET.appendChild(DESCRIPTIONCONTAINER);

    DESCRIPTIONINPUT.onkeydown = function() {
        let scrollHeight = DESCRIPTIONINPUT.scrollHeight;
        document.getElementById("description").style.height = scrollHeight + 'px';
    };
    

    const LIST = document.createElement('div');

    const DATE = document.createElement('p');
    DATE.textContent = 'dummy';
    LIST.appendChild(DATE);

    const PRIORITYCONTAINER = document.createElement('div');
    const LABEL = document.createElement('label');
    LABEL.for = 'priortiy';
    LABEL.textContent = 'Priority';
    const SELECT = document.createElement('select');
    SELECT.name = 'priorities';
    SELECT.id = 'priority';
    
    let optionOne = document.createElement('option');
    optionOne.value = 1;
    optionOne.textContent = 'One';
    SELECT.appendChild(optionOne);
    
    let optionTwo = document.createElement('option');
    optionTwo.value = 2;
    optionTwo.textContent = 'Two';
    SELECT.appendChild(optionTwo);

    let optionThree = document.createElement('option');
    optionThree.value = 3;
    optionThree.textContent = 'Three';
    SELECT.appendChild(optionThree);

    let optionFour = document.createElement('option');
    optionFour.value = 4;
    optionFour.textContent = 'Four';
    SELECT.appendChild(optionFour);
    PRIORITYCONTAINER.appendChild(SELECT);
    LIST.appendChild(PRIORITYCONTAINER);

    WIDGET.appendChild(LIST);
    document.body.appendChild(WIDGET);


    }
}


function createTaskButton (task, taskObject) {
    let button = document.createElement('button');
    button.classList.add('do');
    button.addEventListener('click', () => {
        completeUncompleteTask(taskObject);
        if (taskObject.complete === true) {
            button.style.backgroundColor = 'black';
        } else {
            button.style.backgroundColor = 'white';
        }
        button.classList.add('hasevl');
        task.classList.remove('done');
        updateTaskDisplay();
    })
    return button;
}