const btn = document.getElementById("enter");
const inpt = document.getElementById("userInput");
const ul = document.querySelector('ul');

function inputLength() {
    return inpt.value.length;
}

function checkList() {
    return document.getElementsByTagName('li').length;
}

function createListElement() {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(inpt.value));
    ul.appendChild(li);
    inpt.value = "";

    //togle done
    li.addEventListener('click', toggleDone);

    if (checkList() > 0) {
        const emptyList = document.querySelector('p');
        emptyList.style.display = "none";
    }

    function toggleDone() {
        li.classList.toggle('done');
    }

    // Create delete button
    const delBtn = document.createElement('button');
    const delX = document.createTextNode('X');
    delBtn.classList.add('custBtn');
    delBtn.appendChild(delX);
    delBtn.addEventListener('click', delItem);
    li.append(delBtn);

    function delItem() {
        li.remove();
        if (inputLength() === 0) {
            const emptyList = document.querySelector('p');
            emptyList.style.display = 'block';
        }
    }
}


function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key == 'Enter') {
        createListElement();
    }
}



btn.addEventListener('click', addListAfterClick);

inpt.addEventListener('keypress', addListAfterKeypress);